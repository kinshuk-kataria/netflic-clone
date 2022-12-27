import Home from './components/screens/home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { auth } from './firebase/firebaseConf';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './redux/features/user/userSlice';
import Profile from './components/screens/profileScreen/Profile';
import LandingPage from './components/screens/landingPage/LandingPage';
import Login from './components/screens/login/Login';

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {!user ? (
        <LandingPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
