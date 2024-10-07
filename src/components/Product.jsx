import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import './Navbar.css'

function ProductCard({ title, imageSrc, path, buttonText = "Shop now" }) {
    return (
        <div className='imgContainer flex w-[670px] hover:cursor-pointer'>
            <div className=' flex w-[335px] flex-col justify-center items-center border border-slate-950'>
                <h1 className='text-4xl font-[700] tracking-wide'>{title}</h1>
                <Link to={path} className='flex items-center'>
                    <button className='font-bold hover:border-slate-950 hover:border-b '>
                        {buttonText}
                    </button><div className='arrow text-3xl ease-linear duration-300'><IoIosArrowRoundForward /></div>
                </Link>
            </div>
            <div className='flowerDiv h-full w-[335px] overflow-hidden border border-slate-950'>
                <img className='flowerImg h-full w-[335px]  object-fit duration-200 ease-linear ' src={imageSrc} alt='{title} image'></img>
            </div>
        </div>
    );
}

export default ProductCard;
