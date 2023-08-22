 

 import React from 'react'

 import img4 from '../Images/img4.jpg'

 const Hero = () => {
   return (
     <div className=' max-w-[1640   px]  mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*Overlay */}
            <div className=' absolute text-center w-full h-full max-h-[500px] text-gray-200
             bg-black/40 flex flex-col justify-center items-start'>
                <h1  className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold left-0'>The <span  className=' text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:tex-5xl md:text-6xl lg:text-7xl font-bold left-0'>Foods <span className=' text-orange-600'>Deliverd</span></h1>
            </div>
            <img className='w-full  max-h-[500px] object-cover' src={img4} alt=''></img>
        </div>
     </div>
   )
 }
 
 export default Hero
 