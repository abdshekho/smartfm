// Main
import { useRouter } from "next/router";
import { useState } from "react";

// Components
import CategoryList from "../../domain/category/categoryList/CategoryList";
import { IProduct } from "../../domain/product/product.types";
import ProductList from "../../domain/product/productList/ProductList";
import SelectInput from "../Headless/SelectInput";
import Loading from "../Public/Loading/Loading";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MultiClass from "../Public/Classes/MultiClass";
import Dir from "../Public/Lang/Direction";
import Lang from "../Public/Lang";

const SortBy = [
    { name: "none" },
    { name: "lowest price" },
    { name: "highest price" },
    { name: "oldest" },
    { name: "newest" },
];

interface IProps {
    products: IProduct[];
    count: number;
}

const ShopContent = ({ count, products }: IProps) => {
    const router = useRouter();
    const params = router.query;

    const [selected, setSelected] = useState(SortBy[0]);

    const FiltersJSX = () => {
        const jsx: any = [];

        const handleRemoveFilter = (remove: string) => {
            const queryParams: any = [];

            for (let [k, v] of Object.entries(params)) {
                if (k !== remove) queryParams.push(`${k}=${v}`);
            }
            router.push(`/shop?${queryParams.map((i, index) => i)}`);
        };
        for (let [k, v] of Object.entries(params)) {
            jsx.push(
                <p className="flex items-center border mb-2 mr-2 py-2 px-4 text-xs text-gray-500">
                    <FontAwesomeIcon
                        onClick={() => handleRemoveFilter(k)}
                        icon={faTimes}
                        className={MultiClass([
                            "hover:text-gray-300 cursor-pointer",
                            Dir({ en: "mr-2", ar: "ml-2" }),
                        ])}
                    />
                    {v}
                </p>
            );
        }

        return jsx;
    };

    return (
        <div className="flex border bg-white relative">
            <div
                className={MultiClass([
                    "md:w-4/12 lg:w-3/12 xl:w-3/12",
                    Dir({ en: "border-r", ar: "border-l" }),
                ])}
            >
                <CategoryList />
            </div>
            <div className="w-full md:w-8/12 lg:w-9/12 xl:w-10/12">
                <div className="p-4 flex flex-col border-b ">
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="font-medium text-sm text-gray-600">
                            <Lang
                                en={`Showing results ${count}`}
                                ar={`النتائج المعروضة ${count}`}
                            />
                        </h2>
                    </div>

                    <div className="flex flex-wrap mt-2">
                        <FiltersJSX />
                    </div>
                </div>

                {!products ? (
                    <Loading styles={{ height: "400px" }} ballSize={18} />
                ) : products.length ? (
                    <ProductList products={products} />
                ) : (
                    <div className="py-6 h-64 flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-mono font-bold">
                            No results found
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopContent;
