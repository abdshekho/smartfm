// Main

import AddressesList from "./AddressesList";

const Addresses = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-mono mb-4">My Address</h1>
                <button className="uppercase font-mono px-4 text-gray-400 hover:text-yellow-500 text-sm pb-1 border-b hover:border-yellow-500 ">
                    new address
                </button>
            </div>

            <AddressesList />
        </div>
    );
};

export default Addresses;
