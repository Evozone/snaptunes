'use client';

import {
    forwardRef,
    useState,
    Dispatch,
    SetStateAction,
    type ChangeEvent,
    type DragEvent,
} from 'react';
import { cn, validateFileType } from '@/utils/cn';

const MAX_FILE_SIZE = 4000000;

interface FileWithUrl {
    extension: string;
    base64: string;
    size: number;
}

interface ImageParts {
    inlineData: { data: string; mimeType: string };
}

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    input: FileWithUrl[];
    setInput: Dispatch<SetStateAction<FileWithUrl[]>>;
    generateSongs: () => void;
    imageParts: ImageParts[];
    setImageParts: Dispatch<SetStateAction<ImageParts[]>>;
}

const FileInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            input,
            setInput,
            generateSongs,
            imageParts,
            setImageParts,
            ...props
        },
        ref
    ) => {
        const [dragActive, setDragActive] = useState<boolean>(false);

        const noInput = input.length === 0;

        // handle drag events
        const handleDrag = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.type === 'dragenter' || e.type === 'dragover') {
                setDragActive(true);
            } else if (e.type === 'dragleave') {
                setDragActive(false);
            }
        };

        async function fileToGenerativePart(file: File) {
            const base64EncodedDataPromise = new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve((reader.result as string)?.split(',')[1]);
                };
                reader.readAsDataURL(file);
            });
            return {
                inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
            };
        }

        // triggers when file is selected with click
        const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();

            if (e.target.files && e.target.files[0]) {
                // at least one file has been selected

                const files = Array.from(e.target.files);

                // check if file size is too large
                const largeFiles = files.filter((file) => file.size > MAX_FILE_SIZE);
                if (largeFiles.length) {
                    alert('File size is too large');
                    return;
                }

                // check if file type is valid
                const invalidFiles = files.filter((file) => !validateFileType(file));
                if (invalidFiles.length) {
                    alert('Invalid file type');
                    return;
                }

                // ceheck if input already has 4 files selected and prevent adding more
                if (input.length + files.length > 4) {
                    alert('You can only select up to 4 files');
                    return;
                }

                // convert files to base64
                const filePromises = files.map((file) => {
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            resolve({
                                extension: file.name.split('.').pop() || '',
                                base64: reader.result as string,
                                size: file.size,
                            });
                        };
                    });
                });

                const fileData = (await Promise.all(filePromises)) as [];
                setInput([...fileData, ...input]);

                const newImageParts = await Promise.all(
                    [...files].map(fileToGenerativePart)
                );
                setImageParts([...newImageParts, ...imageParts]);
            }
        };

        // triggers when file is dropped
        const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();

            // validate file type
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                // at least one file has been selected

                const files = Array.from(e.dataTransfer.files);

                // check if file size is too large
                const largeFiles = files.filter((file) => file.size > MAX_FILE_SIZE);
                if (largeFiles.length) {
                    alert('File size is too large');
                    return;
                }

                // check if file type is valid
                const invalidFiles = files.filter((file) => !validateFileType(file));
                if (invalidFiles.length) {
                    alert('Invalid file type');
                    return;
                }

                // ceheck if input already has 4 files selected and prevent adding more
                if (input.length + files.length > 4) {
                    alert('You can only select up to 4 files');
                    return;
                }

                // convert files to base64
                const filePromises = files.map((file) => {
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            resolve({
                                extension: file.name.split('.').pop() || '',
                                base64: reader.result as string,
                                size: file.size,
                            });
                        };
                    });
                });
                const fileData = (await Promise.all(filePromises)) as [];
                setInput([...fileData, ...input]);

                const newImageParts = await Promise.all(
                    [...files].map(fileToGenerativePart)
                );
                setImageParts([...newImageParts, ...imageParts]);
            }
        };

        const removeImage = (indexToRemove: number) => {
            setInput((prevInput) =>
                prevInput.filter((_, index) => index !== indexToRemove)
            );
            setImageParts((prevImageParts) =>
                prevImageParts.filter((_, index) => index !== indexToRemove)
            );
        };

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                onDragEnter={handleDrag}
                className="h-5/6 items-center w-full justify-start"
            >
                <label
                    htmlFor="dropzone-file"
                    className={cn(
                        'group relative h-full flex flex-col items-center justify-center w-full aspect-video border-2 border-slate-300 border-dashed rounded-lg dark:border-slate-300 transition',
                        { 'dark:border-slate-400 dark:bg-slate-800': dragActive },
                        { 'items-start justify-start': !noInput },
                        { 'dark:hover:border-slate-400 dark:hover:bg-slate-800': noInput }
                    )}
                >
                    <div
                        className={cn(
                            'relative w-full h-full flex flex-col items-center justify-center',
                            { 'items-start': !noInput }
                        )}
                    >
                        {noInput ? (
                            <>
                                <div
                                    className="absolute inset-0 cursor-pointer"
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                />

                                <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mb-3 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                </svg>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span>{' '}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    up to 4 images 4MB per file
                                </p>

                                <input
                                    {...props}
                                    ref={ref}
                                    multiple
                                    onChange={handleChange}
                                    accept="image/jpeg, image/jpg, image/png"
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col w-full h-full overflow-y-scroll p-2">
                                    {/* preview img */}
                                    {input.map((file, index) => (
                                        <div
                                            key={index}
                                            className="relative inline-block w-full h-40 sm:h-60 md:h-80 lg:h-96 xl:h-96 mb-4"
                                        >
                                            {/* a x on top right of image to remove it */}
                                            <button
                                                onClick={() => removeImage(index)}
                                                className="absolute top-0 right-0 z-10 p-2 text-white bg-black border-white border-2 bg-opacity-50 rounded-full"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={(file as { base64: string })?.base64}
                                                alt=""
                                                className="rounded-lg object-cover w-full h-full"
                                                // style={{ borderRadius: '10px' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* dropzone */}
                                <div className=" w-full">
                                    {!(input.length > 3) && (
                                        <label
                                            htmlFor="dropzone-file-images-present"
                                            className="relative cursor-pointer group hover:border-gray-500 hover:dark:bg-slate-800 transition flex justify-center py-2 border-t border-slate-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 mb-0 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                ></path>
                                            </svg>

                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{' '}
                                                or drag and drop
                                            </p>
                                            <input
                                                {...props}
                                                ref={ref}
                                                multiple
                                                onChange={handleChange}
                                                accept="image/jpeg, image/jpg, image/png"
                                                type="file"
                                                id="dropzone-file-images-present"
                                                className="relative z-20 hidden"
                                            />
                                            <div
                                                className="absolute inset-0"
                                                onDragEnter={handleDrag}
                                                onDragLeave={handleDrag}
                                                onDragOver={handleDrag}
                                                onDrop={handleDrop}
                                            />
                                        </label>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </label>
                {!noInput && (
                    <button
                        onClick={generateSongs}
                        className="mt-3 w-fit rounded-full px-3 py-2 bg-black text-blue-700 gradient-border"
                    >
                        Recommend Music
                    </button>
                )}
            </form>
        );
    }
);
FileInput.displayName = 'FileInput';

export { FileInput };
