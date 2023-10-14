// Main
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store/reducers";
import { GET_USER_INFO } from "../auth/auth.sql";
import { useEffect, useState } from "react";
import { ProfileSideBarProps } from "./ProfileSideBar";
import { authRemoveUser } from "../../store/actions/auth";

const useProfile = () => {
    const dispatch = useDispatch();
    const { user, loading: authLoading } = useSelector(
        (state: RootReducer) => state.auth
    );
    const [getUserInfoGql, { loading, data, error }] =
        useLazyQuery(GET_USER_INFO);

    // Profile Tabs
    const [selectedTab, setSelectedTab] = useState(0);
    const handleSelectTab = (num: number) => setSelectedTab(num);

    const getUserInfo = () => {
        getUserInfoGql({
            variables: {
                id: user.id,
            },
        });
    };

    const handleSignout = () => {
        dispatch(authRemoveUser());
    };

    useEffect(() => {
        if (user) getUserInfo();
    }, [user]);

    return {
        getUserInfo,
        user: data?.user || null,
        sideBarMethods: {
            handleSelectTab,
            selectedTab,
            user: data?.user || null,
            handleSignout,
        } as ProfileSideBarProps,
    };
};

export default useProfile;
