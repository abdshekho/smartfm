// Main
import Image from "../../../../components/image/Image";

interface IProps {
    addresses?: any;
}

const AddressesList = ({ addresses }: IProps) => {
    if (!addresses) {
        return (
            <div className="flex flex-col items-center justify-center mt-12">
                <Image aspect="1:1" src="no-address.svg" alt="no-address" />
                <h1 className="my-6 font-semibold text-2xl text-gray-800">
                    No Address Found
                </h1>

                <p className="text-gray-400 w-full md:w-1/3 text-center">
                    You have no address listed currently. Please place an order
                    to list an address here.
                </p>
            </div>
        );
    }

    return <div></div>;
};

export default AddressesList;
