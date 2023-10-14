// Main
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/reducers";

const useNavbar = () => {
    const routert = useRouter();
    const { user, loading: authLoading } = useSelector(
        (state: RootReducer) => state.auth
    );

    const handleLink = (href: string, action?: any) => {
        return href;
    };

    return {
        user,
        handleLink,
    };
};

export default useNavbar;
