import React from 'react'
import './login.css'
import logo from '../../../assets/Netflix_Logo.png'

function Login() {
  const register = e => {
    e.preventDefault()
  }

  const signin = e => {
    e.preventDefault()
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="netflix logo" />
      </div>
      <div className="login__body">
        <div className="login__content">
          <div className="login__main">
            <h1>Sign In</h1>

            <form onSubmit={signin}>
              <input
                className="login__input"
                type="text"
                placeholder="Email or phone number"
                required
              />

              <br />
              <input
                className="login__input"
                type="password"
                placeholder="Password"
                required
              />
              <br />
              <button type="submit">Sign In</button>
              <br />
            </form>
            <div className="login__other">
              <span>New to netflix?</span> <a onClick={register}>Sign up now</a>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
