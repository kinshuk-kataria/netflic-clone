import Home from './components/screens/home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Login from './components/screens/login/Login'
import Signin from './components/screens/landingPage/LandingPage'
import SignUp from './components/screens/signUp/SignUp'
import { auth } from './firebase/firebaseConf'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const user = false

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        //Logged In
        console.log(userAuth)
      } else {
        //Logged Out
        console.log('empty')
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        )
      </BrowserRouter>
    </div>
  )
}

export default App
