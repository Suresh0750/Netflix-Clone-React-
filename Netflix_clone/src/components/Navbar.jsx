
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {

  const {user,logOut} = UserAuth()
  console.log(`navbar`,user)
  const navigate = useNavigate()

  const handleLogout = async ()=>{
    try{

      await logOut()
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
        <Link to='/'>
        NETFLIX
        </Link>
      </h1>
      {
        user?.email ?
        <div>
        <button className='text-white pr-4 cursor-pointer'>
          <Link to="/Account">
          Account
          </Link>
        </button>
        <button onClick={handleLogout} className='bg-red-600 px-6 py-2 cursor-pointer rounded text-white'>
          
            Logout
    
        </button>
      </div>
        :
      <div>
      <button className='text-white pr-4 cursor-pointer'>
        <Link to="/Login">
        Sign In
        </Link>
      </button>
      <button className='bg-red-600 px-6 py-2 cursor-pointer rounded text-white'>
        <Link to="/SignUp">
          Sign Up
        </Link>
      </button>
    </div>
      }
    </div>
  )
}

export default Navbar
