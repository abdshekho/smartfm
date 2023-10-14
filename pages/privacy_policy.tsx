// Components
import HeadLayout from "../components/layout/headLayout";
import ContentGenerator from "../domain/ContentGenerator";

const Privacy_Policy = () => {
    return (
        <div>
            <HeadLayout title="Privacy Policy" />

            <div className="p-6 shadow-xl">
                <ContentGenerator page="privacy_policy" />
            </div>
        </div>
    );
};

export default Privacy_Policy;
