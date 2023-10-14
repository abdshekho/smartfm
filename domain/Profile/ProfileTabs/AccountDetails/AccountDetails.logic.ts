import { useRouter } from "next/router";
// Main
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IUser } from "../../../auth/user.types";
import { IProfile } from "../../profile.types";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../../profile.gql";
import { RootReducer } from "../../../../store/reducers";
import { useSelector } from "react-redux";

const validationSchema = yup.object({
    email: yup
        .string()
        .required("email is a required field")
        .min(3, "email must be at least 3 characters"),
    username: yup
        .string()
        .required("email is a required field")
        .min(3, "email must be at least 3 characters"),
    firstName: yup
        .string()
        .required("firstName is a required field")
        .min(3, "firstName must be at least 3 characters"),
    lastName: yup
        .string()
        .required("lastName is a required field")
        .min(3, "lastName must be at least 3 characters"),
    phone: yup
        .string()
        .required("phone is a required field")
        .min(10, "phone must be at least 10 characters")
        .max(10, "phone must be at least 10 characters"),
});

const useAccountDetails = (profileData?: IProfile) => {
    const { user, loading: authLoading } = useSelector(
        (state: RootReducer) => state.auth
    );
    const router = useRouter();
    const {
        register,
        handleSubmit: FormHandleSubmit,
        formState: { errors },
    } = useForm<IProfile>({
        defaultValues: profileData || {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
        resolver: yupResolver(validationSchema),
    });

    // Update Logic
    const [updateProfile, { loading, data, error }] =
        useMutation(UPDATE_PROFILE);

    const handleSubmit = (data: IProfile) => {
        if (user)
            updateProfile({
                variables: {
                    id: user.id,
                    ...data,
                },
            });

        router.reload();
    };

    return { register, errors, FormHandleSubmit, handleSubmit };
};

export default useAccountDetails;
