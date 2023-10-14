import { ApperanceActionTypes } from "../types/apperance";

export const apperanceLangEnglish = (): ApperanceActionTypes => ({
    type: "APPERANCE_LANG_EN",
});

export const apperanceLangArabic = (): ApperanceActionTypes => ({
    type: "APPERANCE_LANG_AR",
});

export const toggleModal = (name: string): ApperanceActionTypes => ({
    type: "TOGGLE_MODAL",
    name,
});
