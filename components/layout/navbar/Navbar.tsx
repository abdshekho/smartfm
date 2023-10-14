// Main
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Components
import Image from "../../image/Image";
import useNavbar from "./navbar.logic";
import useWindowDimensions from "../../../constants/useWindowDimensions";
import NavbarLinksList from "./NavbarLinks/NavBarLinksList";

interface IProps {}

const Navbar = ({}: IProps) => {
    const { user, handleLink } = useNavbar();
    const { isComputer } = useWindowDimensions();

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-col fixed top-0 left-0 right-0 z-50 shadow-xl h-[100px] md:h-[60px]"
            >
                <div className="flex border-b bg-white h-full px-3">
                    <div className="container mx-auto px-6 flex flex-col justify-center md:flex-row md:justify-between items-center">
                        <div className="mb-1 md:mb-0">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/color-logo.png"
                                        width={isComputer ? 140 : 100}
                                        height={50}
                                    />
                                </a>
                            </Link>
                        </div>

                        <NavbarLinksList handleLink={handleLink} user={user} />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
