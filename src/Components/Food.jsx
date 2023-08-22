import {data} from "../data/data.js"

import React,{useState} from 'react'

const Food = () => {

  const[foods,setFoods] = useState(data);


  //filter by category=>pizza/salad/etc

  const filterByCategory = (category) => {
     
   setFoods(
     data.filter((item)=>{
      return item.category === category
     })
   );
  };

   const filterByPrice = (price)=>{

    setFoods(
      data.filter((item)=>{
        return item.price === price
      })
    );

    };

  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12 ">
       <h1 className="font-bold text-4xl text-orange-600 text-center">Top Rated Menu Items</h1>

       {/* filter row  */}
       <div className="flex flex-col justify-between lg:flex-row ">
        {/* filter type */}
        <div className=" flex flex-col ">
            <p className=" mb-2 font-bold text-gray-700">Filter Type</p>
            <div className=" flex gap-6 flex-wrap">
                <button onClick={()=>setFoods(data)} className="m-1 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                <button onClick={()=>filterByCategory('burger')} className="m-1 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
                <button onClick={()=>filterByCategory('pizza')}  className="m-1 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
                <button onClick={()=>filterByCategory('salad')}  className="m-1 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
                <button onClick={()=>filterByCategory('chicken')}  className="m-1 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
            </div>
        </div>
        {/* filter price */}
        <div>
        <p className=" mb-2  font-bold text-gray-700">Filter Price</p>
            <div className=" flex gap-6 max-w-[390px] w-full">
                <button onClick={()=>filterByPrice('$')} className="m-1 mx-2 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
                <button onClick={()=>filterByPrice('$$')} className="m-1 mx-2 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
                <button onClick={()=>filterByPrice('$$$')} className="m-1 mx-2 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
                <button onClick={()=>filterByPrice('$$$$')} className="m-1 mx-2 px-2 py-1 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
            </div>
        </div>
       </div>

    {/* Display foods */}
       <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
         {foods.map((item,index)=>(
          <div key={index} className=" border shadow-lg hover:scale-105 duration-300 rounded-[8px]"> 
            <img className="rounded-t-[8px] w-full h-[200px] object-cover" src={item.image} alt={item.name}></img>
            <div className=" flex justify-between py-4 px-2">
              <h1 className=" font-bold ">{item.name}</h1>
              <p>
                <span className=" bg-orange-600 text-white p-1  rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
            </div>
         ))
         }
       </div>

    </div>
  )
}

export default Food
