import { Link, Route, BrowserRouter as Router,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Home  } from "./component/Home";
import { UserformContainer } from "./container/UserformContainer";

function App() {
  return ( //JSX
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="home" >Home</Link>
            </li>
            <li>
              <Link to="Userform" >Userform</Link>
            </li>
          </ul>
        </nav>
        <switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/Userform">
            <UserformContainer></UserformContainer>
          </Route>
        </switch>
        </Router>
     
    </div>
  );
}

export default App;
