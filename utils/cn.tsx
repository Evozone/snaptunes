import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function validateFileType(file: File) {
    const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
    return ALLOWED_FILE_TYPES.includes(file.type);
}
