import React, { use, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashborad from './pages/Dashborad'
import PrivateRoute from './components/PrivateRoute'
const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState(false)
  return (
    <div className='w-[100%] h-full bg-[#0B0B0B] flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>

      <Routes>
       <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
       <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn}  isLoggedIn={isLoggedIn}/>}/>
       <Route path='/signup' element={<SignUp setisLoggedIn={setisLoggedIn} isLoggedIn={isLoggedIn}/>}/>
       <Route path='/Dashborad' element={
           <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashborad/>
           </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App
