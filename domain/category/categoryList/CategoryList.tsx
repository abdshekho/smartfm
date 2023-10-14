// Main
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ICategory } from "../category.types";
import Link from "next/link";
import { useRouter } from "next/router";
import useCategoryList from "./CategoryList.logic";
import MultiClass from "../../../components/Public/Classes/MultiClass";
import Dir from "../../../components/Public/Lang/Direction";
import Lang from "../../../components/Public/Lang";
import useWindowDimensions from "../../../constants/useWindowDimensions";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../store/actions/apperance";
import Modal from "../../../components/Public/Modal/Modal";

const CategoryList = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    const { categories, handleSelect } = useCategoryList();
    const catId = String(router.query.category);
    const isSection = width <= 768 ? true : false;
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleCategory = (id: string) => {
        handleSelect(id);
        router.push(`/shop?category=${id}`);
    };

    const handleOpenDrawer = () => {
        setOpenDrawer(!openDrawer);
        dispatch(toggleModal("section-modal"));
    };

    const ClearSpan = MultiClass([
        "underline font-mono font-light text-xs text-gray-400",
        Dir({ en: "ml-2", ar: "mr-2" }),
    ]);

    const CategoryItem = ({ cat, sub }: { cat: ICategory; sub?: boolean }) => {
        return (
            <div
                className={MultiClass([
                    "cursor-pointer my-1",
                    Dir({ en: "pl-4", ar: "pr-4" }),
                ])}
                key={cat.id}
            >
                <p
                    onClick={() => handleCategory(cat.id)}
                    className={
                        sub
                            ? "text-sm hover:underline"
                            : "text-sm text-secondary"
                    }
                >
                    <Lang en={cat.name} ar={cat.ar_name} />
                    {cat.children.map((i) => i.id).includes(catId) && (
                        <span className={ClearSpan}>
                            <Lang en="Clear" ar="مسح" />
                        </span>
                    )}
                </p>
                {cat.isSelected && cat.children.length > 0 && (
                    <div className="pl-6 py-2">
                        {cat.children?.map((i) => (
                            <CategoryItem sub cat={i} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const CategoriesJsx = () => {
        return categories?.map((cat: ICategory) => (
            <Disclosure key={cat.id}>
                {({ open }) => (
                    <>
                        <div className="flex justify-between w-full px-4 py-3 text-sm font-semibold text-left border-b hover:bg-gray-300 hover:bg-opacity-25">
                            <div className="flex items-end">
                                <button onClick={() => handleCategory(cat.id)}>
                                    <p className="">
                                        <Lang en={cat.name} ar={cat.ar_name} />
                                    </p>
                                </button>

                                {cat.children
                                    .map((i) => i.id)
                                    .includes(catId) ||
                                    (cat.id === catId && (
                                        <Link href="/shop">
                                            <a>
                                                <span className={ClearSpan}>
                                                    <Lang en="Clear" ar="مسح" />
                                                </span>
                                            </a>
                                        </Link>
                                    ))}
                            </div>

                            {cat.children.length ? (
                                <Disclosure.Button>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? "transform rotate-180" : ""
                                        } w-5 h-5 transition-all duration-300 text-gray-300`}
                                    />
                                </Disclosure.Button>
                            ) : null}
                        </div>
                        {cat.children.length ? (
                            <Disclosure.Panel
                                className={MultiClass([
                                    "py-2 pr-2 pb-2 border-b",
                                ])}
                            >
                                {cat.children.map((child) => (
                                    <CategoryItem key={child.id} cat={child} />
                                ))}
                            </Disclosure.Panel>
                        ) : null}
                    </>
                )}
            </Disclosure>
        ));
    };

    const variants = {
        initial: {
            x: Dir({ en: "-100%", ar: "100%" }),
        },
        animate: {
            x: "0%",
        },
    };

    if (isSection)
        return (
            <>
                <div
                    className={MultiClass([
                        "absolute  top-4  z-[11]",
                        Dir({ en: "right-4", ar: "left-4" }),
                    ])}
                >
                    <button
                        onClick={handleOpenDrawer}
                        className="bg-primary px-3 py-1 text-white rounded-md text-sm"
                    >
                        Sections
                    </button>
                </div>

                <Modal
                    open={openDrawer}
                    className="min-h-screen  w-[70vw] max-w-[250px]"
                    onClose={handleOpenDrawer}
                >
                    <motion.div
                        className="bg-white min-h-screen"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            easings: "easeIn",
                        }}
                    >
                        {CategoriesJsx()}
                    </motion.div>
                </Modal>

                {/* <motion.div>{CategoriesJsx()}</motion.div> */}
            </>
        );
    return <>{CategoriesJsx()}</>;
};

export default CategoryList;
