import React, { useState } from 'react';
import '../Asserts/Css/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import  {login}  from '../Redux/userSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
      name : Name,
      email: email,
      password: password,
      loggedIn : true,

    })
    )

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(emailRegex) && password.length >= 8) {
      alert(`Logged in with email: ${email}`);
    } else {
      setErrorMessage('Could not login. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link to="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
