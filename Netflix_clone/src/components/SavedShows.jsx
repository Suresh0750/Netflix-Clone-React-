import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { useState, useEffect, useContext } from "react"
import {UserAuth} from "../context/AuthContext"
import { db } from "../firebase"
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

export const SavedShows = () => {
    const [movies, setMovies] = useState([])

    // const { user } = useContext(UserAuth)
    const { user } = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 700;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 700;

    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            console.log('Document Data:', doc.data());
            const savedShows = doc.data()?.savedShows;
            console.log('Saved Shows:', savedShows);
            if (savedShows) {
                setMovies(savedShows);
            }
        });
    }, [user?.email]);


    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (remID) => {
        try {
            const result = movies.filter((item) => item.id !== remID)
            await updateDoc(movieRef, {
                savedShows: result
            })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block" size={40} />
                <div id={'slider'} className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((item, id) => {

                        return (
                            < div key={id} className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block cursor-pointer relative p-2" >
                                <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500${item?.img}`} alt={item?.title} />
                                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white">
                                    <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
                                    <p onClick={() => deleteShow(item.id)} className="absolute top-2 right-2 text-gray-300"><AiOutlineClose /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <MdChevronRight id='slideRightButton' onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block" size={40} />
            </div >
        </>
    )
}