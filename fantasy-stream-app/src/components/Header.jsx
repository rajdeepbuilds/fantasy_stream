import React, { useState } from 'react'
import fstream_logo from './../assets/fstream_logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

const Header = () => {
  const[toggle,setToggle]=useState(false)
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        },

    ]
  return (
    <div className="flex items-center justify-between p-5">
      <div className="gap-8 flex items-center">
        <img
          src={fstream_logo}
          className="w-[90px] md:w-[130px] object-cover"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={item.name} Icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle?
          <div
            className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4">
            {menu.map(
              (item, index) =>
                index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
            )}
          </div>:null}
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header