import React from 'react'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import First from './task/First'
import Second from './task/Second'
import Result from './task/Result'
function App() {

  return (
    <>
      {/* <Header counter={counter} color={color}/>
      <Home  counter={counter} setCounter={setCounter} color={color} setColor={setColor}/>
      <Footer color={color}/> */}
      {/* <AddTodo/>
      <ShowTodo/> */}
        {/* <Router>
        <Routes>
          <Route path='/' element={<ShowData/>}></Route>
          <Route path='/adddata' element={<AddData/>}/>
          <Route path='/editdata/:id' element={<EditDataPage/>}/>
          </Routes>
        </Router> */}
        <Router>
          <Routes>
            <Route path='/' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>
            <Route path='/result' element={<Result/>}/>
          </Routes>
        </Router>
   
    </>
  )
}

export default App
