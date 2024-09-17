import React from 'react';
import Link from 'next/link';

import { Geologica, Jersey_25 } from 'next/font/google';

const geologica = Geologica({ subsets: ['latin'] });
const jersey25 = Jersey_25({ weight: '400', subsets: ['latin'] });

function LPActionArea({ title, description }: { title?: string; description?: string }) {
    return (
        <>
            <p className={`${geologica.className} text-5xl md:text-7xl pb-4`}>{title}</p>
            <p
                className={`${jersey25.className} text-lg md:text-2xl text-neutral-400 my-4 max-w-lg `}
            >
                {description}
            </p>
            {/* Two buttons */}
            <div>
                <div className="z-50 relative flex">
                    <Link href="/webapp">
                        <button className="rounded-full px-3 py-2 bg-black text-blue-700 gradient-border">
                            Get Started Now!
                        </button>
                    </Link>
                    <Link href="/how-it-works">
                        <button className="rounded-full px-3 py-2 ml-4 bg-white text-black hover:bg-blue-600 hover:text-white">
                            How we did it
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LPActionArea;
