import React from 'react';
import   './Signup.css';


function Signup() {
    function Submit()  {
        window.location.href = "/todo";
      }
    return(
        <div className="Signup">
            <h1>Sign Up</h1>
            <div><label htmlFor="Email">Email</label></div>
            <input type="text" className="" placeholder="Email"  NoValidate  />

            <div><label htmlFor="UserName">User Name</label></div>
            <input type="text" className="" placeholder="UserName"  NoValidate  />

            
            <div><label htmlFor="Password">Password</label></div>
            <input type="text" className="" placeholder="Password"  NoValidate  />

            <button onClick={Submit}>Submit</button>
          </div>

    );
}

export default Signup;