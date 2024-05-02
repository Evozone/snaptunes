import React from 'react';
import { motion } from 'framer-motion';
import { Spotify } from 'react-spotify-embed';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { x: 1000, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

type Props = {
    bollywoodSongsToShow: string[];
    hollywoodSongsToShow: string[];
};

export default function SpotifyFrames({
    bollywoodSongsToShow,
    hollywoodSongsToShow,
}: Props) {
    return (
        <>
            <motion.div
                className="w-full max-w-4xl mx-auto"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-xl font-bold text-center mb-4">Bollywood Songs</h1>
                {bollywoodSongsToShow.map((id) => (
                    <motion.div
                        variants={item}
                        transition={{ duration: 3, type: 'spring' }}
                        key={id}
                    >
                        <Spotify
                            wide
                            link={`https://open.spotify.com/track/${id}`}
                            className="mb-4 shadow-md"
                        />
                    </motion.div>
                ))}
                <h1 className="text-xl font-bold text-center mb-4">Hollywood Songs</h1>
                {hollywoodSongsToShow.map((id) => (
                    <motion.div
                        variants={item}
                        transition={{ duration: 3, type: 'spring' }}
                        key={id}
                    >
                        <Spotify
                            wide
                            link={`https://open.spotify.com/track/${id}`}
                            className="mb-4 shadow-md"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}
