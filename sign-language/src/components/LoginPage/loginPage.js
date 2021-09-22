import { useState } from "react"
import AppContainer from "../../hoc/AppContainer"
import { useDispatch } from "react-redux"
import { loginAttemptAction } from "../../store/actions/loginActions"


const LoginPage = () => {
    
    const dispatch = useDispatch()

    const [ credentials, setCredentials ] = useState({
        username: "",
        translations: []
    })

    const onInputChange = event => {
         setCredentials({
             ...credentials,
             [event.target.id]: event.target.value
         })
    }
    const onFormSubmit = event => {
        event.preventDefault()
        dispatch(loginAttemptAction(credentials))
    }

    return (
        <AppContainer>
            <main className="LoginPage">
                <form className="mt-3" onSubmit={ onFormSubmit}>
                    <h1>Login to Translate Sign Language</h1>
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