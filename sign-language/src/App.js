import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirectx,
}
from "react-router-dom"
import LoginPage from "./components/LoginPage/loginPage";
import ProfilePage from './components/ProfilePage/profilePage';
import TranslationPage from './components/TranslationPage/translationPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>React sign language</h1>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/translation" exact component={TranslationPage}/>
        <Route path="/profile" exact component={ProfilePage}/>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
