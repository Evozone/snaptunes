import React from 'react';
import { Shantell_Sans } from 'next/font/google';

const shantellSans = Shantell_Sans({ weight: '400', subsets: ['latin'] });

type Props = {};

export default function NoSongs({}: Props) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <img src="/no_picture.svg" alt="No songs found" className="w-1/2 h-1/2" />
            <p
                className={`${shantellSans.className} text-lg md:text-2xl text-center mt-4 max-w-lg mx-auto`}
            >
                Upload an image to generate songs that vibe!
            </p>
        </div>
    );
}
