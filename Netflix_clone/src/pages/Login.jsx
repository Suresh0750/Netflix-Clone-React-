import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom' 
import { UserAuth } from '../context/AuthContext'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const {user,logIn} = UserAuth()
  const navigate = useNavigate()

  const submitHandler= async(e)=>{
      e.preventDefault()
      setError('')
    try{
      console.log(email,password,`sigin`)
      await logIn(email,password)
      navigate('/')
    }catch(err){
      console.log(`error from logIn router`,err)
      console.log(err.message)
      setError(err.message)
    }
  }

  return (
    <div>
        <div className='w-full h-screen'>
        {/* this div for black shadow in side of the frame */}
        {/* <div className="w-full absolute h-screen bg-gradient-to-r from-black">     </div> */}
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg"  alt='background_Image' className='hidden absolute sm:block w-full h-full object-cover '/>
          <div className='bg-black/60 fixed  top-0 left-0 w-full h-screen'></div>
          <div className="fixed w-full px-4 py-24 z-50">
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16 '>
                <h1 className='text-3xl font-bold '>Sign In</h1>
                {error ? <p className='text-red-500'>{error}</p>: null}
                <form action="" onSubmit={submitHandler} className='w-full flex flex-col py-4'>
                  <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className="p-3 my-2 bg-gray-700 rounded" autoComplete='email'/><br/>
                  <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='password'  className="p-3 my-2 bg-gray-700 rounded"  autoComplete ='current-password'/>
                  <button className='bg-red-500 rounded my-6 py-3 font-bold'>Sign In</button>
                  <div className='flex justify-between items-center text-gray-600'>
                    <p>
                      <input type="checkbox" /> Remember me
                    </p>
                    <p>
                      Need Help?
                    </p>
                  </div>
                  <p className='py-8'>
                    <span className='text-gray-600'>New to Netflix?</span>
                    <Link to='/SignUp'>
                    Sign Up
                    </Link>
                  </p>
                </form >
              </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Login
