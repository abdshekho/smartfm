import Head from "next/head";
import { IMediaLibrary } from "./mediaLibrary";
import useImage from "./image.logic";
import { useState } from "react";
import MultiClass from "../Public/Classes/MultiClass";

export type Ratios = "16/9" | "1/1" | "3/2" | "4/3" | "2/3" | string;
interface IProps {
    alt?: string;
    src: string;
    className?: string;
    imgClassName?: string;
    aws?: {
        dir: string;
        size: string;
    };
    preload?: boolean;
    objectFit?: "contain" | "cover";
    width?: number | string;
    height?: number | string;
    aspect?: Ratios;
    lazy?: boolean;
}

const FixedImage = ({
    src,
    aws,
    alt,
    preload,
    objectFit = "contain",
    width,
    className,
    imgClassName,
    height,
    aspect = "16/9",
    lazy,
}: IProps) => {
    const { getAspectRatio, getAwsUrl } = useImage();
    const [loading, setLoading] = useState<boolean>(true);

    `w-full ${getAspectRatio(
        aspect,
        Boolean(width && height)
    )} flex justify-center align-middle`;
    return (
        <>
            <div
                style={
                    width && height
                        ? { width, height }
                        : { aspectRatio: aspect }
                }
                className={MultiClass([
                    "w-full",
                    objectFit === "cover"
                        ? ""
                        : "flex justify-center align-middle",
                    className,
                ])}
            >
                <img
                    src={aws ? getAwsUrl(src, aws) : src}
                    alt={alt}
                    loading={!preload && lazy ? "lazy" : "eager"}
                    className={MultiClass([
                        imgClassName,
                        objectFit === "cover"
                            ? "object-cover"
                            : "object-contain",
                    ])}
                    onLoad={() => setLoading(false)}
                />
            </div>
        </>
    );
};

export default FixedImage;
