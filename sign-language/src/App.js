import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  //Redirectx,
}
from "react-router-dom";
import LoginPage from './components/LoginPage/loginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import TranslationPage from './components/TranslationPage/TranslationPage';
import AppContainer from './hoc/AppContainer';

//USE THIS API:
//https://vue-questionaire.herokuapp.com/translations
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppContainer> 
        <h1>React sign language</h1>
      </AppContainer>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/translation" exact component={TranslationPage}/>
        <Route path="/profile" exact component={ProfilePage}/>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
