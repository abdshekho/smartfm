// Main
import { IDynamicContent } from "./dynamicContent.types";
import { ComponentsTypes } from "./dynamicContent.types";
import parse from "html-react-parser";

// Apollo
import { useLazyQuery } from "@apollo/client";

// Components
import { GET_DYNAMIC_CONTENT } from "./dynamicContent.sql";
import dynamic from "next/dynamic";

const useContentGenerator = () => {
    const [getDynamicContent, { loading, data }] = useLazyQuery<{
        getDynamicContents: {
            dynamicContent: IDynamicContent[];
            count: number;
        };
    }>(GET_DYNAMIC_CONTENT);

    const fetchComponents = (
        page: "shop" | "section" | "privacy_policy" | "terms&conditions"
    ) => {
        getDynamicContent({
            variables: {
                page,
            },
        });
    };

    const GetComponent = ({ data }: { data: IDynamicContent }) => {
        switch (data.type) {
            case "Product_Swiper":
                const ProductSwiper = dynamic(
                    () => import("../product/productList/ProductSwiper")
                );

                return <ProductSwiper data={data} />;
            case "Advs_Banner":
                const SwiperBanner = dynamic(
                    () => import("../advertisement/banners/swiperBanner")
                );

                return <SwiperBanner data={data} />;
            case "2_Box_Adv":
                var AdvBanners = dynamic(
                    () => import("../advertisement/banners/AdvBanners")
                );

                return <AdvBanners count={2} data={data} />;
            case "3_Box_Adv":
                var AdvBanners = dynamic(
                    () => import("../advertisement/banners/AdvBanners")
                );

                return <AdvBanners count={3} data={data} gridCols={3} />;
            case "4_Box_Adv":
                var AdvBanners = dynamic(
                    () => import("../advertisement/banners/AdvBanners")
                );

                return <AdvBanners count={4} data={data} gridRows={2} />;
            case "Text_Editor":
                return <>{parse(data.text)}</>;
            case "Adv_Cards":
                var AdvGridCards = dynamic(
                    () => import("../advertisement/cards/AdvGridCards")
                );

                return <AdvGridCards data={data} />;
            case "Space":
                return <div style={{ height: data.space }} />;
            default:
                return null;
        }
    };

    return {
        data: data?.getDynamicContents?.dynamicContent || [],
        loading,
        fetchComponents,
        GetComponent,
    };
};

export default useContentGenerator;
