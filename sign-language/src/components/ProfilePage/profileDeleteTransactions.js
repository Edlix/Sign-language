import {ProfilePageAPI} from "./profilePageAPI";

const ProfileDeleteTransactions = () => {

    //const deleteTransactions = () => {
      //  alert("Deleted transactions")
    //}

    const deleteTransactions = async () => {
        let response = await ProfilePageAPI.getUserTransactions("dewaldels")
        let userId = response[0].id
        await ProfilePageAPI.deleteUserTransactions(userId)
    }



    return (
        <>
            <button onClick={deleteTransactions}>Delete transactions</button>
        </>
    )
}

export default ProfileDeleteTransactions