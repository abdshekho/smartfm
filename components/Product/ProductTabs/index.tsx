// Main
import React, { useState } from "react";
import { IProduct } from "../../../domain/product/product.types";
import parse from "html-react-parser";
import ProductDetailsTable from "./ProductDetailsTable";
import useLang from "../../Public/Lang/lang.logic";
import MultiClass from "../../Public/Classes/MultiClass";
import Lang from "../../Public/Lang";
import { motion } from "framer-motion";

// Types
interface IProps {
    product: IProduct;
}

const ProductTabs = ({ product }: IProps) => {
    const { direction, lang } = useLang();
    const [tab, setTab] = useState<number>(0);

    const selectedTabClasses = (num: number) => {
        if (tab === num) return "border-b-2 border-secondary text-secondary";
        else return "text-gray-500";
    };

    const SelectedTab = ({
        num,
        children,
    }: {
        num: number;
        children?: React.ReactNode;
    }) => {
        const variants = {
            initial: {
                x: lang === "en" ? "-100%" : "100%",
            },
            animate: {
                x: 0,
            },
        };

        if (num === tab)
            return (
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        easings: "backIn",
                    }}
                >
                    {children}
                </motion.div>
            );
        else return null;
    };

    const TabClasses =
        "w-full h-full py-3 px-6 uppercase  font-mono font-bold hover:bg-gray-400 transition-all duration-400 hover:bg-opacity-20 ";

    return (
        <div dir={direction} className="rounded mb-8 shadow-xl bg-white ">
            <div className="flex border-b overflow-scroll w-auto scrollTabs">
                <div className={MultiClass([selectedTabClasses(0)])}>
                    <button onClick={() => setTab(0)} className={TabClasses}>
                        <Lang en="description" ar="الوصف" />
                    </button>
                </div>

                <div className={MultiClass([selectedTabClasses(1)])}>
                    <button onClick={() => setTab(1)} className={TabClasses}>
                        <Lang en="product details" ar="تفاصيل المنتج" />
                    </button>
                </div>

                <div className={MultiClass([selectedTabClasses(2)])}>
                    <button disabled className={TabClasses}>
                        <Lang en="comments" ar="التعليقات" />
                    </button>
                </div>
            </div>

            <motion.div
                transition={{
                    duration: 5,
                    type: "spring",
                }}
                className="p-4 py-8 w-full h-auto overflow-x-auto"
            >
                <SelectedTab num={0}>
                    {parse(
                        Lang({
                            en: product.description,
                            ar: product.ar_description,
                        })
                    )}
                </SelectedTab>

                <SelectedTab num={1}>
                    <ProductDetailsTable details={product.details} />
                </SelectedTab>
            </motion.div>
        </div>
    );
};

export default ProductTabs;
