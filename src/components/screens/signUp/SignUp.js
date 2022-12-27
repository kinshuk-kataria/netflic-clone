import React from 'react';
import '../landingPage/landingPage.css';
import logo from '../../../assets/Netflix_Logo.png';
import { useRef } from 'react';
import { auth } from '../../../firebase/firebaseConf';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCred => {
        alert('Successfully signed up! Click yes to go to sign-in page');
        window.location = '/login';
      })
      .catch(error => {});
  };

  return (
    <div className="login">
      <div className="login__gradient"></div>
      <div className="login__logo">
        <img src={logo} alt="netflix logo" />
      </div>
      <div className="login__body">
        <div className="login__content">
          <div className="login__main">
            <h1>Sign Up</h1>

            <form onSubmit={register}>
              <input
                className="login__input"
                type="text"
                placeholder="Email or phone number"
                ref={emailRef}
                required
              />

              <br />
              <input
                className="login__input"
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
              <br />
              <button type="submit">Sign Up</button>
              <br />
            </form>
            <div className="login__other">
              <h4>
                Go to <span onClick={props.loginRegister}>sign-in</span>
              </h4>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
