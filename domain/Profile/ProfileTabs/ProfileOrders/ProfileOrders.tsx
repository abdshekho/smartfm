// Main

import OrdersList from "./ProfileOrdersList";

const ProfileOrders = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl font-mono mb-4">Orders</h1>

            <OrdersList />
        </div>
    );
};

export default ProfileOrders;
