// Main
import IsAuth from "../domain/auth/protectors/isAuth";
import ProfilePages from "../domain/Profile/ProfileTabs";

const Profile = () => {
    return (
        <IsAuth>
            <ProfilePages />
        </IsAuth>
    );
};

export default Profile;
