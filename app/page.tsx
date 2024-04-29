'use client';
import React from 'react';
import LandingPage from '@/components/landing-page';

export default function Home() {
    const ref = React.useRef(null);

    return (
        <div
            className="h-screen bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-24 overflow-clip"
            ref={ref}
        >
            <LandingPage title="SnapTunes" description="Transform pixels into music." />
        </div>
    );
}
