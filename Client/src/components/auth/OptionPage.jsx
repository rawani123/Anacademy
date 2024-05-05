import React from 'react'
import Navbar from '../navbar/NavBar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Optionpage = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#60B3D1] flex justify-center items-center h-[581px] gap-28'>
        <Link to='/signup/student' className='bg-blue-950 opacity-75 shadow-xl shadow-blue-700 text-white font-bold py-2 px-4 rounded-full h-36 w-60 flex justify-center items-center text-xl'>Sign up as student</Link>
        <Link to='/signup/teacher' className='bg-blue-950 opacity-75 shadow-xl shadow-blue-700 text-white font-bold py-2 px-4 rounded-full h-36 w-60 flex justify-center items-center text-xl'>Sign up as teacher</Link>       
    </div>  
    <Footer/>   
    </>
  )
}

export default Optionpage
