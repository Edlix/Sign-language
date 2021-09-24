import { useState } from "react"
import AppContainer from "../../hoc/AppContainer"
import { useDispatch, useSelector, } from "react-redux"
import { loginCheckForUserAction, loginUserAction } from "../../store/actions/loginActions"
import {useHistory} from "react-router-dom";


const LoginPage = () => {
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const history = useHistory()

    const [username, setUsername] = useState({
        username: "",
        userExists: false,
        translations: []
    })

    const onInputChange = event => {
        setUsername(
            event.target.value
        )
    }
    const onFormSubmit = event => {
        event.preventDefault()
        dispatch(loginCheckForUserAction(username))
        history.push('/profile')
        //console.log(username)
    }

    // const onFormSubmit = event => {
    //     event.preventDefault()
    //     dispatch(loginUserAction(username))
    //     history.push('/translation')
    // }

    return (
        <AppContainer>
            <main className="LoginPage">
                <form className="mt-3" onSubmit={ onFormSubmit}>
                    <h1>Login to Translate Sign Language</h1>
                    {
                        user &&
                        <p>{user.username}</p>
                    }
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input id="username" type="text" placeholder="Enter username" 
                        className="form-control" onChange={ onInputChange } />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                </form>
            </main>
        </AppContainer>
    )
}

export default LoginPage