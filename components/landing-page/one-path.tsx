'use client';

// AnimatedPath.tsx
import { motion } from 'framer-motion';
import './paths.css';

interface OnePathProps {
    pathData: string;
    strokeColor: string;
    transition: any;
    vectorUrl: string;
    type: number;
}

const viewportWidth = document.documentElement.clientWidth;

const OnePath: React.FC<OnePathProps> = ({
    pathData,
    strokeColor,
    transition,
    vectorUrl,
    type,
}) => (
    <div className="absolute -top-64 md:-top-64 w-full">
        <svg
            width={viewportWidth}
            height="890"
            viewBox={`0 0 ${viewportWidth} 890`}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 z-0"
        >
            <motion.path
                d={pathData}
                stroke={strokeColor}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: type === 1 ? [0, 0, 1] : [0, 1] }}
                transition={{
                    ...transition,
                    times: type === 1 ? [0, 0.5, 1] : [0, 1],
                }}
            />
            <path
                d={pathData}
                stroke={strokeColor}
                strokeWidth="2"
                fill="none"
                pathLength={1}
                filter="url(#blurMe)"
            />
            <defs>
                <filter id="blurMe">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>
        </svg>
        <motion.div
            className="box absolute top-0 left-0 z-10"
            initial={{ offsetDistance: '0%', opacity: 0, scale: 0.5 }}
            animate={{
                offsetDistance: type === 1 ? ['0%', '0%', '100%'] : ['0%', '100%'],
                opacity: 1,
                scale: 1.5,
            }}
            style={{
                offsetPath: `path('${pathData}')`,
                backgroundImage: `url(${vectorUrl})`,
            }}
            transition={{ ...transition, times: type === 1 ? [0, 0.5, 1] : [0, 1] }}
        />
    </div>
);

export default OnePath;
