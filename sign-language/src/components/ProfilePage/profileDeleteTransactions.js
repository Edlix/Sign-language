import {ProfilePageAPI} from "./profilePageAPI";

const ProfileDeleteTransactions = () => {

    //const deleteTransactions = () => {
      //  alert("Deleted transactions")
    //}

    const test = async () => {
        let a = await ProfilePageAPI.getUserTransactions("dewaldels")
        console.log(a)
    }



    return (
        <>
            <button onClick={test}>Delete transactions</button>
        </>
    )
}

export default ProfileDeleteTransactions