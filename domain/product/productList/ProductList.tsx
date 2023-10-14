import { IProduct } from "../product.types";
import ProductItem from "../productItem/ProductItem";

interface IProps {
    products: IProduct[];
}
const ProductList = ({ products }: IProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
            {products?.map((item, i) => (
                <ProductItem data={item} key={i} delay={0.1 + i * 0.1} />
            ))}
        </div>
    );
};

export default ProductList;
