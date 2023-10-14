// Main
import React from "react";
import { motion } from "framer-motion";

// Types
interface IProps {
    styles?: any;
    bg?: string;
    ballSize?: number;
    spaceBettwen?: number;
}

const Loading = ({ styles, bg, ballSize = 14, spaceBettwen = 3 }: IProps) => {
    const variants = {
        initial: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const DotVariants = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "100%",
        },
    };

    const DotTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
    };

    const BallStyle = {
        width: ballSize,
        height: ballSize,
    };

    return (
        <div
            style={styles}
            className="w-full h-full flex items-center justify-center"
        >
            <motion.div
                className={`flex ` + `space-x-${spaceBettwen}`}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <motion.span
                    style={BallStyle}
                    className="bg-primary rounded-full shadow-2xl"
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <motion.span
                    style={BallStyle}
                    className="bg-primary rounded-full shadow-2xl"
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <motion.span
                    style={BallStyle}
                    className="bg-primary rounded-full shadow-2xl"
                    variants={DotVariants}
                    transition={DotTransition}
                />
            </motion.div>
        </div>
    );
};

export default Loading;
