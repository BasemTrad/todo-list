import React from 'react';
import   './login.css';


function Login() {
    function submit()  {
        window.location.href = "/todo";
      }
    return(
      <div className="body">
        <div className="box">
     <form >
       <h1 className="bg-black rounded">Login</h1>
       <input type="text" name="" placeholder="Email"  />
       <input type="password" name="" placeholder="Password" />
        
     </form>
     <button onClick={submit}> Login  </button>
     </div>
     </div>

    );
}

export default Login;