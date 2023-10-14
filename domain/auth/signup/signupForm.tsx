// Main
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import useSignupForm from "./signupForm.logic";

const SignupForm = () => {
    const { register, handleSubmit, errors, handleAuth, error } =
        useSignupForm();

    const ErrorMessage = ({
        name,
    }: {
        name:
            | "username"
            | "lastName"
            | "firstName"
            | "email"
            | "phone"
            | "password";
    }) => {
        if (!errors[name]?.message) return null;
        return (
            <p className="text-xs text-red-600 font-sans mt-1 pl-1">
                <FontAwesomeIcon icon={faInfoCircle} /> {errors[name].message}
            </p>
        );
    };

    return (
        <div className="shadow-sm border-2 sm:w-2/3 lg:w-1/3 p-4 bg-white">
            <h1 className="mb-6 text-4xl text-center text-gray-600 font-thin">
                Welcome
            </h1>

            {error && (
                <p className="text-xs text-red-600 font-sans mb-1 pl-1">
                    <FontAwesomeIcon icon={faInfoCircle} /> {error}
                </p>
            )}

            <form onSubmit={handleSubmit((data) => handleAuth(data))}>
                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("username")}
                        placeholder="Username"
                    />
                    <ErrorMessage name="username" />
                </div>

                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("firstName")}
                        placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" />
                </div>

                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("lastName")}
                        placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" />
                </div>

                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("email")}
                        placeholder="Email"
                    />
                    <ErrorMessage name="email" />
                </div>

                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("phone")}
                        placeholder="Phone"
                    />
                    <ErrorMessage name="phone" />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        className="formInput"
                        {...register("password")}
                        placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                </div>

                <button
                    type="submit"
                    className="w-full text-white text-lg bg-secondary py-2"
                >
                    Signup
                </button>
            </form>

            <p className="text-center mt-6 mb-4 text-sm text-gray-400 font-semibold">
                By signing up, you agree to Smartfamily{" "}
                <Link href="terms_conditions">
                    <a className="hover:underline text-secbg-secondary">
                        Terms and Conditions
                    </a>
                </Link>{" "}
                and{" "}
                <Link href="privacy_policy">
                    <a className="hover:underline text-secbg-secondary">
                        Privacy Policy
                    </a>
                </Link>
            </p>

            <hr />

            <div className="mt-6">
                <p className="text-sm text-gray-400 text-center mb-2">
                    New to Smartfamily?
                </p>

                <Link href="/signin">
                    <button className="w-full hover:bg-gray-100 text-primary border border-primary text-lg  py-2">
                        Signin
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SignupForm;
