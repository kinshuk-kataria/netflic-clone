import React from 'react';
import './profile.css';
import Nav from '../../Nav/Nav';
import avatar from '../../../assets/Netflix-avatar.png';
import { useSelector } from 'react-redux';
import { selectuser } from '../../../redux/features/user/userSlice';
import { auth } from '../../../firebase/firebaseConf';

export default function Profile() {
  const user = useSelector(selectuser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={avatar} alt="avatar__logo" />
          <div className="profile__details">
            <h2>{user ? user.email : ''}</h2>
            <div className="profile__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <div className="profile__plansMain">
                <h4>Renewal date: 04/03/2022</h4>
                <section>
                  <div className="profile__plansSubMain">
                    <div>
                      <p>Netflix Standard</p>
                      <span className="profile__plansPixel">1080p</span>
                    </div>
                    <div>
                      <button className="profile__plansBtn">Subscribe</button>
                    </div>
                  </div>
                  <div className="profile__plansSubMain">
                    <div>
                      <p>Netflix Basic</p>
                      <span className="profile__plansPixel">480p</span>
                    </div>
                    <div>
                      <button className="profile__plansBtn">Subscribe</button>
                    </div>
                  </div>
                  <div className="profile__plansSubMain">
                    <div>
                      <p>Netflix Premium</p>
                      <span className="profile__plansPixel">4K+HDR</span>
                    </div>
                    <div>
                      <button className="profile__packageBtn">
                        Current Package
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              <button
                className="profile__signout"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
