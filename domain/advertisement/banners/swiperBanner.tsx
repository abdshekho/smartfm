// Main
import React from "react";
import Swiper from "../../../components/swiper";
import { SwiperSlide } from "swiper/react";
import { IDynamicContent } from "../../ContentGenerator/dynamicContent.types";
import Link from "next/link";
import Image from "../../../components/image/Image";
import useWindowDimensions from "../../../constants/useWindowDimensions";
import useImage from "../../../components/image/image.logic";

interface IProps {
    data: IDynamicContent;
}

const SwiperBanner = ({ data }: IProps) => {
    const style = data.styles ? JSON.parse(data.styles) : {};
    const { getAwsUrl } = useImage();

    if (!data) return null;
    return (
        <div className="w-full h-auto" style={style}>
            <Swiper slidesPerView={1} autoplay loop>
                {data.advs?.map((i, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-autoflex items-center justify-center">
                            <Link href={i.link || "#"}>
                                <img
                                    src={getAwsUrl(i.banner.s3Key, {
                                        dir: i.banner.dir,
                                        size: "l",
                                    })}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "200px",
                                    }}
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperBanner;
