// Main
import React from "react";
import useLang from "./lang.logic";

// Types
interface IProps {
    en?: any;
    ar?: any;
    reactNode?: boolean;
}

const Dir = ({ en, ar, reactNode }: IProps): any => {
    const getLang = localStorage.getItem("smartfamily-apperance");

    if (getLang) {
        const lang = JSON.parse(getLang).lang;

        if (lang === "ar") return reactNode ? ar() : ar;
        else if (lang === "en") return reactNode ? en() : en;
        return reactNode ? en() : en;
    } else return reactNode ? en() : en;
};

export default Dir;
