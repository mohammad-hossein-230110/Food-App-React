import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {BiLogoTwitter} from 'react-icons/bi'

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 h-[350px] w-full'> 
      <div className="  w-full  text-center">
      <h2 className='text-5xl p-4'>Best <span className='font-bold'>Eats</span></h2>
      <div className=' absolute text-center  h-full max-h-[100px]  my-12
              flex flex-col justify-end items-start'>
                <h1  className='px-4 text-4xl mx-6  font-bold left-0'>The <span  className=' text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl mx-6 mb-10 font-bold left-0'>Foods <span className=' text-orange-600'>Deliverd</span></h1>
       <ul className=' flex flex-row-reverse justify-center items-center gap-4'>
         <li><a href='#TelegramId'><button className=' ml-2 rounded-full bg-white p-2 shadow-lg'><FaTelegramPlane size={25}/></button></a></li>
         <li><a href='#InstagramId'><button className=' ml-2 rounded-full bg-white p-2 shadow-lg'><AiFillInstagram size={25}/></button></a></li>
         <li><a href='LinkedinId'><button className=' ml-2 rounded-full bg-white p-2 shadow-lg'><AiFillLinkedin size={25}/></button></a></li>
         <li><a href='TwitterId'><button className=' ml-10 rounded-full bg-white p-2 shadow-lg'><BiLogoTwitter size={25}/></button></a></li>
      </ul>
        </div> 
      </div>
      <div>
      <ul className=' flex  flex-col justify-center items-end gap-4 pb-8 pr-8'>
         <li><a href="#Contact"  className='text-gray-600 hover:border-b-2 hover:border-gray-800/10 hover:text-gray-800'>Contact Us</a></li>
         <li><a href="#Policy" className='text-gray-600 hover:border-b-2 hover:border-gray-800/10 hover:text-gray-800'> Privacy Policy</a></li>
         <li ><a href="#Faq" className=' text-gray-600 hover:border-b-2 hover:border-gray-800/10 hover:text-gray-800'> Faq</a></li>
         <li ><a href="#About" className=' text-gray-600 hover:border-b-2 hover:border-gray-800/10 hover:text-gray-800' >About</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
