// Main
import React from "react";
import { SwiperSlide } from "swiper/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import Swiper from "../../../components/swiper";
import Link from "next/link";

// Components
import ProductItem from "../productItem/ProductItem";
import { IDynamicContent } from "../../ContentGenerator/dynamicContent.types";
import useLang from "../../../components/Public/Lang/lang.logic";
import Lang from "../../../components/Public/Lang";
import Dir from "../../../components/Public/Lang/Direction";
import useWindowDimensions from "../../../constants/useWindowDimensions";

// Types
interface IProps {
    data?: IDynamicContent;
}

const ProductSwiper = ({ data }: IProps) => {
    const { direction } = useLang();
    const { width } = useWindowDimensions();

    if (!data) return null;
    return (
        <div dir={direction} className="mb-4 shadow-xl border bg-white">
            {data.title && (
                <div className="p-4 h-auto border-b border-gray-200 relative">
                    <h1 className="text-left md:text-center font-sans text-gray-800 font-bold text-xl">
                        <Lang en={data.title} ar={data.ar_title} />
                    </h1>

                    <div className="flex items-center justify-end">
                        <Link
                            href={
                                data?.section !== "all"
                                    ? `/shop?category=${data?.section}`
                                    : "/shop"
                            }
                        >
                            <a>
                                <span className="flex items-center font-mono uppercase text-yellow-500 text-sm">
                                    <Dir
                                        en={
                                            <>
                                                view all{" "}
                                                <ChevronRightIcon className="w-6 h-6" />
                                            </>
                                        }
                                        ar={
                                            <>
                                                رؤية المزيد{" "}
                                                <ChevronLeftIcon className="w-6 h-6" />
                                            </>
                                        }
                                    />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            )}

            <Swiper
                slidesPerView={6}
                breakpoints={[1, 2, 3, 4, 5, 6]}
                pagination={width >= 564 ? true : false}
            >
                {data.products.map((i, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem data={i} delay={0.1 + index * 0.1} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
