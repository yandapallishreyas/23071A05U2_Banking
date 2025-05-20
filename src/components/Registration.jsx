import React from 'react';
import './regtr.css';
function Registration() {
  return (
    <div>
      <form className='registr-form'>
      <h2>Registration</h2>
        <input type="text" placeholder="Username" required /><br />
        <input type="text" placeholder="Email" required /><br />
        <input type="number" placeholder="Phone Number" required /><br />
        <input type="text" placeholder="City" required /><br />
        <input type="text" placeholder="First Name" required /><br />
        <input type="text" placeholder="Last Name" required /><br />
        <input type="text" placeholder="Date of Birth" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
