// Main
import React from "react";
import { useSelector } from "react-redux";
import { ILang } from "./lang.types";
import { RootReducer } from "../../../store/reducers";

interface IProps {
    en?: string;
    ar?: string;
    data?: ILang;
}

const Lang = ({ en, ar, data }: IProps): any => {
    const getLang = localStorage.getItem("smartfamily-apperance");
    const lang = JSON.parse(getLang).lang;

    const getText = (val?: ILang) => {
        switch (lang) {
            case "ar":
                return val?.ar || ar;
            case "en":
                return val?.en || en;
        }
    };

    if (!getLang) return data.en || en;
    else if (data) {
        if (!data.ar) return data.en;
        else return getText(data);
    } else if (!ar) return en;
    return getText();
};

export default Lang;
