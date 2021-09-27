import {ProfilePageAPI} from "./profilePageAPI";
import {useEffect, useState} from "react";


const ProfileTranslations = () => {

    const [translations, setTranslations] = useState([])
    //TODO use real transactions
    const getTranslations = async () => {
        console.log()
        let response = await ProfilePageAPI.getUserProfile("dewaldels")
        let t = response[0].translations.slice(-10)
        setTranslations(t)
    }

    //let translations = getTranslations()

    //let translations = ["a", "t"]

    useEffect(()=>{
        getTranslations()
    }, [])
    let transactions = ["aaa", "bbb", "ccc", "ddd", "eee","bdsf", "asfg", "werwer", "ddgdsd", "ggds","aaan", "bbbsdf", "ccret", "ddwtd", "eewe"]
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