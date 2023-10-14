import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { AUTH_SIGNIN, AUTH_SIGNUP } from "../auth.sql";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authSetUser } from "../../../store/actions/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const validationSchema = yup.object({
    username: yup
        .string()
        .required("username is a required field")
        .min(3, "username must be at least 3 characters"),
    firstName: yup
        .string()
        .required("first name is a required field")
        .min(3, "first name must be at least 3 characters"),
    lastName: yup
        .string()
        .required("lastname is a required field")
        .min(3, "lastname must be at least 3 characters"),
    email: yup
        .string()
        .required("email is a required field")
        .matches(
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            "Invalid Email address"
        ),
    phone: yup
        .string()
        .required("phone is a required field")
        .matches(
            /^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/m,
            "Invalid Phone number"
        ),
    password: yup
        .string()
        .required()
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
});

const useSignupForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
        },
    });
    const [AuthSignup, { data, error }] = useMutation(AUTH_SIGNUP);

    const handleAuth = async (data: any) => {
        try {
            await AuthSignup({
                variables: {
                    data,
                },
            });

            router.push("/signin");
        } catch (e) {
            console.log(e);
        }
    };

    return {
        error: error?.message,
        errors,
        register,
        handleAuth,
        handleSubmit,
    };
};

export default useSignupForm;
