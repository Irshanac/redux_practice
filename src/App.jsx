import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { useState } from 'react'
function App() {
  const [counter,setCounter]=useState(0)
  const [color,setColor]=useState('blue')
  return (
    <>
      <Header counter={counter} color={color}/>
      <Home  counter={counter} setCounter={setCounter} color={color} setColor={setColor}/>
      <Footer color={color}/>
    </>
  )
}

export default App
