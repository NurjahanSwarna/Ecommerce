import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Hero from './Components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/>
    <Hero/>
    </>
  )
}

export default App
