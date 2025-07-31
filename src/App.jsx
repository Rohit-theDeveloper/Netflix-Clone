import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Login from './pages/Login'
// import Navbar from './component/Navbar'
// import Trends from './component/Trends'
// import Reasons from './component/Reasons'
// import Frequentlyques from './component/Frequentlyques'
// import Membership from './component/Membership'
// import Footer from './component/Footer'

function App() {


  return (
    <>
    {/* <div className='bg-black'>
     <Navbar/>
     <Trends/>
    <Reasons/>
    <Frequentlyques/>
    <Membership/>
    <Footer />
    </div> */}
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}  />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
