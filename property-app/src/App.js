import './App.css';
import TenementsContainer from './components/Tenements/TenementsContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import NavBar from './components/NavBar';
import TenementDetails from "./components/Tenements/TenementDetails";


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
          <Route path="/tenements/:id">
            <TenementDetails />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
