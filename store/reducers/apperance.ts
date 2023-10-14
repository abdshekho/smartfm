import {
    APPERANCE_LANG_EN,
    APPERANCE_LANG_AR,
    TOGGLE_MODAL,
} from "../actionTypes";
import { ApperanceActionTypes, ApperanceState } from "../types/apperance";

const INITIAL_STATE: ApperanceState = {
    lang: "en",
    modals: [],
};

const setApperanceProperty = (
    state: ApperanceState,
    key: string,
    value: any
) => {
    let apperance: ApperanceState | string | null = localStorage.getItem(
        "smartfamily-apperance"
    );

    if (apperance) {
        apperance = JSON.parse(apperance);

        localStorage.setItem(
            "smartfamily-apperance",
            JSON.stringify({ ...state, [key]: value })
        );
    }
};

const apperance = (
    state = INITIAL_STATE,
    action: ApperanceActionTypes
): ApperanceState => {
    switch (action.type) {
        case TOGGLE_MODAL:
            let newState: ApperanceState = { ...state };

            if (!newState.modals.includes(action.name)) {
                newState.modals.push(action.name);
            } else {
                const filter = newState.modals.filter((i) => i !== action.name);

                newState.modals = filter;
            }

            return { ...newState };
        case APPERANCE_LANG_EN:
            setApperanceProperty(state, "lang", "en");

            return { ...state, lang: "en" };
        case APPERANCE_LANG_AR:
            setApperanceProperty(state, "lang", "ar");

            return { ...state, lang: "ar" };
        default:
            if (typeof window !== "undefined") {
                let apperance: ApperanceState | string | null =
                    localStorage.getItem("smartfamily-apperance");

                if (apperance) {
                    apperance = JSON.parse(apperance);

                    if (typeof apperance !== "string") {
                        return {
                            ...state,
                            lang: apperance.lang,
                        };
                    }
                } else {
                    localStorage.setItem(
                        "smartfamily-apperance",
                        JSON.stringify({ ...state })
                    );
                }
            }

            return state;
    }
};

export default apperance;
