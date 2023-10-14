import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { AUTH_SIGNIN } from "../auth.sql";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authSetUser } from "../../../store/actions/auth";
import { useForm } from "react-hook-form";

const validationSchema = yup.object({
    identifier: yup
        .string()
        .required("email or username is a required field")
        .min(3, "email or username must be at least 3 characters"),
    password: yup.string().required().min(5),
});

const useSigninForm = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            identifier: "",
            password: "",
        },
    });
    const [AuthSignin, { data, error }] = useMutation(AUTH_SIGNIN);

    const handleAuth = async (data: any) => {
        try {
            await AuthSignin({
                variables: {
                    identifier: data.identifier,
                    password: data.password,
                },
            });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (data) {
            const {
                signin: { user, token },
            } = data;

            dispatch(authSetUser(user, token));
        }
    }, [data]);

    return {
        AuthSignin,
        error: error?.message,
        errors,
        register,
        handleAuth,
        handleSubmit,
    };
};

export default useSigninForm;
