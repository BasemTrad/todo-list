import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import "./Signup.css";
import Todo from "./todo";
import "./login.css";

function App() {
  function sign() {
    window.location.href = "/login";
  }
  function signup() {
    window.location.href = "/signup";
  }

  return (
    <Router>
      <Switch>
      
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/login">
          <Login  />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/">
          <div>
            <div>
              <h1>
                {" "}
                <span >My Website</span>.com
              </h1>
              <h2> Welcom</h2>
            </div>
            <div className="App container">


              <button onClick={sign} className="btn-1">log in</button>
            
              <button onClick={signup} className="btn-2">sign up</button>
          </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
