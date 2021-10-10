import React from 'react';
import   './Signup.css';


function Signup() {
    function Submit()  {
      console.log('fffff');
        window.location.href = "/todo";
      }
    return(
  <div className="long">
    <div className="bad" > 
      <form>
        <h1>Sign up</h1>
        <input type="email" className="input-box" placeholder="Your Email" />
        <input type="username" className="input-box" placeholder="Username" />
        <input type="password" className="input-box" placeholder="Password" />
      </form>
         <button onClick={Submit}> signup  </button>
        </div>
      </div>

    );
}

export default Signup;