import React, {useState} from 'react'
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg'>
        <div className=' px-2 flex justify-between items-center w-full h-full'>
            <div className="flex items-center">
                <h1 className='text-3xl font-bold mr4 sm:text-4xl'>
                    BRAND.
                </h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platforms</li>
                    <li>Pricing</li>

                </ul>
            </div>
            <div className="hidden md:flex pr-4">
                <button className='border-none bg-transparent text-black mr-4'>
                    Sign in
                </button>
                <button className='px-8 py-3'>
                    Sign up
                </button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <RiMenu4Line size={40}  className='w-5'/> : <IoClose size={40} className='w-5'/>}
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-200 w-full'>Home</li>
            <li className='border-b-2 border-zinc-200 w-full'>About</li>
            <li className='border-b-2 border-zinc-200 w-full'>Support</li>
            <li className='border-b-2 border-zinc-200 w-full'>Platforms</li>
            <li className='border-b-2 border-zinc-200 w-full'>Pricing</li>
            <div className="flex flex-col my-4">
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign in</button>
            <button className='px-8 py-3'>Sign up</button>
        </div>
        </ul>
    </div>
  )
}

export default Navbar