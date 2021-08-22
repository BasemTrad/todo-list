import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";

function App() {
  function sign() {
    window.location.href = "/login"
    
  }
  function signup()  {
    window.location.href = "/signup";
  }

  return (
    <Router>
      <Switch>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/signup"><div>
          <h1>signup</h1></div> </Route>

          <Route path="/">
            <div>
              <h1>Wlecom</h1>
              <button onClick={sign}>log in</button>
              <button onClick={signup}>sign up</button>
            </div>
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
