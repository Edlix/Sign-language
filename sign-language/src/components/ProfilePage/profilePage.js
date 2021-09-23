import ProfileTransactions from "./profileTransactions";
import ProfileLogout from "./profileLogout";
import ProfileDeleteTransactions from "./profileDeleteTransactions";

export const ProfilePage = () => {

    return (
        <>
            <header className="mb-5">
                <h1>Hi, Tien</h1>
                <p>Welcome to your profile</p>
            </header>
            <ProfileTransactions/>
            <ProfileLogout/>
            <ProfileDeleteTransactions/>
        </>
    )
}

export default ProfilePage