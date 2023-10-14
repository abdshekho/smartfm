// Main
import useSigninForm from "./signinForm.logic";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessageText } from "../../../components/globalClasses";
import ErrorMessage from "../../../components/Form/ErrorMessage";

const SigninForm = () => {
    const { register, handleSubmit, errors, handleAuth, error } =
        useSigninForm();

    // const ErrorMessage = ({ name }: { name: "identifier" | "password" }) => {
    //     if (!errors[name]?.message) return null;
    //     return (
    //         <p className={ErrorMessageText}>
    //             <FontAwesomeIcon icon={faInfoCircle} /> {errors[name].message}
    //         </p>
    //     );
    // };

    return (
        <div className="shadow-sm border-2 sm:w-2/3 lg:w-1/3 p-4 bg-white">
            <h1 className="mb-6 text-4xl text-center text-gray-600 font-thin">
                Welcome
            </h1>

            {error && (
                <p className={ErrorMessageText}>
                    <FontAwesomeIcon icon={faInfoCircle} /> {error}
                </p>
            )}

            <form onSubmit={handleSubmit((data) => handleAuth(data))}>
                <div className="mb-4">
                    <input
                        className="formInput"
                        {...register("identifier")}
                        placeholder="Email address"
                    />
                    <ErrorMessage errors={errors} name="identifier" />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="formInput"
                        {...register("password")}
                        placeholder="Password"
                    />
                    <ErrorMessage errors={errors} name="password" />
                </div>

                <button
                    type="submit"
                    className="w-full text-white text-lg bg-secondary py-2"
                >
                    Signin
                </button>
            </form>

            <p className="text-center mt-6 mb-4 text-sm text-gray-400 font-semibold">
                By signing in, you agree to Smartfamily{" "}
                <Link href="terms_conditions">
                    <a className="hover:underline text-secondary">
                        Terms and Conditions
                    </a>
                </Link>{" "}
                and{" "}
                <Link href="privacy_policy">
                    <a className="hover:underline text-secondary">
                        Privacy Policy
                    </a>
                </Link>
            </p>

            <hr />

            <div className="mt-6">
                <p className="text-sm text-gray-400 text-center mb-2">
                    New to Smartfamily?
                </p>

                <Link href="/signup">
                    <button className="w-full hover:bg-gray-100 text-primary border border-primary text-lg  py-2">
                        create account
                    </button>
                </Link>
            </div>

            {/* <div className="flex w-full items-center justify-between my-4">
                <span className="h-px bg-gray-200 w-full" />
                <span className="mx-3 text-gray-700 font-mono text-lg">OR</span>
                <span className="h-px bg-gray-200 w-full" />
            </div> */}
        </div>
    );
};

export default SigninForm;
