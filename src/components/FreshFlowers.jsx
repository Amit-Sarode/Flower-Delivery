import React from 'react'
import Navbar from './Navbar'


const FreshFlowersData = [
    {
        name:"Snowfall",
        path:"../src/assets/category/fresh/card item.svg",
        price:"$58"
    },
    {
        name:"Blue Harmony",
        path:"../src/assets/category/fresh/card item2.svg",
        price:"$58"
    },
    {
        name:"Rosy Delight",
        path:"../src/assets/category/fresh/card item3.svg",
        price:"$58"
    },
    {
        name:"Dawn's Delight",
        path:"../src/assets/category/fresh/card item4.svg",
        price:"$58"
    },
    {
        name:"Serenity",
        path:"../src/assets/category/fresh/card item5.svg",
        price:"$58"
    },
    {
        name:"Autumn Symphony",
        path:"../src/assets/category/fresh/card item6.svg",
        price:"$58"
    },
    {
        name:"Rustic Charm",
        path:"../src/assets/category/fresh/card item7.svg",
        price:"$58"
    },
    {
        name:"Pink Elegance",
        path:"../src/assets/category/fresh/card item8.svg",
        price:"$58"
    },
    {
        name:"Mistical majesty",
        path:"../src/assets/category/fresh/card item9.svg",
        price:"$58"
    },
    {
        name:"Blazing BLossoms",
        path:"../src/assets/category/fresh/card item10.svg",
        price:"$58"
    }
]

function FreshFlowers() {
  return (
    <div >
      <Navbar/>
      <div className='content grid grid-cols-4 h-[100vh] '>
        <div className='ImgDiv col-span-2 h-max'>
            <img src="../src/assets/category/fresh/left colum.svg" alt="" />
        </div>
        <div className='col-span-2' >
            <div className='grid grid-cols-2'>
                {
                    FreshFlowersData.map((curr,index)=>{
                        return(
                            <div key={index} className='relative flex justify-center h-max w-full '>
                                <img src={curr.path} alt="" className='hover:'  />
                                <h1 className='absolute bottom-8 font-Gilroy font-semibold '>{curr.name}</h1>
                                <p className='absolute bottom-4 font-Gilroy font-semibold text-[#808080] text-xs'>{`Price ${curr.price}`}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default FreshFlowers
