import { Detail } from "../../../domain/product/product.types";

// Main
interface IProps {
    details: Detail[];
}

const ProductDetailsTable = ({ details }: IProps) => {
    if (!details.length) return null;
    return (
        <div className="border border-b-0 border-r-0">
            {details?.map((i) => (
                <div key={i.id} className="border-b grid grid-cols-2">
                    <h1 className="border-r px-3 py-1 text-sm bg-gray-500 text-gray-800  bg-opacity-5">
                        {i.key}
                    </h1>

                    <h1 className="px-3 py-1 text-sm">{i.value}</h1>
                </div>
            ))}
        </div>
    );
};

export default ProductDetailsTable;
