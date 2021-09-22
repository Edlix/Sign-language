import AppContainer from "../../hoc/AppContainer";

function TranslationPage() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
        <AppContainer>
            <main className="TranslationPage">
                <form className="mt-3" onSubmit={handleSubmit}>
                    <h2>Translatooor for Sign Language</h2>
                    <div>
                        <label htmlFor="input" className="form-label">Text to be translated</label>
                        <input id="input" type="text" placeholder="Enter text" className="form-control" />
                    </div>
                    <h2>Signe Language</h2>
                    <div>
                    </div>
                </form>
            </main>
        </AppContainer>
    )
}


export default TranslationPage