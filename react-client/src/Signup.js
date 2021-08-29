import React from 'react';
import   './Signup.css';


function Signup() {
    function Submit()  {
        window.location.href = "/todo";
      }
    return(
      <div className="long">
      <form className="bad" action="index.html"  method="post">
        <h1>Sign up</h1>
        <input type="email" className="input-box" placeholder="Your Email" />
        <input type="username" className="input-box" placeholder="Username" />
        <input type="password" className="input-box" placeholder="Password" />

         <input type="submit" name="" value="signup" />
      </form>
      </div>

    );
}

export default Signup;