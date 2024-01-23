import { useState } from 'react'
import './App.css'
import LoginSignup from './Components/Login/LoginSignUp.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginSignup />
    </>
  )
}

export default App
