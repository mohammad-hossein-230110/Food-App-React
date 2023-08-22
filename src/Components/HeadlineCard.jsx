
import React from 'react'
import img1card from '../Images/img1-card.avif'
import img2card from '../Images/img2-card.avif'
import img3card from '../Images/img3-card.avif'
const HeadlineCard = () => {
  return (
    <div className=' max-w-[1640px] mx-auto py-12 px-4 
                      grid md:grid-cols-3 gap-6'>
            {/*Card */}
           <div className=' rounded-xl relative'>
            {/*Overlay */}  
               <div className=' absolute bg-black/50 w-full h-full rounded-xl text-white'>
                   <p className=' font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                   <p className='px-2'>Through 8/26</p>
                   <button className=' border-white py-2 px-4 my-4 bottom-4 absolute bg-white text-black rounded-xl mx-2'>Order Now</button>
                </div>              

                <img className=' rounded-xl object-cover max-h-[200px] md:max-h-[300px] w-full' src={img1card} alt=''></img>
           </div>
            {/*Card */}
            <div className=' rounded-xl relative'>
            {/*Overlay */}  
               <div className=' absolute bg-black/50 w-full h-full rounded-xl text-white'>
                   <p className=' font-bold text-2xl px-2 pt-4'>New Resturants</p>
                   <p className='px-2'>Added Daily</p>
                   <button className=' border-white py-2 px-4 my-4 bottom-4 absolute bg-white text-black rounded-xl mx-2'>Order Now</button>
                </div>              

                <img className=' rounded-xl object-cover max-h-[200px] md:max-h-[300px] w-full' src={img2card} alt=''></img>
           </div>
            {/*Card */}
            <div className=' rounded-xl relative'>
            {/*Overlay */}  
               <div className=' absolute bg-black/50 w-full h-full rounded-xl text-white'>
                   <p className=' font-bold text-2xl px-2 pt-4'>We Delivered Desserts</p>
                   <p className='px-2'>Tasty Treats </p>
                   <button className=' border-white py-2 px-4 my-4 bottom-4 absolute bg-white text-black rounded-xl mx-2'>Order Now</button>
                </div>              

                <img className=' rounded-xl object-cover max-h-[200px] md:max-h-[300px] w-full' src={img3card} alt=''></img>
           </div>
    </div>
  ) 
}

export default HeadlineCard
