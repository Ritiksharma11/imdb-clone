'use client';

import Link from "next/link";
import { AiFillHome } from 'react-icons/ai'
import { AiFillInfoCircle } from 'react-icons/ai'
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <header className="flex justify-between px-2 py-2 md:px-20 ">

      <div className="flex text-xl gap-4 md:gap-8">
        <Link href='/' className="flex items-center">
          <AiFillHome />
          <h1 className="hidden md:flex">Home</h1>
        </Link>

        <Link href='/about' className="flex items-center ">
          <AiFillInfoCircle />
          <h1 className="hidden md:flex">About</h1>
        </Link>
      </div>


      <div className="flex items-center gap-2 md:gap-4">
        <div>
          <DarkMode />
        </div>

        <div className="flex items-center md:gap-2">
          <span className="md:text-2xl font-semibold bg-yellow-400 px-2 rounded-md ">IMDB</span>
          <span className="md:text-lg font-semibold">Clone</span>
        </div>

      </div>

    </header>
  )
}

export default Header