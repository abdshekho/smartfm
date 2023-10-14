import {
    AUTH_REMOVE_LOADING,
    AUTH_REMOVE_USER,
    AUTH_SET_LOADING,
    AUTH_SET_USER,
} from "../actionTypes";
import { AuthState, AuthActionTypes, SubmitedFormsType } from "../types/auth";
import Cookies from "js-cookie";

export const submitedFormCookiePreFix = "submited_form_id:";

const INITIAL_STATE: AuthState = {
    user: null,
    loading: true,
};

const auth = (state = INITIAL_STATE, action: AuthActionTypes) => {
    switch (action.type) {
        case AUTH_SET_USER:
            if (action.token) Cookies.set("auth_token", action.token);

            return { ...state, user: action.user, loading: false };
        case AUTH_REMOVE_USER:
            Cookies.remove("auth_token");

            return { ...state, user: null };
        case AUTH_SET_LOADING:
            return { ...state, loading: true };
        case AUTH_REMOVE_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default auth;
