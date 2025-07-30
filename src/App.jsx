import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Trends from './component/Trends'
import Reasons from './component/Reasons'
import Frequentlyques from './component/Frequentlyques'
import Membership from './component/Membership'
import Footer from './component/Footer'

function App() {


  return (
    <>
    <div className='bg-black'>
     <Navbar/>
     <Trends/>
    <Reasons/>
    <Frequentlyques/>
    <Membership/>
    <Footer />
    </div>
    </>
  )
}

export default App
