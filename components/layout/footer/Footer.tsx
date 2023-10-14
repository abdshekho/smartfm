// Main
import React, { HTMLAttributes } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/reducers";
import Image from "../../image/Image";
import useWindowDimensions from "../../../constants/useWindowDimensions";
import { FooterLinksData } from "./footer.data";
import useLang from "../../Public/Lang/lang.logic";
import Lang from "../../Public/Lang";

const linkClasses =
    "text-gray-200 mb-2 hover:text-secondary transition-all duration-200 font-sub";

const Footer = () => {
    const user = useSelector((state: RootReducer) => state.auth.user);
    const { width, isComputer } = useWindowDimensions();
    const { direction } = useLang();

    return (
        <div className="w-full h-auto bg-primary">
            <div className="container mx-auto px-6 md:px-16 py-12">
                <div className="w-full flex items-center md:justify-start justify-center mb-6">
                    <Image
                        src="/smartfamily.svg"
                        className="w-[66%] md:w-[40%] lg:w-[20%]"
                    />
                </div>

                <div
                    dir={direction}
                    className="w-full h-full gird-cols-1 gap-12 sm:grid-cols-2 grid xl:grid-cols-3"
                >
                    {FooterLinksData.map((i, index) => (
                        <div className="w-full" key={index}>
                            <h1 className="text-white font-medium text-lg">
                                <Lang data={i.title} />
                            </h1>
                            <hr className="w-full my-3 border-white" />

                            <ul>
                                {i.links.map((link, lIndex) => (
                                    <Link href={link.href || "#"} key={lIndex}>
                                        <a>
                                            <li className={linkClasses}>
                                                <Lang data={link.label} />
                                            </li>
                                        </a>
                                    </Link>
                                ))}

                                {i.title.en === "Pages" ? (
                                    <>
                                        {user ? (
                                            <Link href="/profile">
                                                <a>
                                                    <li className={linkClasses}>
                                                        <Lang
                                                            en="Profile"
                                                            ar="الملف الشخصي"
                                                        />
                                                    </li>
                                                </a>
                                            </Link>
                                        ) : (
                                            <>
                                                <Link href="/signin">
                                                    <a>
                                                        <li
                                                            className={
                                                                linkClasses
                                                            }
                                                        >
                                                            <Lang
                                                                en="Signin"
                                                                ar="تسجيل الدخول"
                                                            />
                                                        </li>
                                                    </a>
                                                </Link>

                                                <Link href="/signup">
                                                    <a>
                                                        <li
                                                            className={
                                                                linkClasses
                                                            }
                                                        >
                                                            <Lang
                                                                en="Signup"
                                                                ar="أنشاء حساب"
                                                            />
                                                        </li>
                                                    </a>
                                                </Link>
                                            </>
                                        )}
                                    </>
                                ) : null}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center py-4 border-t border-white font-sub px-4">
                <p className="text-gray-300">
                    Copyright © 2021{" "}
                    <span className="text-secondary font-sans">
                        Smartfamily,
                    </span>{" "}
                    powered by{" "}
                    <span className="text-secondary font-sans">
                        Crown pheonix marketing consultency.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
