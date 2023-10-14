// Main
import client from "../../services/apollo";
import { GET_PRODUCTS } from "../../domain/product/products.sql";

// Components
import ShopContent from "../../components/Shop/ShopContent";
import { IProduct } from "../../domain/product/product.types";
import HeadLayout from "../../components/layout/headLayout";
import useLang from "../../components/Public/Lang/lang.logic";

interface IProps {
    products: IProduct[];
    count: number;
}

const Shop = ({ count, products }: IProps) => {
    const { direction } = useLang();

    return (
        <div dir={direction} className="my-6">
            <HeadLayout title="Shop" />

            <ShopContent count={count} products={products} />
        </div>
    );
};

export const getServerSideProps = async ({ params, query }) => {
    const { data } = await client.query({
        query: GET_PRODUCTS,
        variables: {
            options: {
                page: Number(query?.page) || 1,
                size: 20,
                search: query?.search || "",
                section: query?.category || "",
            },
        },
        fetchPolicy: "no-cache",
    });

    return {
        props: {
            products: data?.getProducts?.products,
            count: data?.getProducts?.count,
        },
    };
};

export default Shop;
