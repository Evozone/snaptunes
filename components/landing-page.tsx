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
    className,
}: {
    title?: string;
    description?: string;
    className?: string;
}) => {
    return (
        <div className={className}>
            <div className="absolute w-screen" style={{ zIndex: 50 }}>
                {/* Title */}
                <p
                    className={`${geologica.className} text-lg md:text-7xl pb-4 text-center`}
                >
                    {title}
                </p>
                {/* Tagline */}
                <p
                    className={`${jersey25.className} text-xs md:text-2xl font-normal text-center text-neutral-400 my-4 max-w-lg mx-auto`}
                >
                    {description}
                </p>
                {/* Icon/Logo */}
                <div className="w-full h-[890px] -top-72 md:-top-64 flex items-center justify-center bg-red-transparent absolute">
                    {/* Pill */}
                    <div
                        className="w-40 h-40 rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-28 mt-9 z-30 bg-blue-200"
                        style={{
                            backgroundImage: `url('./logo.png')`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                        }}
                    ></div>
                </div>
                {/* Two buttons */}
                <div className="w-full flex justify-center md:mt-52 mt-24 z-50 items-center absolute">
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

            <AnimatedPaths />

            {/* Footer */}
            <div className="w-full flex justify-center z-50 items-center absolute bottom-0">
                <p className="text-xs text-neutral-400">
                    Inspired by{' '}
                    <a
                        href="https://deepmind.google/technologies/gemini/#build-with-gemini"
                        className="text-blue-700"
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
