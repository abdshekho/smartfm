// Main
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay,
    SwiperOptions,
    Thumbs,
} from "swiper";
import { IMediaLibrary } from "../image/mediaLibrary";
import Image from "../image/Image";
import { useState } from "react";
import useImage from "../image/image.logic";

SwiperCore.use([Pagination, Navigation, Autoplay, Thumbs]);

interface IProps {
    showcases: IMediaLibrary[];
}

const ProductShowCase = ({ showcases }: IProps) => {
    const [selectedSlide, setSelectedSlide] = useState<any>(null);
    const { getVideoAwsUrl } = useImage();

    return (
        <div className="w-full h-full">
            <Swiper thumbs={{ swiper: selectedSlide }} className="w-full ">
                {showcases.map((i, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center">
                            {i.type === "video/mp4" ? (
                                <video
                                    autoPlay
                                    loop
                                    playsInline
                                    muted
                                    className="w-full h-full object-cover aspect-[16/9]"
                                >
                                    <source
                                        type="video/mp4"
                                        src={getVideoAwsUrl(i.s3Key, {
                                            dir: i.dir,
                                            size: "l",
                                        })}
                                    />
                                </video>
                            ) : (
                                <Image
                                    alt={i.description}
                                    src={i.s3Key}
                                    objectFit="contain"
                                    height={"100%"}
                                    width={"100%"}
                                    className="aspect-1 lg:aspect-[10/8]"
                                    aws={{ dir: i.dir, size: "l" }}
                                />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="w-full mt-4">
                <Swiper
                    onSwiper={setSelectedSlide}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },

                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={30}
                    className="w-full h-full"
                >
                    {showcases.map((i, index) => (
                        <SwiperSlide className="border p-2" key={index}>
                            <div
                                className={`flex  items-center justify-center w-full h-full`}
                            >
                                {i.type === "video/mp4" ? (
                                    <video className="h-fit aspect-1">
                                        <source
                                            type="video/mp4"
                                            src={getVideoAwsUrl(i.s3Key, {
                                                dir: i.dir,
                                                size: "s",
                                            })}
                                        />
                                    </video>
                                ) : (
                                    <Image
                                        alt={i.description}
                                        src={i.s3Key}
                                        className="aspect-1"
                                        objectFit="cover"
                                        aws={{ dir: i.dir, size: "s" }}
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductShowCase;
