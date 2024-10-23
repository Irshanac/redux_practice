import React from 'react'
import ShowData from './components/Data/ShowData'
import AddData from './components/Data/AddData'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import EditDataPage from './components/Data/EditData'
import ShowColor from './components/colorChange/ShowColor'
import AddColor from './components/colorChange/AddColor'
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
            <Route path='/' element={<ShowColor/>}/>
            <Route path='/addcolor' element={<AddColor/>}/>
          </Routes>
        </Router>
   
    </>
  )
}

export default App
