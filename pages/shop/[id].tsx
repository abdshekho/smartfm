// Main
import { GET_PRODUCT, GET_PRODUCTS } from "../../domain/product/products.sql";
import client from "../../services/apollo";
import { IProduct } from "../../domain/product/product.types";

// Components
import HeadLayout from "../../components/layout/headLayout";
import ProductOverView from "../../components/Product/ProductOverView";
import ProductSwiper from "../../domain/product/productList/ProductSwiper";
import ProductTabs from "../../components/Product/ProductTabs";
import useImage from "../../components/image/image.logic";
import Lang from "../../components/Public/Lang";

interface IProps {
    product: IProduct;
    relatedProducts: IProduct[];
}

const Shop = ({ product, relatedProducts }: IProps) => {
    const { getAwsUrl } = useImage();

    return (
        <div>
            <HeadLayout
                title={Lang({ en: product.name, ar: product.ar_name })}
                url={`/shop/${product.id}`}
                image={getAwsUrl(product.thumbnail?.s3Key, {
                    dir: product.thumbnail.dir,
                    size: "l",
                })}
                description={Lang({ en: product.about, ar: product.ar_about })}
            />

            <ProductOverView product={product} />

            <ProductTabs product={product} />

            {relatedProducts.length ? (
                <div className="mb-8">
                    <ProductSwiper
                        data={{
                            id: "1",
                            section: product.category.id,
                            products: relatedProducts,
                            title: "Related Products",
                        }}
                    />
                </div>
            ) : null}
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const { data } = await client.query({
        query: GET_PRODUCT,
        variables: {
            id: params?.id,
        },
        fetchPolicy: "no-cache",
    });
    const product = data?.getProduct;

    const { data: data2 } = await client.query({
        query: GET_PRODUCTS,
        variables: {
            options: {
                page: 1,
                size: 48,
                search: "",
                section: product?.category?.id || "",
            },
            fetchPolicy: "no-cache",
        },
    });

    const relatedProductsList = data2?.getProducts?.products;
    const relatedProducts = relatedProductsList.filter(
        (i) => i.id !== product.id
    );

    return {
        props: { product, relatedProducts },
    };
};

export default Shop;
