import {ProfilePageAPI} from "./ProfilePageAPI";
import {useHistory} from "react-router-dom";

const ProfileDeleteTranslations = () => {

    const history = useHistory()
    const deleteTranslations = async () => {
        let response = await ProfilePageAPI.getUserProfile("dewaldels")
        let userId = response[0].id
        await ProfilePageAPI.deleteUserTranslations(userId)
        alert("Deleted Translations")
        history.push("/translations")
    }



    return (
        <>
            <button onClick={deleteTranslations}>Delete transactions</button>
        </>
    )
}

export default ProfileDeleteTranslations