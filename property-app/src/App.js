import './App.css';
import TenementsContainer from './components/Tenements/TenementsContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-background" />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/tenements">
            <TenementsContainer />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
