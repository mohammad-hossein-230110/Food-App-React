 
 import React,{useState} from 'react';
 import {AiOutlineClose, AiOutlineMenu,AiOutlineSearch , AiFillTag} from 'react-icons/ai';
 import {BsFillCartFill ,BsFillSaveFill} from 'react-icons/bs'; 
 import {TbTruckDelivery} from 'react-icons/tb';
 import {FaUserFriends ,FaWallet} from 'react-icons/fa'
 import {MdFavorite,MdHelp} from 'react-icons/md';
 


 const Navbar = () => {

   const[nav,setNav] = useState(false);
 
   return (
     <div className=" max-w-[1640px] flex items-center justify-between mx-auto p-4">
        {/* Left Side  */}
       <div className="flex items-center ">
           <div onClick={()=>setNav(!nav)} className=" cursor-pointer">
           <AiOutlineMenu size={30}/>
           </div>
           <h1 className="text-2xl sm:text-3xl lg:text-4xl  px-2">
                Best <span className="font-bold">Eats</span>
           </h1>
           <div className=" hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
               <p className="bg-black text-white p-2 rounded-full">Delivery</p>
               <p className="p-2">Pickup</p>
           </div>
       </div>
       {/* Search Input */}

       <div className=' bg-gray-200 flex items-center rounded-full px-2
                          '>
          <AiOutlineSearch size={25}/>
          <input  className=" w-[150px] sm:w-[400px] lg:w-[500px] p-2 bg-transparent focus:outline-none" type='search' placeholder='Search foods'></input>
       </div>

       {/* Cart Button */}
        
        <button className="bg-black text-white rounded-full  px-4 hidden md:flex items-center py-2">
             <BsFillCartFill size={20} className='mr-2 cursor-pointer'/>Cart
        </button>

       {/* Mobile Menu */}
       {/* Overlay */}
       { nav ?  <div className=' bg-black/80 w-full h-screen z-10 top-0 left-0 fixed'>
       </div> : ''}
      

       {/* Side Drawer Menu */}
              <div className={ nav ? "z-10 fixed top-0 left-0 w-[300px] h-screen bg-white duration-300" : 
                                     "z-10 fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-500" }>
                   <AiOutlineClose onClick={()=>setNav(!nav)} size={25} className=' right-4 top-4 absolute cursor-pointer'/>
                    <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                    <nav className=' container'>
                       <ul className='felx flex-col p-4 text-gray-800'>

                            <li className='py-4  flex text-[18px] items-center gap-2'>
                              <TbTruckDelivery size={25}/>Orders</li>
                            <li className='py-4   flex text-[18px]  items-center gap-2'>
                              <MdFavorite size={25}/>Favorites</li>
                            <li className='py-4   flex text-[18px]  items-center gap-2'>
                              <FaWallet size={25}/>Wallet</li>
                            <li className='py-4   flex text-[18px]  items-center gap-2'>
                              <MdHelp size={25}/>Help  </li>
                            <li className='py-4  flex text-[18px]  items-center gap-2'>
                              <AiFillTag size={25}/>Promotions</li>
                            <li className='py-4   flex text-[18px]  items-center gap-2'>
                              <BsFillSaveFill size={25}/>Best Ones</li>
                            <li className='py-4   flex text-[18px]  items-center gap-2'>
                              <FaUserFriends size={25}/>Invite Friends</li>
                              
                       </ul>
                    </nav>
              </div>
     </div>
   )
 }
 
 export default Navbar
 