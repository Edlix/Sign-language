export const LoginAPI = {

    login(credentials) {
        return fetch ('https://vue-questionaire.herokuapp.com/translations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then( async response => {
            if (!response.ok) {
                const {error = 'An unknown error occurd'} = await response.json()
                throw new Error(error)
            }
        })
    }
}