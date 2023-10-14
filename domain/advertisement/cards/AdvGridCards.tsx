// Main
import React from "react";
import Link from "next/link";
import { IDynamicContent } from "../../ContentGenerator/dynamicContent.types";
import Image from "../../../components/image/Image";

interface IProps {
    data: IDynamicContent;
}

const AdvGridCards = ({ data }: IProps) => {
    return (
        <div className="grid gird-cols-2 gap-2 sm:grid-cols-2 mb-2 md:grid-cols-3 xl:grid-cols-5">
            {data?.advs.map((i, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center h-56 "
                >
                    <Link href={i.link}>
                        <Image
                            width="100%"
                            height="100%"
                            objectFit="contain"
                            src={i.banner.s3Key}
                            aws={{ dir: i.banner.dir, size: "m" }}
                            alt={i.banner.description}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AdvGridCards;
