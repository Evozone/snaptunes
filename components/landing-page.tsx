'use client';
import React from 'react';
import Image from 'next/image';

import './landing-page/landing-page.css';

import LPActionArea from './landing-page/LPActionArea';

const LandingPage = ({
    title,
    description,
}: {
    title?: string;
    description?: string;
}) => {
    return (
        <div className="flex flex-row flex-wrap-reverse h-screen w-screen">
            <div className="w-full lg:w-1/2 h-1/2 lg:h-screen flex flex-col justify-center items-center">
                <LPActionArea {...{ title, description }} />
            </div>

            {/* Icon/Logo */}
            <div className="w-full lg:w-1/2 h-1/2 lg:h-screen flex justify-center items-center">
                <div className="w-64 h-64 lg:w-96 lg:h-96 relative">
                    <div className="rainbow-text-animated w-full h-full" />
                    <Image
                        className="absolute"
                        src="/logo.svg"
                        alt="Logo"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
