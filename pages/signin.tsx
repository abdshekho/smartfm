// Main
import IsNotAuth from "../domain/auth/protectors/isNotAuth";
import SigninForm from "../domain/auth/signin/signinForm";

const Signin = () => {
    return (
        <IsNotAuth>
            <div className="w-full h-full my-5 flex items-center justify-center">
                <SigninForm />
            </div>
        </IsNotAuth>
    );
};

export default Signin;
