import React from 'react';
import   './login.css';


function Login() {
    function Submit()  {
        window.location.href = "/todo";
      }
    return(
      <div className="body">
     <form className="box" action="index.html"  method="post">
       <h1>Login</h1>
       <input type="text" name="" placeholder="Username" />
       <input type="password" name="" placeholder="Password" />
        <input type="submit" name="" value="Login" />
     </form>
     </div>

    );
}

export default Login;