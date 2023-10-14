// Main
import { IProduct } from "../../domain/product/product.types";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruck,
    faStoreAlt,
    faShieldAlt,
    faCreditCard,
    faCertificate,
} from "@fortawesome/free-solid-svg-icons";

// Components
import Rating from "../../components/rating/Rating";
import ProductShowCase from "./ProductShowCase";
import Lang from "../Public/Lang";
import useLang from "../Public/Lang/lang.logic";
import ProductShare from "../Public/Share";
import MultiClass from "../Public/Classes/MultiClass";
import Dir from "../Public/Lang/Direction";

interface IProps {
    product: IProduct;
}

const ProductOverView = ({ product }: IProps) => {
    const { direction } = useLang();

    const BoxesClasses =
        "w-full bg-gray-100 text-[15px] gap-2  text-gray-600 text-left p-4 flex items-center";

    return (
        <div className="rounded shadow-xl mb-8 bg-white p-4">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-2/3 flex flex-col lg:grid md:grid-cols-2 md:pr-6">
                    <div dir={direction} className="flex flex-col mb-6 lg:mb-0">
                        <h1 className="text-gray-800 mb-2 text-lg font-medium">
                            <Lang en={product.name} ar={product.ar_name} />
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <p className="text-sm text-gray-600">
                                <span className="font-bold text-black uppercase">
                                    sku
                                </span>
                                : {product.sku}
                            </p>

                            <Rating rate={0} />
                        </div>

                        <div className="h-px bg-gray-400 shadow-2xl mt-2 mb-4" />

                        <div>
                            <p className="text-xs text-gray-600">
                                <Lang
                                    en={product.about}
                                    ar={product.ar_about}
                                />
                            </p>
                        </div>

                        <ProductShare uri={`/shop/${product.id}`} />
                    </div>

                    <div
                        dir={direction}
                        className="flex flex-col items-end w-full lg:pl-8 lg:mt-6"
                    >
                        <div
                            dir="ltr"
                            className={MultiClass([
                                "flex flex-col w-full ",
                                Dir({
                                    en: "text-right",
                                    ar: "text-left items-end",
                                }),
                            ])}
                        >
                            <p className="uppercase font-medium font-mono text-2xl">
                                <Lang en="aed" ar="درهم" />{" "}
                                {product.quantities[0]?.price}
                            </p>
                            <span className="text-gray-400 text-xs">
                                <Lang
                                    en="Inclusive of VAT"
                                    ar="شامل ضريبة القيمة المضافة"
                                />
                            </span>

                            <p className="text-sm mt-2">
                                <Lang en="FREE Shipping" ar="الشحن مجانا" />
                            </p>
                        </div>

                        <div className="w-full my-2.5">
                            <button className="w-full bg-secondary text-white text-lg capitalize outline-none py-3 px-7 rounded-sm">
                                <Lang en=" buy now" ar="اشتري الآن" />
                            </button>
                        </div>

                        <div className="w-full">
                            <div className={BoxesClasses}>
                                <FontAwesomeIcon
                                    // className="w-5 h-5 text-gray-600"
                                    icon={faTruck}
                                />
                                <span>
                                    <Lang en="FREE Shipping" ar="الشحن مجانا" />
                                </span>
                            </div>
                            <div className={BoxesClasses}>
                                <FontAwesomeIcon
                                    // className="w-5 h-5 text-gray-600"
                                    icon={faStoreAlt}
                                />
                                <span>
                                    <Lang
                                        en="Sold by SmartFamily"
                                        ar="مُباع بواسطة SmartFamily"
                                    />
                                </span>
                            </div>

                            <div className={BoxesClasses}>
                                <FontAwesomeIcon
                                    // className="w-5 h-5 text-gray-600"
                                    icon={faShieldAlt}
                                />
                                <span className={``}>
                                    <Lang en="100% Genuine" ar="أصلي 100٪" />
                                </span>
                            </div>
                            <div className={BoxesClasses}>
                                <FontAwesomeIcon
                                    // className="w-5 h-5 text-gray-600"
                                    icon={faCreditCard}
                                />
                                <span className={``}>
                                    <Lang en="Secure Payment" ar="دفع امن" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/6 lg:1/3 mb-6 md:mb-0">
                    <ProductShowCase showcases={product.showcase} />
                </div>
            </div>

            {product.details.length ? (
                <div className="w-full lg:w-1/2 mt-6">
                    <h1 className="text-secondary font-sans mb-2.5">
                        Key Information
                    </h1>

                    <div className="flex flex-wrap">
                        {product.details.map((i) => (
                            <div
                                key={i.id}
                                className="border rounded px-1.5 py-0.5 mr-2 mb-2"
                            >
                                <p className="text-xs text-gray-600">
                                    {i.key}: {i.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProductOverView;
