import React from 'react'
import AddTodo from './components/app/todo/AddTodo'
import ShowTodo from './components/app/todo/ShowTodo'
// import Header from './components/Header'
// import Home from './components/Home'
// import Footer from './components/Footer'
// import { useState } from 'react'
function App() {
  // const [counter,setCounter]=useState(0)
  // const [color,setColor]=useState('blue')
  return (
    <>
      {/* <Header counter={counter} color={color}/>
      <Home  counter={counter} setCounter={setCounter} color={color} setColor={setColor}/>
      <Footer color={color}/> */}
      <AddTodo/>
      <ShowTodo/>
    </>
  )
}

export default App
