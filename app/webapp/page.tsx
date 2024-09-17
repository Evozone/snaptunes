'use client';

import AppBackground from '@/components/webapp/AppBackground';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import SongResults from '@/components/webapp/song-results';
import { FileInput } from '@/components/webapp/FileInput';
import NoSongs from '@/components/webapp/no-songs';

interface FileWithUrl {
    extension: string;
    base64: string;
    size: number;
}

interface ImageParts {
    inlineData: { data: string; mimeType: string };
}

const WebApp = () => {
    const [input, setInput] = useState<FileWithUrl[]>([]);
    const [imageParts, setImageParts] = useState<ImageParts[]>([]);
    const [accessToken, setAccessToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [rightActive, setRightActive] = useState<boolean>(false);
    const [bollywoodSongsId, setBollywoodSongsId] = useState<string[]>([]);
    const [hollywoodSongsId, setHollywoodSongsId] = useState<string[]>([]);

    const generateSpotifyToken = async () => {
        const authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
        };
        try {
            fetch('https://accounts.spotify.com/api/token', authParameters)
                .then((result) => result.json())
                .then((data) => setAccessToken(data.access_token));
        } catch (error) {
            console.error(error);
            alert(
                'Error generating Spotify token, please refresh the page and try again.'
            );
        }
    };

    useEffect(() => {
        generateSpotifyToken();
        const interval = setInterval(() => {
            generateSpotifyToken();
        }, 1800000);
        return () => clearInterval(interval);
    }, []);

    const generateSongs = async () => {
        try {
            setLoading(true);
            setRightActive(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/recommend-songs`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ imageParts }),
                }
            );
            if (response.status !== 200) {
                throw new Error('Error generating songs');
            }
            // the response is in text format
            const data = await response.text();
            const jsonData = JSON.parse(data);

            const bollywoodSongs = jsonData.Bollywood;
            // get song id for first 2 bollywoodSongs
            const bIdPromises = bollywoodSongs.map(async (song: string) => {
                return await getSongSpotifyId(song);
            });
            const bIds = await Promise.all(bIdPromises);
            setBollywoodSongsId(bIds);

            const hollywoodSongs = jsonData.Hollywood;
            const hIdPromises = hollywoodSongs.map(async (song: string) => {
                return await getSongSpotifyId(song);
            });
            const hIds = await Promise.all(hIdPromises);
            setHollywoodSongsId(hIds);
            setLoading(false);
        } catch (error) {
            console.error(error);
            alert('Error generating songs, please refresh the page and try again.');
        }
    };

    const getSongSpotifyId = async (songName: string) => {
        try {
            const response = await fetch(
                `https://api.spotify.com/v1/search?q=${songName}&type=track&market=IN&limit=10&offset=5`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            if (response.status !== 200) {
                throw new Error('Error getting song id');
            }
            const data = await response.json();
            return data.tracks.items[0].id;
        } catch (error) {
            console.error(error);
            alert('Error generating songs, please refresh the page and try again.');
        }
    };

    return (
        <AppBackground>
            <div className="absolute z-50 inset-0 flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-lg backdrop-filter p-4 border-white w-full h-full flex flex-wrap overflow-y-auto">
                    <div className="absolute top-2 left-0">
                        <Link href="/">
                            <button className="rounded-full px-2 py-1 ml-4 bg-white text-black hover:bg-blue-600 hover:text-white">
                                ⇽ Go Back
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:h-full h-1/2 p-2">
                        <FileInput
                            input={input}
                            setInput={setInput}
                            generateSongs={generateSongs}
                            imageParts={imageParts}
                            setImageParts={setImageParts}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:h-full h-1/2">
                        <div className="h-5/6 items-center w-full ml-4 lg:p-4 p-2 rounded-lg grid place-items-center overflow-y-auto">
                            {rightActive ? (
                                <SongResults
                                    {...{ loading, bollywoodSongsId, hollywoodSongsId }}
                                />
                            ) : (
                                <NoSongs />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppBackground>
    );
};

export default WebApp;
