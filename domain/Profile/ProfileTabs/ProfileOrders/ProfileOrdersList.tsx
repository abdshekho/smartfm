// Main
import Image from "../../../../components/image/Image";
import Link from "next/link";

interface IProps {
    orders?: any;
}

const OrdersList = ({ orders }: IProps) => {
    if (!orders) {
        return (
            <div className="flex flex-col items-center justify-center mt-12">
                <Image aspect="1:1" src="no-orders.svg" alt="no-address" />
                <h1 className="my-6 font-semibold text-2xl text-gray-800">
                    No Orders Found
                </h1>

                <p className="text-gray-400 w-full md:w-2/4 text-center text-lg">
                    You have no orders please start shopping at Smart Family and
                    place orders
                </p>

                <Link href="/shop">
                    <button className="capitalize bg-secondary text-white py-3 px-6 mt-4">
                        start shopping now
                    </button>
                </Link>
            </div>
        );
    }

    return <div></div>;
};

export default OrdersList;
