function LoginPage() {
    return (
        <main className="LoginPage">
            <form className="mt-3">
                <h1>Login to Translate Sign Language</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input id="username" type="text" placeholder="Enter username" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="text" placeholder="Enter password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </form>
        </main>
    )
}

export default LoginPage