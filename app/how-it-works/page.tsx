'use client';
import React from 'react';
import Link from 'next/link';
import { Geologica } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { TracingBeam } from '@/components/how-it-works/tracing-beam';

const geologica = Geologica({
    subsets: ['latin'],
    display: 'swap',
    adjustFontFallback: false,
});

const HowItWorks = () => {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-10 relative">
                <Link href="/">
                    <button className="rounded-full px-2 py-1 border-2 border-blue-500 hover:bg-blue-500 hover:text-white mb-6">
                        ⇽ Go Back
                    </button>
                </Link>
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

const CustomH3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className={twMerge(geologica.className, 'text-2xl my-2 text-blue-200')}>
        ### {children}
    </h3>
);

const CustomA = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline"
    >
        {children}
    </a>
);

const dummyContent = [
    {
        title: 'Gemini 1.0 Pro',
        description: (
            <>
                <CustomH3>What is Gemini 1.0 Pro?</CustomH3>
                <p>
                    Gemini 1.0 Pro is the LLM (Large Language Model) that is provided by
                    Google to help developers build better applications. It is a powerful
                    tool that can be used to generate text, images, and code.
                </p>
                <CustomH3>How does it work?</CustomH3>
                <p>
                    Gemini 1.0 Pro works by using a neural network to generate text based
                    on the input that it receives. The model is trained on a large dataset
                    of text, which allows it to generate text that is similar to the input
                    that it receives.
                </p>
                <CustomH3>What can it be used for?</CustomH3>
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
        title: 'Using the Gemini 1.0 Pro API',
        description: (
            <>
                <CustomH3>What is the Gemini 1.0 Pro API?</CustomH3>
                <p>
                    The Gemini 1.0 Pro API is a robust interface that allows developers to
                    interact with Google&apos;s advanced LLM. It supports a variety of
                    operations, including text generation, image analysis, and code
                    synthesis. The API accepts JSON-formatted requests and returns
                    responses in the same format, facilitating seamless integration into
                    web and mobile applications.
                </p>
                <p>
                    You can read more about the Gemini 1.0 Pro API in the
                    <CustomA href="https://ai.google.dev/gemini-api/docs/models/gemini">
                        {' '}
                        official documentation
                    </CustomA>
                    .
                </p>
                <CustomH3>How to use the Gemini 1.0 Pro API</CustomH3>
                <p>
                    To prompt the LLM, we construct a JSON payload that includes the
                    necessary parameters and data. For SnapTunes, we use a custom system
                    message that specifies the input as an image, and the output as a JSON
                    string. This message is encoded and sent to the API, which then
                    processes the image using its neural network to understand the content
                    and context, ultimately suggesting songs that align with the
                    image&apos;s vibe.
                </p>
                <CustomH3>Interpreting the Gemini 1.0 Pro response</CustomH3>
                <p>
                    Once the LLM processes the input, it generates a response that
                    includes potential song suggestions as a JSON string. Our system
                    parses this output, then we can use the names of the songs to query
                    the Spotify API for more information.
                </p>
            </>
        ),
    },
    {
        title: 'The Animations',
        description: (
            <>
                <CustomH3>Aceternity UI</CustomH3>
                <p>
                    <CustomA href="https://ui.aceternity.com/">Aceternity UI</CustomA> is
                    a treasure trove of interactive React components, offering a wide
                    array of micro-interactions and animations for web design. Built with
                    Next.js, Framer Motion, and Tailwind CSS, it provides developers with
                    a plethora of animated components that are ready to copy and paste
                    into your projects.
                </p>
                <CustomH3>Framer Motion</CustomH3>
                <p>
                    <CustomA href="https://www.framer.com/motion/">Framer Motion</CustomA>{' '}
                    is a production-ready motion library for React that simplifies
                    creating complex animations. It offers a declarative syntax for
                    animation, making your codebase easier to read and maintain. With
                    Framer Motion, you can animate between different components smoothly
                    and handle complex events and gestures.
                </p>
                <CustomH3>SVGs and Icons</CustomH3>
                <p>
                    For SVGs, we utilize resources like SVGrepo, which provides over
                    500,000 open-licensed SVG vectors and icons for commercial use without
                    any royalties. Font Awesome is another source, offering a vast library
                    of icons and components that are easily customizable for web projects.
                    Additionally, unDraw.co offers open-source illustrations that can be
                    used freely in any project, providing beautiful SVG images that can be
                    customized to match your brand.
                </p>
            </>
        ),
    },
    {
        title: 'Spotify',
        description: (
            <>
                <CustomH3>What is the Spotify API?</CustomH3>
                <p>
                    The Spotify API provides developers with programmatic access to the
                    vast Spotify music catalog and user data. It allows for operations
                    such as searching the Spotify library, managing playlists, and playing
                    music. Our application utilizes this API to enhance the user
                    experience by connecting them with music that resonates with the
                    emotions and themes captured in their photographs.
                </p>
                <CustomH3>Searching for songs</CustomH3>
                <p>
                    Fuzzy searching is a technique that finds matches even when the search
                    terms are not exact, which is crucial for interpreting the varied
                    inputs from users. Our system implements fuzzy searching through the
                    Spotify API to retrieve song IDs that best match the mood and elements
                    of the user&apos;s image. This process requires a valid Spotify token,
                    which we regenerate every 1800000 milliseconds (30 minutes) to
                    maintain uninterrupted service.
                </p>
                <CustomH3>Embedding Spotify song iframes</CustomH3>
                <p>
                    Once we have the song IDs, we can embed Spotify&apos;s song iframes
                    into our application, allowing users to play previews of the suggested
                    songs directly on our platform. This feature enhances interactivity
                    and engagement, providing users with an immediate and seamless
                    audio-visual experience. The embedding of song iframes does not
                    require a token, making it a straightforward process.
                </p>
            </>
        ),
    },
];
