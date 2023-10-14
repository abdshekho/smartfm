// Main
import React, { useEffect, useRef, useState } from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
} from "@heroicons/react/solid";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay,
    SwiperOptions,
} from "swiper";
import MultiClass from "./Public/Classes/MultiClass";

SwiperCore.use([Pagination, Navigation, Autoplay]);

// Types
interface IProps {
    children: React.ReactNode;
    pagination?: boolean;
    loop?: boolean;
    space?: number;
    autoplay?: boolean;
    slidesPerView: number;
    breakpoints?: number[];
}

const Swiper = ({
    children,
    pagination,
    loop,
    autoplay,
    slidesPerView,
    breakpoints,
    space,
}: IProps) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const paginationLabel = useRef<HTMLHeadingElement>(null);

    const onBeforeInit = (Swiper: SwiperCore): void => {
        if (typeof Swiper.params.navigation !== "boolean") {
            const navigation = Swiper.params.navigation;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            if (breakpoints)
                Swiper.params.breakpoints = {
                    0: {
                        slidesPerView: breakpoints[0],
                    },
                    475: {
                        slidesPerView: breakpoints[1],
                    },
                    768: {
                        slidesPerView: breakpoints[2],
                    },
                    1024: {
                        slidesPerView: breakpoints[3],
                    },
                    1280: {
                        slidesPerView: breakpoints[4],
                    },
                    1536: {
                        slidesPerView: breakpoints[5],
                    },
                };
        }

        if (typeof Swiper.params.pagination !== "boolean") {
            Swiper.params.pagination.el = paginationLabel.current;
        }
    };

    // Swiper Buttons Classes
    const RL_Button_Container = "absolute z-10 h-12 w-12 rounded-3xl";
    const RL_Button =
        "w-10 h-10 md:w-12 md:h-12 hover:scale-110 transform-gpu transition-all duration-300 bg-gray-50 shadow-xl rounded-3xl p-1.5 hover:bg-gray-200";

    return (
        <div className="relative flex items-center w-full">
            {pagination ? (
                <>
                    <div
                        ref={prevRef}
                        className={MultiClass([RL_Button_Container, "-left-4"])}
                    >
                        <button>
                            <ChevronLeftIcon
                                fill="orange"
                                className={RL_Button}
                            />
                        </button>
                    </div>
                    <div
                        ref={nextRef}
                        className={MultiClass([
                            RL_Button_Container,
                            "-right-6",
                        ])}
                    >
                        <button>
                            <ChevronRightIcon
                                fill="orange"
                                className={RL_Button}
                            />
                        </button>
                    </div>
                </>
            ) : null}
            <ReactSwiper
                className="w-full h-full"
                onBeforeInit={onBeforeInit}
                slidesPerView={slidesPerView}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                spaceBetween={space || 0}
                loop={loop}
                autoplay={autoplay}
                speed={800}
            >
                {children}
            </ReactSwiper>
        </div>
    );
};

export default Swiper;
