import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';


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
      <div>
        <Navbar />
        <div className="content grid grid-cols-4 h-[100vh] overflow-y-auto overflow-x-hidden relative  ">
          <div className="ImgDiv col-span-2 h-max sticky top-0 overflow-auto ">
            <img src="../src/assets/category/fresh/left colum.svg" alt="Left Column" />
            <h1 className="absolute top-56 left-32  text-white text-6xl font-medium">Fresh Flowers</h1>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2">
              {FreshFlowersData.map((curr, index) => {
                return (
                  <div key={index} className="relative flex justify-center h-[312px] w-[314px] overflow-hidden">
                    <img src={curr.path} alt={curr.name} className="hover:scale-110 transition-all duration-500 ease-in-out  h-full w-full object-cover " />
                    <h1 className="absolute bottom-8 font-Gilroy font-semibold">
                      {curr.name}
                    </h1>
                    <p className="absolute bottom-4 font-Gilroy font-semibold text-[#808080] text-xs">
                      {`Price ${curr.price}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  

export default FreshFlowers
