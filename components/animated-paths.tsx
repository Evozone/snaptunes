import React from 'react';

import { PATH0, PATH1, PATH2, PATH3, PATH4, PATH5 } from './paths/paths';
import OnePath from './paths/one-path';

const transitionIn = {
    ease: 'linear',
    repeat: Infinity,
    duration: 4,
    repeatDelay: 4,
};

const transitionOut = {
    delay: 4,
    repeat: Infinity,
    ease: 'linear',
    duration: 4,
};

const paths = [
    {
        pathData: PATH0,
        strokeColor: '#076EFF',
        transition: transitionOut,
        vectorUrl: './music.svg',
    },
    {
        pathData: PATH1,
        strokeColor: '#4FABFF',
        transition: transitionOut,
        vectorUrl: './music.svg',
    },
    {
        pathData: PATH2,
        strokeColor: '#B1C5FF',
        transition: transitionIn,
        vectorUrl: './image.svg',
    },
    {
        pathData: PATH3,
        strokeColor: '#FFDDB7',
        transition: transitionOut,
        vectorUrl: './music.svg',
    },
    {
        pathData: PATH4,
        strokeColor: '#FFB7C5',
        transition: transitionOut,
        vectorUrl: './music.svg',
    },
    {
        pathData: PATH5,
        strokeColor: '#78f275',
        transition: transitionOut,
        vectorUrl: './music.svg',
    },
];

export default function AnimatedPaths() {
    return (
        <>
            {paths.map((path, index) => (
                <OnePath key={index} {...path} />
            ))}
        </>
    );
}
