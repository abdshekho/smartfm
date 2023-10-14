import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/reducers";

interface IProps {
    children?: React.ReactNode;
}

const IsAuth = ({ children }: IProps) => {
    const router = useRouter();
    const { user, loading: authLoading } = useSelector(
        (state: RootReducer) => state.auth
    );
    const [loading, setLoading] = useState(authLoading && !user);

    useEffect(() => {
        if (!authLoading && !user) {
            setLoading(true);
            router.push("/signin");
        } else if (!authLoading && user) setLoading(false);
    }, [user, authLoading]);

    return <>{children}</>;
};

export default IsAuth;
