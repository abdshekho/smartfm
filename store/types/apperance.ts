import {
    APPERANCE_LANG_AR,
    APPERANCE_LANG_EN,
    TOGGLE_MODAL,
} from "../actionTypes";

type ApperanceLangAr = {
    type: typeof APPERANCE_LANG_AR;
};

type ApperanceLangEn = {
    type: typeof APPERANCE_LANG_EN;
};

type ToggleModal = {
    type: typeof TOGGLE_MODAL;
    name: string;
};

export type ApperanceActionTypes =
    | ToggleModal
    | ApperanceLangAr
    | ApperanceLangEn;

export interface ApperanceState {
    lang: "ar" | "en";
    modals: string[];
}
