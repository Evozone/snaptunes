import React from 'react';

import {
    PATH_IN_0,
    PATH_IN_1,
    PATH_IN_2,
    PATH_IN_3,
    PATH_IN_4,
    PATH_OUT_0,
    PATH_OUT_1,
    PATH_OUT_2,
    PATH_OUT_3,
    PATH_OUT_4,
} from './paths/paths';
import OnePath from './paths/one-path';

const transitionIn = {
    ease: 'linear',
    repeat: Infinity,
    duration: 4,
    repeatDelay: 4,
};

const transitionOut = {
    repeat: Infinity,
    ease: 'linear',
    duration: 8,
};

type PathType = {
    pathData: string;
    strokeColor: string;
    transition: any;
    vectorUrl: string;
    type: number;
};

const createPath = (pathData: string, strokeColor: string, type: number): PathType => {
    const transition = type === 0 ? transitionIn : transitionOut;
    const vectorUrl = type === 0 ? './image.svg' : './music.svg';

    return {
        pathData,
        strokeColor,
        transition,
        vectorUrl,
        type,
    };
};

const paths = [
    createPath(PATH_IN_0, '#076EFF', 0),
    createPath(PATH_IN_1, '#4FABFF', 0),
    createPath(PATH_IN_2, '#B1C5FF', 0),
    createPath(PATH_IN_3, '#FFDDB7', 0),
    createPath(PATH_IN_4, '#FFB7C5', 0),
    createPath(PATH_OUT_0, '#076EFF', 1),
    createPath(PATH_OUT_1, '#4FABFF', 1),
    createPath(PATH_OUT_2, '#B1C5FF', 1),
    createPath(PATH_OUT_3, '#FFDDB7', 1),
    createPath(PATH_OUT_4, '#FFB7C5', 1),
];

export default function AnimatedPaths() {
    return (
        <div className="w-full h-[890px] flex justify-center">
            <div className="relative w-[1440px]">
                {paths.map((path, index) => (
                    <OnePath key={index} {...path} />
                ))}
            </div>
        </div>
    );
}
