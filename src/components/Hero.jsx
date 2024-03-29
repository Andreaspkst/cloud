import React from 'react'
import { FaCloudArrowUp } from "react-icons/fa6"; 
import { CiDatabase, CiServer  } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
import bgImg from '../assets/cyber-bg.png'


const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start wful px-2 py-8">
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div className="">
                <img className='w-full' src={bgImg} alt="/"/>
            </div>
            <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
                <p className=' font-bold text-indigo-800 '>Data Services</p>
                <div className="flex justify-between flex-wrap px-4">
                    <p className='flex px-4 py-2 text-indigo-800'><FaCloudArrowUp className='h-6 text-indigo-600 mr-3' /> App Security</p>
                    <p className='flex px-4 py-2 text-indigo-800'><CiDatabase className='h-6 text-indigo-600 mr-3' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-indigo-800'><CiServer className='h-6 text-indigo-600 mr-3' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-indigo-800'><GoPaperAirplane className='h-6 text-indigo-600 mr-3' /> API Status</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero