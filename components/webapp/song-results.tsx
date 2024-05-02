import React, { useState } from 'react';
import SongLoading from './song-loading';
import SpotifyFrames from './spotify-frames';

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
                    <SpotifyFrames {...{ bollywoodSongsToShow, hollywoodSongsToShow }} />
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
