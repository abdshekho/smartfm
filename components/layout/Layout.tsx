// Main
import React, { useState, useEffect } from "react";
import useLang from "../Public/Lang/lang.logic";
import AppLoading from "../Public/Loading/AppLoading";
import Footer from "./footer/Footer";
import HeadLayout from "./headLayout";
import Navbar from "./navbar/Navbar";

interface IProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    const { lang, direction } = useLang();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) return <AppLoading />;
    return (
        <div className="bg-gray-50">
            <HeadLayout />
            <div className="h-[100px] md:h-[60px]">
                <Navbar />
            </div>
            <div className="min-h-screen container m-auto">{children}</div>

            <Footer />
        </div>
    );
};

export default Layout;
