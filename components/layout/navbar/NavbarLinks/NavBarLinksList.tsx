// Main
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
import Lang from "../../../Public/Lang";
import useLang from "../../../Public/Lang/lang.logic";
import { NavBarLinks } from "./navbar.data";
import NavbarAuth from "./NavbarAuth";

// Types
interface IProps {
    handleLink: any;
    user?: any;
}

const NavbarLinksList = ({ handleLink, user }) => {
    const { direction } = useLang();

    return (
        <div className="flex justify-center gap-3">
            <ul dir={direction} className="flex items-center gap-4 h-full">
                {NavBarLinks.map((i, index) => (
                    <Link href={handleLink(i.href)}>
                        <a key={index}>
                            <motion.li
                                whileHover={{
                                    scale: 1.1,
                                    color: "#EC6725",
                                }}
                                className="text-[16px] cursor-pointer"
                            >
                                <Lang data={i.label} />
                            </motion.li>
                        </a>
                    </Link>
                ))}
            </ul>

            <div className="hidden md:block">
                <Link href="https://www.smartfamily.ae/">
                    <a>
                        <button className="px-3 py-1 bg-primary text-white uppercase text-sm rounded-full">
                            main site
                        </button>
                    </a>
                </Link>
            </div>

            <NavbarAuth />
        </div>
    );
};

export default NavbarLinksList;
