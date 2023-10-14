// Components
import HeadLayout from "../components/layout/headLayout";
import ContentGenerator from "../domain/ContentGenerator";

const Terms_Conditions = () => {
    return (
        <div>
            <HeadLayout title="Privacy Policy" />

            <div className="p-6 shadow-xl">
                <ContentGenerator page="terms&conditions" />
            </div>
        </div>
    );
};

export default Terms_Conditions;
