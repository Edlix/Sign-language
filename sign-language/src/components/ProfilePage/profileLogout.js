const ProfileLogout = () => {

    const logout = () => {
        alert("Logged out")
    }

    return (
        <>
            <button onClick={logout}>Log out</button>
        </>
    )
}

export default ProfileLogout