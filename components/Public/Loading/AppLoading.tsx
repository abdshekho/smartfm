// Main
import React from "react";
import { motion } from "framer-motion";
import Image from "../../image";

const AppLoading = () => {
    const variants = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 3.5,
        },
    };

    return (
        <div className="overflow-hidden w-screen h-screen relative flex items-center justify-center">
            <motion.div
                className="w-[50vh] h-[25vh] absolute z-[100]"
                variants={variants}
                initial="initial"
                animate={{ scale: 1 }}
            >
                <Image
                    src="/color-logo.png"
                    width="100%"
                    height="100%"
                    alt=""
                />
            </motion.div>
        </div>
    );
};

export default AppLoading;
