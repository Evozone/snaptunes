'use client';

import {
    forwardRef,
    useReducer,
    useState,
    type ChangeEvent,
    type DragEvent,
} from 'react';
import { cn, validateFileType } from '@/utils/cn';

interface FileWithUrl {
    extension: string;
    base64: string;
    size: number;
}

// Reducer action(s)
const addFilesToInput = () => ({
    type: 'ADD_FILES_TO_INPUT' as const,
    payload: [] as FileWithUrl[],
});

type Action = ReturnType<typeof addFilesToInput>;
type State = FileWithUrl[];

const MAX_FILE_SIZE = 5000000;

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const FileInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const [dragActive, setDragActive] = useState<boolean>(false);
        const [input, dispatch] = useReducer((state: State, action: Action) => {
            switch (action.type) {
                case 'ADD_FILES_TO_INPUT': {
                    // do not allow more than 5 files to be uploaded at once
                    if (state.length + action.payload.length > 5) {
                        alert('You can only upload up to 5 images at once');
                        return state;
                    }

                    return [...state, ...action.payload];
                }
            }
        }, []);

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

        // triggers when file is selected with click
        const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            try {
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

                    const fileData = (await Promise.all(filePromises)) as FileWithUrl[];
                    addFilesToState(fileData);
                    console.log(fileData);
                }
            } catch (error) {
                alert('An error occurred');
            }
        };

        const addFilesToState = (files: FileWithUrl[]) => {
            dispatch({ type: 'ADD_FILES_TO_INPUT', payload: files });
        };

        // triggers when file is dropped
        const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();

            // validate file type
        };

        return (
            <form
                onSubmit={(e) => e.preventDefault()}
                onDragEnter={handleDrag}
                className="flex h-full items-center w-full justify-start"
            >
                <label
                    htmlFor="dropzone-file"
                    className={cn(
                        'group relative h-full flex flex-col items-center justify-center w-full aspect-video border-2 border-slate-300 border-dashed rounded-lg dark:border-slate-300 transition',
                        { 'dark:border-slate-400 dark:bg-slate-800': dragActive },
                        { 'h-fit aspect-auto': !noInput },
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
                                    up to 5 images 4MB per file
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
                            <div className="flex flex-col w-full h-full">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden sm:rounded-lg">
                                            {/* preview img */}

                                            <label
                                                htmlFor="dropzone-file-images-present"
                                                className="relative cursor-pointer group hover:border-gray-500 hover:dark:bg-slate-800 transition flex justify-center py-4 border-t border-slate-600"
                                            >
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </label>
            </form>
        );
    }
);
FileInput.displayName = 'FileInput';

export { FileInput };
