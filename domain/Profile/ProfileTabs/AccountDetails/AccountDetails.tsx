// Main
import { IUser } from "../../../auth/user.types";
import useAccountDetails from "./AccountDetails.logic";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface AccountDetailsProps {
    user: IUser;
}

const AccountDetails = ({ user }: AccountDetailsProps) => {
    const { register, errors, FormHandleSubmit, handleSubmit } =
        useAccountDetails({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
        });

    const ErrorMessage = ({
        name,
    }: {
        name: "username" | "firstName" | "lastName" | "email" | "phone";
    }) => {
        if (!errors[name]?.message) return null;
        return (
            <p className="text-xs text-red-600 font-sans mt-1 pl-1">
                <FontAwesomeIcon icon={faInfoCircle} /> {errors[name].message}
            </p>
        );
    };

    return (
        <form
            className="w-full"
            onSubmit={FormHandleSubmit((data) => handleSubmit(data))}
        >
            <h1 className="text-xl font-mono mb-4">Account Details</h1>

            <div className="mb-2">
                <label>
                    <span className="text-sm font-medium capitalize pl-2">
                        username
                    </span>

                    <input
                        {...register("username")}
                        className="formInput mt-1"
                        placeholder="username"
                    />
                    <ErrorMessage name="username" />
                </label>
            </div>

            <div className="mb-2">
                <label>
                    <span className="text-sm font-medium capitalize pl-2">
                        first name
                    </span>
                    <input
                        {...register("firstName")}
                        className="formInput mt-1"
                        placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" />
                </label>
            </div>
            <div className="mb-2">
                <label>
                    <span className="text-sm font-medium capitalize pl-2">
                        last name
                    </span>
                    <input
                        {...register("lastName")}
                        className="formInput mt-1"
                        placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" />
                </label>
            </div>

            <div className="mb-2">
                <label>
                    <span className="text-sm font-medium capitalize pl-2">
                        email
                    </span>
                    <input
                        {...register("email")}
                        className="formInput mt-1"
                        placeholder="Email"
                        type="email"
                    />
                    <ErrorMessage name="email" />
                </label>
            </div>

            <div className="mb-2">
                <label>
                    <span className="text-sm font-medium capitalize pl-2">
                        phone number
                    </span>
                    <input
                        {...register("phone")}
                        className="formInput mt-1"
                        placeholder="Phone Number"
                        type="number"
                    />
                    <ErrorMessage name="phone" />
                </label>
            </div>

            <button
                type="submit"
                className="py-3 px-8 mt-3  bg-secondary text-white capitalize text-sm font-mono"
            >
                save changes
            </button>
        </form>
    );
};

export default AccountDetails;
