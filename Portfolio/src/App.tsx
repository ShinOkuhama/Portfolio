import { useState } from 'react'
import Navbar from './Navbar.tsx'
import About from './About.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <h3 id="logo">Shin Okuhama</h3>
    <div id='body-container'>
     <Navbar/>
     <About/>
    </div>
    </>
  )
}

export default App
