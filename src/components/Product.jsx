import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductCard({ title, imageSrc, path, buttonText = "Shop now" }) {
    return (
        <div className='flex'>
            <div className='w-[50%] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-[700] tracking-wide'>{title}</h1>
                <Link to={path}>
                    <button className='flex items-center font-bold'>
                        {buttonText}
                        <div className='text-3xl'><IoIosArrowRoundForward /></div>
                    </button>
                </Link>
            </div>
            <div className='h-[360px] w-[360px] overflow-hidden overflow-y-hidden border border-slate-950'>
                <img className='transition-transform h-[360px] w-[360px]  duration-200 ease-linear hover:scale-150' src={imageSrc} alt='{title} image'></img>
            </div>
        </div>
    );
}

export default ProductCard;
