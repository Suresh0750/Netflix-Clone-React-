import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Row = ({title,fetchURL}) => {

    const [movie,setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((res)=> {
            console.log(res.data.results)
            setMovies(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[fetchURL])

const  movies = movie.map((item,id)=>{
        // {console.log(item?.title)}
   return <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block  cursor-pointer relative p-2'>
            <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item.title} />
    </div>
})
    
  return (
    <div>
        <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
        <div className='relative flex items-center '>
            <div id={'slider'}>
                {/* {console.log('sdfghj',movie[0].original_title)} */}
                {movies}
                   
            </div>
        </div>
    </div>
  )
}

export default Row
