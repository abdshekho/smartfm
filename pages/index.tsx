// Components
import PageLayout from "../components/layout/PageLayout";
import ContentGenerator from "../domain/ContentGenerator";

const Home = () => {
    return (
        <PageLayout title="Store">
            <ContentGenerator page="shop" />
        </PageLayout>
    );
};

export default Home;
