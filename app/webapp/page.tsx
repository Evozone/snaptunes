import AppBackground from '@/components/AppBackground';
import Link from 'next/link';
import React from 'react';

import { FileInput } from '@/components/FileInput';

const WebApp = () => {
    return (
        <AppBackground>
            <div className="absolute z-50 inset-0 flex items-center justify-center p-4">
                <div className="bg-white/20 backdrop-blur-lg backdrop-filter rounded-lg p-4 border-white w-full h-full">
                    <div className="absolute top-4 right-4">
                        <Link href="/">
                            <button className="rounded-full px-3 py-2 ml-4 bg-white text-black hover:bg-blue-600 hover:text-white">
                                Go Back
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/2 h-full">
                        {/* <div className="text-4xl">Drop images here</div>
                        <div className="text-xl">or click to select</div> */}
                        <FileInput />
                    </div>
                </div>
            </div>
        </AppBackground>
    );
};

export default WebApp;
