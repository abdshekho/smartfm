// Main
import useProfile from "./profile.logic";
import ProfileSideBar from "./ProfileSideBar";
import AccountDetails from "./ProfileTabs/AccountDetails/AccountDetails";
import Addresses from "./ProfileTabs/Addresses/Addresses";
import ProfileOrders from "./ProfileTabs/ProfileOrders/ProfileOrders";

const ProfilePages = () => {
    const { sideBarMethods, user } = useProfile();

    const IsSelected = ({
        num,
        children,
    }: {
        num: number;
        children: React.ReactNode;
    }) => {
        if (num === sideBarMethods.selectedTab) return <>{children}</>;
        else return null;
    };

    if (user)
        return (
            <div className="w-full h-full border bg-white flex flex-col-reverse md:flex-row">
                <ProfileSideBar {...sideBarMethods} />

                <div className="w-full md:w-3/4 py-8 px-6">
                    <IsSelected num={1}>
                        <ProfileOrders />
                    </IsSelected>
                    <IsSelected num={2}>
                        <Addresses />
                    </IsSelected>
                    <IsSelected num={3}>
                        <AccountDetails user={user} />
                    </IsSelected>
                </div>
            </div>
        );
    else return null;
};

export default ProfilePages;
