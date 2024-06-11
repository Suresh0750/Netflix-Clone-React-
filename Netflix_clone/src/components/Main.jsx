import React,{useEffect, useState} from 'react'

import axios from 'axios'
import request from '../request'

const Main = () => {
  const [movies,setMovies] = useState([])

  const index = Math.floor(Math.random()*movies.length)
  const movie = movies[index]
  // console.log(movie)

  // fetch movies data

  // resutl is a Array in said 20 movie data form in object
  useEffect(()=>{
    axios.get(request.PopularMovies).then((res)=>{
      setMovies(res.data.results)
      })
  },[])
      

  // text-overley  In movie review
  const turnCateString = (str,num)=>{
    if(str == '') return ''

    if(String(str).length>num){
     return str = str.slice(0,num)+'...'
    }else{
     return str
    }
  }
      
  return (
    <div className="w-full h-[550px] text-white">
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` } alt={movie?.title} className='w-full h-full object-cover' />
      </div>
      <div className='absolute top-[20%] w-full object-cover p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border border-gray-300  py-2 px-5 bg-gray-300   text-black m-2'>play</button>
          <button className='border border-gray-300  py-2 px-5   text-white ml-4'>Watch later</button>
        </div> 
        <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{turnCateString(movie?.overview,150)}</p>
      </div>
    </div>
  )
}

export default Main
