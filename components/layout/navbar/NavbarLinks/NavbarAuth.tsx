// Main
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
import Popover from "../../../Headless/Popover";
import MultiClass from "../../../Public/Classes/MultiClass";
import Image from "../../../image";
import useLang from "../../../Public/Lang/lang.logic";
import Lang from "../../../Public/Lang";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginIcon } from "@heroicons/react/outline";
import {
    faShoppingCart,
    faUserCircle,
    faUserPlus,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";

// Types
interface IProps {
    user?: boolean;
    cartCount?: number;
}

const NavbarAuth = ({ user, cartCount }: IProps) => {
    const { lang, direction, handleLangChange } = useLang();
    const authListClasses = MultiClass([
        "flex items-center color-white p-2 cursor-pointer uppercase gap-2 relative",
    ]);

    return (
        <Popover
            buttonClass="w-6 h-6 py-0 rounded-full transition-all duration-300"
            panelClass="w-[150px] lg:w-[180px] lg:-translate-x-3/4 lg:pr-0 pr-2   pt-2"
            Render={() => (
                <div dir={direction} className="bg-white">
                    <ul className="py-2">
                        {user ? (
                            <Link href="/profile">
                                <a>
                                    <motion.li
                                        whileHover={{
                                            color: "rgb(59,169,224)",
                                        }}
                                        className={authListClasses}
                                    >
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <span>
                                            <Lang
                                                en="Profile"
                                                ar="الملف الشخصي"
                                            />
                                        </span>
                                    </motion.li>
                                </a>
                            </Link>
                        ) : null}
                        <Link href="/cart">
                            <a>
                                <motion.li
                                    whileHover={{
                                        color: "rgb(59,169,224)",
                                    }}
                                    className={authListClasses}
                                >
                                    <div className="relative">
                                        {cartCount > 0 ? (
                                            <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-white text-[12px]">
                                                {cartCount > 9
                                                    ? "9+"
                                                    : cartCount}
                                            </span>
                                        ) : null}
                                        <FontAwesomeIcon
                                            icon={faShoppingCart}
                                        />
                                    </div>
                                    <span>
                                        <Lang en="Cart" ar="العربة" />
                                    </span>
                                </motion.li>
                            </a>
                        </Link>

                        {!user && (
                            <>
                                <Link href="/signin">
                                    <a>
                                        <motion.li
                                            whileHover={{
                                                color: "rgb(59,169,224)",
                                            }}
                                            className={authListClasses}
                                        >
                                            <LoginIcon className="w-5 h-5" />
                                            <span>
                                                <Lang
                                                    en="Signin"
                                                    ar="تسجيل الدخول"
                                                />
                                            </span>
                                        </motion.li>
                                    </a>
                                </Link>
                                <Link href="/signup">
                                    <a>
                                        <motion.li
                                            whileHover={{
                                                color: "rgb(59,169,224)",
                                            }}
                                            className={authListClasses}
                                        >
                                            <FontAwesomeIcon
                                                icon={faUserPlus}
                                            />
                                            <span>
                                                <Lang
                                                    en="Signup"
                                                    ar="انشاء حساب"
                                                />
                                            </span>
                                        </motion.li>
                                    </a>
                                </Link>
                            </>
                        )}

                        <motion.li
                            whileHover={{
                                color: "rgb(59,169,224)",
                            }}
                            onClick={handleLangChange}
                            className={authListClasses}
                        >
                            <Image
                                alt="lang-flag"
                                src={lang === "en" ? "/en.png" : "/ar.png"}
                                width="20px"
                                height="15px"
                            />
                            <span>
                                <Lang en="English" ar="العربية" />
                            </span>
                        </motion.li>
                    </ul>
                </div>
            )}
        >
            <FontAwesomeIcon
                style={{ width: "100%", height: "100%" }}
                className="text-secondary"
                icon={faUserCircle}
            />
        </Popover>
    );
};

export default NavbarAuth;
