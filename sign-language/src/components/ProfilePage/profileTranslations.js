import {ProfilePageAPI} from "./profilePageAPI";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"

const ProfileTranslations = () => {

    //TODO use real transactions
    const getTranslations = async () => {
        console.log()
        let response = await ProfilePageAPI.getUserProfile("dewaldels")
        let translations = response[0].translations
        console.log(translations)
        return translations
    }

    let translations = ["a", "b"]

    //useEffect(()=>{
        //getTranslations()
    //}, [])
    //let transactions = ["aaa", "bbb", "ccc", "ddd", "eee","bdsf", "asfg", "werwer", "ddgdsd", "ggds","aaan", "bbbsdf", "ccret", "ddwtd", "eewe"]
    return (
        <>
            <h4>Check your translations</h4>
            <ul>
                {translations.map(translation => <li>{translation}</li>)}
            </ul>
        </>
    )
}

export default ProfileTranslations