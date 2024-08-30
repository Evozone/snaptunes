'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const AnimatedPaths = dynamic(() => import('./landing-page/animated-paths'), {
    ssr: false,
});

import { Geologica, Jersey_25 } from 'next/font/google';

const geologica = Geologica({ subsets: ['latin'] });
const jersey25 = Jersey_25({ weight: '400', subsets: ['latin'] });

const LandingPage = ({
    title,
    description,
}: {
    title?: string;
    description?: string;
}) => {
    return (
        <div className="w-screen">
            <div className="flex flex-col pt-160 pb-10 items-center">
                {/* Title */}
                <p
                    className={`${geologica.className} text-5xl md:text-7xl pb-4 text-center`}
                >
                    {title}
                </p>
                {/* Tagline */}
                <p
                    className={`${jersey25.className} text-lg md:text-2xl font-normal text-center text-neutral-400 my-4 max-w-lg mx-auto`}
                >
                    {description}
                </p>
                {/* Icon/Logo */}
                <div className="mb-10 md:mb-20">
                    {/* Pill */}
                    <div
                        className="w-40 h-40 rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-28 mt-9 z-30"
                        style={{
                            backgroundImage: `url('./logo.png')`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                        }}
                    ></div>
                </div>
                {/* Two buttons */}
                <div>
                    <div className="z-50 relative flex">
                        <Link href="/webapp">
                            <button className="rounded-full px-3 py-2 bg-black text-blue-700 gradient-border">
                                Get Started Now!
                            </button>
                        </Link>
                        <Link href="/how-it-works">
                            <button className="rounded-full px-3 py-2 ml-4 bg-white text-black hover:bg-blue-600 hover:text-white">
                                How it Works
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <AnimatedPaths /> */}
            {/* Footer */}
            <div className="w-full flex justify-center z-50 items-center absolute bottom-0">
                <p className="text-xs text-neutral-400">
                    Inspired by{' '}
                    <a
                        href="https://deepmind.google/technologies/gemini/#build-with-gemini"
                        className="text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &apos;Build With Gemini&apos;
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
