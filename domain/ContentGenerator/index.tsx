// Main
import React, { useEffect } from "react";
import useContentGenerator from "./ContentGenerator.logic";

interface IProps {
    page: "shop" | "section" | "privacy_policy" | "terms&conditions";
}

const ContentGenerator = ({ page }: IProps) => {
    const { fetchComponents, loading, data, GetComponent } =
        useContentGenerator();

    useEffect(() => {
        fetchComponents(page);
    }, []);

    if (!loading && data)
        return (
            <>
                {data.map((i, index) => (
                    <React.Fragment key={i.id}>
                        <GetComponent data={i} />
                    </React.Fragment>
                ))}
            </>
        );
    else return null;
};

export default ContentGenerator;
