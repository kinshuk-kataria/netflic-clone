import Home from './components/screens/Home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login/Login'
import Signup from './components/screens/Sign-up/Signup'

function App() {
  const user = true

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
