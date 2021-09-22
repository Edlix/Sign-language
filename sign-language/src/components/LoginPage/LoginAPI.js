export const LoginAPI = {


    login(credentials) {
        const apiKey = 'EdvardsAPIKEY';
        return fetch ('https://vue-questionaire.herokuapp.com/translations', {
            method: 'POST',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then( async response => {
            if (!response.ok) {
                const {error = 'An unknown error occurd'} = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    }
}