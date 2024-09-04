'use client';
import React from 'react';
import Link from 'next/link';

import './landing-page/landing-page.css';

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
    const handleHoverEffect = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
        // color based on mouse position
        const randomR = (x / rect.width) * 255;
        const randomG = (y / rect.height) * 255;
        const randomB = ((x + y) / (rect.width + rect.height)) * 255;
        target.style.setProperty(
            '--random-color',
            `rgba(${randomR}, ${randomG}, ${randomB}, 0.25)`
        );
    };

    return (
        <div
            className="flex flex-row flex-wrap-reverse h-screen hover-parent"
            onMouseMove={handleHoverEffect}
        >
            <div className="w-full lg:w-1/2 h-1/2 lg:h-screen flex flex-col justify-center items-center">
                <p className={`${geologica.className} text-5xl md:text-7xl pb-4`}>
                    {title}
                </p>
                <p
                    className={`${jersey25.className} text-lg md:text-2xl text-neutral-400 my-4 max-w-lg `}
                >
                    {description}
                </p>
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
                                How we did it
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Icon/Logo */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-screen flex justify-center items-center">
                {/* Pill */}
                <div
                    className="w-64 h-64 rounded-full z-30"
                    style={{
                        backgroundImage: `url('./logo.png')`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default LandingPage;
