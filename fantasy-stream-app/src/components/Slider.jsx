import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';
const screenWidth=window.innerWidth;

function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const SliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const SliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
  return (
    <div className='mb-4'>
      <HiChevronLeft className="hidden md:block text-white text-[50px] absolute mx-8 mt-[200px] cursor-pointer"
      onClick={()=>SliderLeft(elementRef.current)} />
      <HiChevronRight className="hidden md:block text-white text-[50px] absolute mx-8 mt-[200px] cursor-pointer right-0"
      onClick={()=>SliderRight(elementRef.current)} />

      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-100 transition-all duration-100"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider