import React from 'react'
import Navbar from '../Navbar'
import data from '../../assets/data.json'


function Dried() {
    const DriedData = data.DriedFlowers
    const bg = data.bg.bgDried
    return (
        <div className="h-full flex">
            {/* Left side image section */}
            <div className="w-1/2 h-screen sticky top-0">
                <img className="h-full w-full object-cover" src={bg} alt="background" />
            </div>

            <div className="w-1/2  grid grid-cols-2 overflow-y-auto">
                {DriedData.map((curr, index) => (
                    <div key={index} className="relative flex flex-col items-center h-auto overflow-hidden border border-gray-200 p-4 rounded-lg shadow-md">
                        <img
                            src={curr.path}
                            alt={curr.name}
                            className="w-full h-64 object-cover transition-transform duration-200 ease-linear hover:scale-110"
                        />
                        <h1 className="mt-4 font-Gilroy font-semibold text-lg">{curr.name}</h1>
                        <p className="text-[#808080] font-Gilroy font-medium text-sm">{`Price: ${curr.price}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dried
