import React from 'react'
import data from '../../assets/data.json'

function Fresheners() {
    const FreshenersData = data.Fresheners
    const bg = data.bg.bgFreshner
    return (
        <div >
            <div className='content grid grid-cols-4 h-[100vh] '>
                <div className='ImgDiv col-span-2 h-max'>
                    <img src={bg} alt="" />
                </div>
                <div className='col-span-2' >
                    <div className='grid grid-cols-2'>
                        {
                            FreshenersData.map((curr, index) => {
                                return (
                                    <div key={index} className='relative flex justify-center h-max w-full overflow-hidden '>
                                        <img src={curr.path} alt="" className='transition-transform duration-200 ease-linear hover:scale-110' />
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

export default Fresheners
