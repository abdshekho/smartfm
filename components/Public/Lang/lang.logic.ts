// Main
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
    apperanceLangArabic,
    apperanceLangEnglish,
} from "../../../store/actions/apperance";
import { RootReducer } from "../../../store/reducers";

const useLang = () => {
    const dispatch = useDispatch();
    const { lang } = useSelector((state: RootReducer) => state.apperance);

    // Lang Handler
    const handleLangChange = () => {
        switch (lang) {
            case "en":
                return dispatch(apperanceLangArabic());
            case "ar":
                return dispatch(apperanceLangEnglish());
        }
    };

    return {
        lang,
        direction: lang === "ar" ? "rtl" : "ltr",
        position: lang === "ar" ? "left" : "right",
        handleLangChange,
    };
};

export default useLang;
