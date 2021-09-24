import {ProfilePageAPI} from "./profilePageAPI";

const ProfileDeleteTranslations = () => {

    const deleteTransactions = async () => {
        console.log()
        let response = await ProfilePageAPI.getUserProfile("dewaldels")
        let userId = response[0].id
        await ProfilePageAPI.deleteUserTranslations(userId)
        alert("Transactions deleted")
    }



    return (
        <>
            <button onClick={deleteTransactions}>Delete transactions</button>
        </>
    )
}

export default ProfileDeleteTranslations