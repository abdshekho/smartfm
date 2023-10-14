// Main
import React from "react";
import MultiClass from "../Public/Classes/MultiClass";
import useLang from "../Public/Lang/lang.logic";
import HeadLayout from "./headLayout";

// Types
interface IProps {
    children: React.ReactNode;
    langSupport?: "en" | "en-ar";
    type?: "space" | "flat";
    centered?: boolean;

    // Head Layout
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const PageLayout = ({
    children,
    langSupport,
    type = "space",
    centered,
    title,
    description,
    image,
    url,
}: IProps) => {
    const { direction } = useLang();

    const ContainerType = type === "space" ? "container mx-auto " : "";
    const CenteredClass = centered ? "flex items-center justify-center" : "";

    return (
        <div className={MultiClass([ContainerType, CenteredClass])}>
            <HeadLayout
                title={title}
                description={description}
                image={image}
                url={url}
            />

            {children}
        </div>
    );
};

export default PageLayout;
