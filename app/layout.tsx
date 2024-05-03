import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'SnapTunes | Convert Pictures to Music',
    description:
        'SnapTunes is a web app that allows users to upload an image and receive recommendations for songs from both Bollywood and Hollywood that match the energy and vibe of the image.',
    keywords: [
        'SnapTunes',
        'Image to Music',
        'Music Recommendations',
        'Bollywood',
        'Hollywood',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
