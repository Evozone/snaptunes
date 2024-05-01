'use client';
import React from 'react';
import { Geologica } from 'next/font/google';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { TracingBeam } from '../../components/tracing-beam';

const geologica = Geologica({ subsets: ['latin'] });

const HowItWorks = () => {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-10 relative">
                <h1 className={twMerge(geologica.className, 'text-7xl mb-4')}>
                    # How It Works
                </h1>
                <hr className="border-2 border-blue-500 mb-10" />
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className={twMerge(geologica.className, 'text-4xl mb-4')}>
                            ## {item.title}
                        </h2>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
};

export default HowItWorks;

const dummyContent = [
    {
        title: 'Gemini 1.0 Pro',
        description: (
            <>
                <h3>What is Gemini 1.0 Pro?</h3>
                <p>
                    Gemini 1.0 Pro is the LLM (Large Language Model) that is provided by
                    Google to help developers build better applications. It is a powerful
                    tool that can be used to generate text, images, and code.
                </p>
                <h3>How does it work?</h3>
                <p>
                    Gemini 1.0 Pro works by using a neural network to generate text based
                    on the input that it receives. The model is trained on a large dataset
                    of text, which allows it to generate text that is similar to the input
                    that it receives.
                </p>
                <h3>What can it be used for?</h3>
                <p>
                    Gemini 1.0 Pro can be used for a wide range of applications, including
                    generating text for chatbots, generating code for software
                    development, and generating images for graphic design. It is a
                    versatile tool that can be used in many different ways.
                </p>
            </>
        ),
    },
    {
        title: 'Connection with Spotify',
        description: (
            <>
                <p>
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                    Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                    incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                    fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                    nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                    occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                    officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                    commodo et labore dolore commodo pariatur.
                </p>
                <p>
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id reprehenderit adipisicing. Proident duis
                    exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
    },
    {
        title: 'The Landing Page Animations',
        description: (
            <>
                <p>
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                    Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                    incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                    fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                    nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                    occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                    officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                    commodo et labore dolore commodo pariatur.
                </p>
                <p>
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id reprehenderit adipisicing. Proident duis
                    exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                </p>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
    },
    {
        title: 'Other Animations',
        description: (
            <>
                <p>
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                    Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                    incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                    fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                    nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                    occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                    officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                    commodo et labore dolore commodo pariatur.
                </p>
                <p>
                    Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                    veniam in commodo id repreh
                </p>
            </>
        ),
    },
];
