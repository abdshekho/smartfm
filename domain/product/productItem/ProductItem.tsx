import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "../../../components/image/Image";
import { IProduct } from "../product.types";

// Skeleton Loader
import Skeleton from "../../../components/Skeleton";
import MultiClass from "../../../components/Public/Classes/MultiClass";
import Dir from "../../../components/Public/Lang/Direction";
import Lang from "../../../components/Public/Lang";

interface IProps {
    delay: number;
    data: IProduct;
}

const ProductItem = ({ delay, data }: IProps) => {
    const [isHover, setHover] = useState(false);
    const link = `/shop/${data?.id}`;
    const [isDelay, setDelay] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDelay(false);
        }, delay / 1000);
    }, []);

    const variants = {
        initial: { y: 50, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: isDelay ? delay : 0 },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.004,
                y: -5,
                boxShadow: "1px 1px 36px -1px rgba(131,131,131,0.55)",
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="border border-gray-200 bg-white w-full flex flex-col"
        >
            <div>
                <Link href={link}>
                    <a>
                        <Skeleton
                            className="aspect-w-1 aspect-h-1"
                            condition={Boolean(data)}
                        >
                            <motion.div
                                animate={
                                    isHover
                                        ? {
                                              scale: 1.004,
                                              y: -5,
                                              transition: { delay: 0.15 },
                                          }
                                        : null
                                }
                                className="flex justify-center w-full mx-auto select-none pt-5 pb-3"
                            >
                                <Image
                                    src={data.thumbnail.s3Key}
                                    alt=""
                                    aws={{
                                        dir: data.thumbnail.dir,
                                        size: "s",
                                    }}
                                    width="100%"
                                    height={249}
                                    lazy
                                />
                            </motion.div>
                        </Skeleton>
                    </a>
                </Link>
            </div>
            <div className="p-5">
                <Skeleton rows={3} condition={Boolean(data)}>
                    <div>
                        <h4>
                            <Link href={link}>
                                <a className="underline hover:text-secondary truncate ellipsis-3-line">
                                    <Lang en={data.name} ar={data.ar_name} />
                                </a>
                            </Link>
                        </h4>
                    </div>
                    <div className="flex md:flex-row  justify-between mt-3">
                        <div className="flex flex-col items-start  justify-end w-6/12">
                            <div className="flex items-center">
                                <span
                                    className={MultiClass([
                                        "w-2 h-2 rounded-3xl",
                                        data.quantities.length
                                            ? "bg-green-600"
                                            : "bg-red-600",
                                        Dir({ en: "mr-1", ar: "ml-1" }),
                                    ])}
                                />
                                <p className="text-gray-500 font-mono text-xs  capitalize">
                                    {data.quantities.length ? (
                                        <Lang en="in stock" ar="متوفر" />
                                    ) : (
                                        <Lang
                                            en="out of stock"
                                            ar="غير متوفر"
                                        />
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end  justify-center w-6/12">
                            {/* <p className="font-semibold text-right text-gray-500 text-xs line-through">
                                AED 7,293.33
                            </p> */}
                            {data.quantities.length ? (
                                <p className="mt-1 font-semibold uppercase text-right">
                                    {data.quantities &&
                                        `${data.quantities[0]?.price} ${Lang({
                                            en: "aed",
                                            ar: "درهم",
                                        })}`}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </Skeleton>
            </div>
        </motion.div>
    );
};

export default ProductItem;
