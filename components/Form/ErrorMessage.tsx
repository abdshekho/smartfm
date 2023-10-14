// Main
import React, { HTMLAttributes } from "react";
import { ErrorMessageText } from "../globalClasses";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// Types
interface IProps {
    errors: any;
    name: any;
    className?: HTMLAttributes<HTMLParagraphElement>;
}

const ErrorMessage = ({ errors, name, className }: IProps) => {
    if (!errors[name]?.message) return null;
    return (
        <p className={ErrorMessageText + className}>
            <FontAwesomeIcon icon={faInfoCircle} /> {errors[name].message}
        </p>
    );
};

export default ErrorMessage;
