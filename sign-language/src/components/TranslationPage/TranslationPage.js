
import TranslationForm from "./TranslationForm";


//simple translationPage component.
function TranslationPage() {

    console.log('Translationpage.render')
    return (
        <main className="TranslationPage">
            <h2> Sign Language</h2>
            <TranslationForm />
        </main>
    )
}


export default TranslationPage