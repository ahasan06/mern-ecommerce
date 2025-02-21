import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/ORders'



function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
      <Navbar/>
      <hr />
      <div className='flex w-full bg-red-50'>
        <Sidebar/>
        <div className='w-[70%] mx-auto  bg-red-200 text-base'>
          <Routes>
            <Route path='/add' element ={<Add/>}/>
            <Route path='/list' element ={<List/>}/>
            <Route path='/order' element ={<Orders/>}/>
          </Routes>
        </div>
      </div>
      </>
    </div>
  )
}

export default App
