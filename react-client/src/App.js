
import "./App.css";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Login from "./login";
import Todo from './todo';

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

        <Route path="/todo">

          <Todo />

        </Route>
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
