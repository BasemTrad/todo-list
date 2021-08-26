import React from 'react';
import   './login.css';


function Login() {
    function submit()  {
        window.location.href = "/todo";
      }
    return(
      <div className="body">
     <form className="box" action="index.html"  method="post">
       <h1>Login</h1>
       <input type="text" name="" placeholder="Email" />
       <input type="password" name="" placeholder="Password" />
        <input type="submit" name="" value="Login" />
     </form>
     </div>

    );
}

export default Login;