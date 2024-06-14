import React,{useEffect, useState} from 'react'
import axios from 'axios'

// import Movies from './Movies.jsx' 
import {FaHeart, FaRegHeart} from 'react-icons/fa' // Heart Icons
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'


const Row = ({title,fetchURL,RowId}) => {

    const [movie,setMovies] = useState([])
    const [like,setLikes] = useState(false) 

    const [saved,setSaved] = useState(false)

    useEffect(()=>{
        axios.get(fetchURL).then((res)=> {
            console.log(res.data.results)
            setMovies(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    },[fetchURL])

    // console.log(movie)

// # slide movies 
const  movies = movie.map((item,id)=>{

    // const [like,setLike] = useState(false)
    // const [saved,setSaved] = useState(false)
    const {user} = UserAuth()
    const movieID = doc(db,'users',`${user?.email}`)

    const saveShow = async ()=>{
        if(user?.email){
            setLikes(!like)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows : arrayUnion({
                    id : item.id,
                    title : item.title,
                    img : item.backdrop_path
                })
            })
            alert('movie saved')
        }else{
            alert('please log in to save a movie')
        }
    }


        // {console.log(item?.title)}
   return <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block  cursor-pointer relative p-2'>
            <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item?.title}
                </p>
                <p onClick={saveShow}>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                </p>
            </div>
            </div>
})
    


// # slide scrollbar

const slideLeft =()=>{
    console.log('slideLeft')
    let slider = document.getElementById('slider'+RowId)
    slider.scrollLeft = slider.scrollLeft-500
}

const slideRight =()=>{
    let slider = document.getElementById('slider'+RowId)
    slider.scrollLeft = slider.scrollLeft+500
}


  return (
    <div>
        <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
        <div className='relative flex items-center group'>
            <MdChevronLeft className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0" size={40} onClick={slideLeft}/>

            <div id={'slider'+RowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                 {movies}
            </div>
            <MdChevronRight className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0" size={40} onClick={slideRight}/>
            
        </div>
    </div>
  )
}

export default Row
