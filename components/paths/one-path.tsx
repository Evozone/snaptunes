// AnimatedPath.tsx
import { motion } from 'framer-motion';
import './paths.css';

interface OnePathProps {
    pathData: string;
    strokeColor: string;
    transition: any;
    vectorUrl: string;
}

const OnePath: React.FC<OnePathProps> = ({
    pathData,
    strokeColor,
    transition,
    vectorUrl,
}) => (
    <>
        <svg
            width="1440"
            height="890"
            viewBox="0 0 1440 890"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-72 md:-top-64 w-full"
        >
            <motion.path
                d={pathData}
                stroke={strokeColor}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    ...transition,
                    repeatType: strokeColor === '#B1C5FF' ? 'loop' : 'reverse',
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
        <div className="absolute -top-72 md:-top-64 -left-20 w-full">
            <motion.div
                className="box"
                initial={{ offsetDistance: '0%' }}
                animate={{ offsetDistance: '100%' }}
                style={{
                    offsetPath: `path('${pathData}')`,
                    backgroundImage: `url(${vectorUrl})`,
                }}
                transition={{ ...transition, repeatDelay: 4 }}
            />
        </div>
    </>
);

export default OnePath;
