import ProfileTranslations from "./profileTranslations";
import ProfileLogout from "./profileLogout";
import ProfileDeleteTranslations from "./profileDeleteTranslations";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export const ProfilePage = () => {

    const history = useHistory()
    const state = useSelector(state => state)
    const [username, setUsername] = useState(state.loginReducer.username)
    useEffect(()=>{
        if(username == ""){
            history.push("/")
        }
    }, [])
    return (
        <>
            <header className="mb-5">
                <h1>Hi, {username}</h1>
                <p>Welcome to your profile</p>
            </header>
            <ProfileTranslations/>
            <ProfileLogout/>
            <ProfileDeleteTranslations/>
        </>
    )
}

export default ProfilePage