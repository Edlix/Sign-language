export const ProfilePageAPI = {
    getUserTransactions(username) {
        const apiURL = 'https://vue-questionaire.herokuapp.com/'
        return fetch(`${apiURL}translations?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async response => {
            if (!response.ok) {
                throw new Error("request error")
            }
            return response.json()
        })
    }
}