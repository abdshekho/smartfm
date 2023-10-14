// Main
import IsNotAuth from "../domain/auth/protectors/isNotAuth";
import SignupForm from "../domain/auth/signup/signupForm";

const Signup = () => {
    return (
        <IsNotAuth>
            <div className="w-full h-full my-5 flex items-center justify-center">
                <SignupForm />
            </div>
        </IsNotAuth>
    );
};

export default Signup;
