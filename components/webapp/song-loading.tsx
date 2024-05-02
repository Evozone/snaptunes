import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Geologica } from 'next/font/google';

const geologica = Geologica({ weight: '400', subsets: ['latin'] });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

type Props = {};

const notes = [
    '/quaver-note.svg',
    '/beam-note.svg',
    '/eighth-note.svg',
    '/beam-quaver-note.svg',
];

const recommendSongsMessages = [
    'Analyzing the colors...',
    'Syncing with the musical spectrum...',
    'Tuning into the vibes...',
    'Mixing melodies with pixels...',
    'Harmonizing with the hues...',
    'Capturing the mood in notes...',
    'Composing a symphony of images...',
    'Aligning rhythms with visuals...',
    'Mapping the music to the image...',
    'Crafting a playlist masterpiece...',
    'Echoing the image in soundwaves...',
];

export default function SongLoading({}: Props) {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((messageIndex) =>
                messageIndex === recommendSongsMessages.length - 1 ? 0 : messageIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <motion.ul
                className="w-40 h-20 grid grid-cols-4 gap-1 rounded-lg list-none	overflow-hidden"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {[0, 1, 2, 3].map((index) => (
                    <motion.li
                        key={index}
                        animate={{ opacity: [0, 1, 0] }}
                        variants={item}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 0.7,
                            repeatType: 'reverse',
                        }}
                    >
                        <img src={notes[index]} alt="loading" />
                    </motion.li>
                ))}
            </motion.ul>
            <p
                className={`${geologica.className} text-white text-lg mt-4 max-w-lg mx-auto`}
            >
                {recommendSongsMessages[messageIndex]}
            </p>
        </div>
    );
}
