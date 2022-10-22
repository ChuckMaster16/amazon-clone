import React from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import {signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from 'next/router';
import {useSelector} from 'react-redux';
import {selectItems} from '../slices/basketSlice'


function Header() {
const {data: session, status } = useSession();
const route = useRouter();
const items = useSelector(selectItems);


  return (
    <header>
    <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
            onClick={()=>route.push("/")}
            src="https://res.cloudinary.com/chuckmaster/image/upload/v1663884632/amazon%20clone%20files/amazon_PNG11_qvd70g.png"
            alt="Amazon"
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
            />
        </div>
        <div className="flex items-end link py-1 px-0 mr-2 leading-4">
            <FmdGoodOutlinedIcon className="text-white font-semibold" />
            <div className="pr-6">
              <p className="text-white">Deliver to</p>
              <p className="font-extrabold text-white">Ithaca 14850</p>
            </div>
        </div>
      <div className="hidden sm:flex  items-center h-10  rounded-md  flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
      <p className="bg-gray-200  h-full w-12 rounded-l-md flex items-center justify-center">All <span> <ArrowDropDownOutlinedIcon/></span></p>
      <input className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none" type="text" placeholder="search" />
       <SearchIcon className="w-10 "/>
      </div>
      <div className="flex link ml-2">
      <Image
      src="https://res.cloudinary.com/chuckmaster/image/upload/v1666225698/amazon%20clone%20files/usflag_ul4qmb.png"
      alt="Amazon"
      height={30}
      width={36}
      objectFit="contain"
      className="cursor-pointer"
      />
      <p className="text-white font-extrabold ">EN<span className="text-gray-100"><ArrowDropDownOutlinedIcon/></span></p>
      </div>
      <div className="text-white flex  items-center text-xs space-x-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="leading-3   link">
            <p className="underline">{session ? `Hello, ${session.user.name}` : "Sign in"}</p>
            <p>Account & List</p>
          </div>
          <div className="leading-3   link">
            <p>Retruns</p>
            <p>& Orders</p>
          </div>
          <div onClick={()=>route.push("/checkout")} className="relative flex justify-center items-center link py-2">
            <span className="absolute top-0 right-0 md:right-[1.9rem] h-5 w-5 bg-yellow-200 text-[#f08804] flex items-center justify-center rounded-full font-bold text-base">
            {items.length}</span>
           <ShoppingCartOutlinedIcon className="h-10 " />
           <p className="hidden md:inline font-extrabold md:text-sm">cart</p>
          </div>
      </div>
    </div>

    <div className="flex items-center bg-amazon_blue-light text-white h-11 space-x-3 p-2 pl-6">
    <p className="link flex items-center py-1">
     <MenuIcon/>
     All
     </p>
     <p className="link py-1">Today Deals</p>
     <p className="link py-1">Cuatomer Service</p>
     <p className="link py-1">Registry</p>
     <p className="link py-1">Gift Card</p>
     <p className="link py-1">Sell</p>

    </div>
    </header>
  )
}

export default Header
