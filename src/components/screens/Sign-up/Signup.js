import React from 'react'
import './signup.css'
import logo from '../../../assets/Netflix_Logo.png'

function Signup() {
  return (
    <div className="register">
      <div className="register__header">
        <img src={logo} alt="logo" />
        <div className="register__btns">
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button> Sign in</button>
        </div>
      </div>
      <div className="register__content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership
        </h3>
        <input type="text" placeholder="Email Address" />
        <br />
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Signup
