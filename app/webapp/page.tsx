'use client';

import AppBackground from '@/components/AppBackground';
import Link from 'next/link';
import React, { useState } from 'react';

import { FileInput } from '@/components/FileInput';

interface FileWithUrl {
    extension: string;
    base64: string;
    size: number;
}

interface ImageParts {
    inlineData: { data: string; mimeType: string };
}

interface Song {
    Bollywood: [];
    Hollywood: [];
}

const WebApp = () => {
    const [input, setInput] = useState<FileWithUrl[]>([]);
    const [imageParts, setImageParts] = useState<ImageParts[]>([]);
    const [songs, setSongs] = useState<Song>({ Bollywood: [], Hollywood: [] });

    const generateSongs = async () => {
        try {
            // send input.base64 to backend and get response
            const response = await fetch('http://localhost:8080/api/recommend-songs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageParts }),
            });
            if (response.status !== 200) {
                throw new Error('Error generating songs');
            }
            // the response is in text format
            const data = await response.text();
            const jsonData = JSON.parse(data);
            console.log(typeof jsonData);
            console.log(jsonData);
            setSongs(jsonData);
        } catch (error) {
            console.error(error);
            alert('Error generating songs');
        }
    };

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
                        <FileInput
                            input={input}
                            setInput={setInput}
                            generateSongs={generateSongs}
                            imageParts={imageParts}
                            setImageParts={setImageParts}
                        />
                    </div>
                </div>
            </div>
        </AppBackground>
    );
};

export default WebApp;
