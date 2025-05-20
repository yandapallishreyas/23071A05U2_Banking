import React from 'react';
import './logi.css';
function Login() {
    return (
      <div>
        <form className='logi-form'>
        <h2>Login </h2>
          <input type="text" placeholder="Enter Username" required /><br/>
          <input type="password" placeholder="Enter Password" required /><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  export default Login;