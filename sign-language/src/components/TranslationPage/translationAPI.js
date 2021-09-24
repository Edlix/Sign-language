const apiURL = 'your-api-url-goes-here'
const apiKey = 'your-public-api-key-goes-here'
const userId = 1 // Update user with id 1

fetch(`${apiURL}/translations/${userId}`, {
    method: 'PATCH', // NB: Set method to PATCH
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: ['easy', 'i love javascript']
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not update translations history')
        }
        return response.json()
    })
    .then(updatedUser => {
        // updatedUser is the user with the Patched data
    })
    .catch(error => {
    })