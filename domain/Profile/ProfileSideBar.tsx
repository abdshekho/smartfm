// Main
import Image from "../../components/image/Image";
import { IUser } from "../auth/user.types";
import { SideBarLinks } from "./profile.data";

export interface ProfileSideBarProps {
    selectedTab: number;
    handleSelectTab: Function;
    user: IUser;
    handleSignout: Function;
}

const ProfileSideBar = ({
    selectedTab,
    handleSelectTab,
    user,
    handleSignout,
}: ProfileSideBarProps) => {
    return (
        <div className="w-full md:w-1/4 md:border-r border-t md:border-t-0">
            <div className="border-b p-4 flex items-center">
                <div className="w-12 h-12">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMrqyW43W_KoTq_nsfBnwuPn0FXvcTe2Kgw&usqp=CAU" />
                </div>

                <div className="flex flex-col ml-3">
                    <span className="text-gray-400 font-mono text-sm">Hi</span>
                    <p className="font-semibold">{user.username}</p>
                </div>
            </div>

            <div className="flex flex-col items-start p-4 ml-6 lg:ml-16 ">
                {SideBarLinks.map((i, index) => (
                    <p
                        key={index}
                        style={
                            selectedTab === index ? { color: "#F59E0B" } : {}
                        }
                        onClick={() => handleSelectTab(index)}
                        className="capitalize cursor-pointer  font-mono my-1 hover:text-yellow-500"
                    >
                        {i.label}
                    </p>
                ))}

                <p
                    onClick={() => handleSignout()}
                    className="capitalize cursor-pointer  font-mono my-1 hover:text-yellow-500"
                >
                    signout
                </p>
            </div>
        </div>
    );
};

export default ProfileSideBar;
