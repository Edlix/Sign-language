import {ProfilePageAPI} from "./profilePageAPI";

const ProfileDeleteTransactions = () => {

    //const deleteTransactions = () => {
      //  alert("Deleted transactions")
    //}

    const test = async () => {
        //let a = await ProfilePageAPI.getUserTransactions("dewaldels")
        await ProfilePageAPI.deleteUserTransactions(1)
        console.log(a)
    }



    return (
        <>
            <button onClick={test}>Delete transactions</button>
        </>
    )
}

export default ProfileDeleteTransactions