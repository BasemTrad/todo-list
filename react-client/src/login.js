import React from 'react';
import   './login.css';


function Login() {
    function Submit()  {
        window.location.href = "/todo";
      }
    return(
        <div className="login">
            <h1>log in</h1>
            <div><label htmlFor="Email">Email</label></div>
            <input type="text" className="" placeholder="Email"  NoValidate  />
            <div><label htmlFor="Email">Password</label></div>
            <input type="text" className="" placeholder="Password"  NoValidate  />

            <button onClick={Submit}>Submit</button>
          </div>

    );
}

export default Login;