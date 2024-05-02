import React, { useState } from 'react';
import { Spotify } from 'react-spotify-embed';
import SongLoading from './song-loading';

type Props = {
    loading: boolean;
    bollywoodSongsId: string[];
    hollywoodSongsId: string[];
};

export default function SongResults({
    loading,
    bollywoodSongsId,
    hollywoodSongsId,
}: Props) {
    const [showAll, setShowAll] = useState(false);

    const bollywoodSongsToShow = showAll
        ? bollywoodSongsId
        : bollywoodSongsId.slice(0, 2);
    const hollywoodSongsToShow = showAll
        ? hollywoodSongsId
        : hollywoodSongsId.slice(0, 2);

    return (
        <>
            {loading ? (
                <SongLoading />
            ) : (
                <>
                    <div className="w-full max-w-4xl mx-auto mb-8">
                        <h1 className="text-xl font-bold text-center mb-4">
                            Bollywood Songs
                        </h1>
                        {bollywoodSongsToShow.map((id) => (
                            <Spotify
                                wide
                                link={`https://open.spotify.com/track/${id}`}
                                key={id}
                                className="mb-4 shadow-md"
                            />
                        ))}
                    </div>
                    <div className="w-full max-w-4xl mx-auto">
                        <h1 className="text-xl font-bold text-center mb-4">
                            Hollywood Songs
                        </h1>
                        {hollywoodSongsToShow.map((id) => (
                            <Spotify
                                wide
                                link={`https://open.spotify.com/track/${id}`}
                                key={id}
                                className="mb-4 shadow-md"
                            />
                        ))}
                    </div>
                    <div className="absolute bottom-2 right-2">
                        {!showAll && (
                            <button
                                onClick={() => setShowAll(true)}
                                className="rounded-full px-3 py-2 ml-4 bg-white text-black hover:bg-blue-600 hover:text-white"
                            >
                                Show All Songs
                            </button>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
