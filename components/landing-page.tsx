'use client';
import { cn } from '@/utils/cn';
import React from 'react';
import Link from 'next/link';
import AnimatedPaths from './animated-paths';

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
        <div className={cn('sticky', className)}>
            {/* Title */}
            <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
                {title}
            </p>
            {/* Tagline */}
            <p className="text-xs md:text-xl font-normal text-center text-neutral-400 my-4 max-w-lg mx-auto">
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
            {/* Animated Paths */}
            <AnimatedPaths />
        </div>
    );
};

export default LandingPage;
