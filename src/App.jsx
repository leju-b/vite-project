import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import Main from './components/Body/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
