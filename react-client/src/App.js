
import "./App.css";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import "./Signup.css";
import Todo from './todo';
import "./login.css";




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
        <Route path="/signup">
          <Signup />
           </Route>

          <Route path="/">
            <div>
             <div> <h1>
               <span className="font-weigth-bold">My Website</span>.com</h1>
             <h3>Welcom</h3>
              </div>
             <img src="/images/logo192.png" alt=" "/>
               <div><button onClick={sign}>log in</button> </div>
              <div className="on"><button onClick={signup}>sign up</button></div>
            </div>
          </Route>
          
          
      </Switch>
    </Router>
  );
}

export default App;
