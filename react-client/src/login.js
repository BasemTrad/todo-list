import React from 'react';

function Login() {
    function Submit()  {
        window.location.href = "/todo";
      }
    return(
        <div>
            <h1>log in</h1>
            <button onClick={Submit}>Submit</button>
          </div>

    );
}

export default Login;