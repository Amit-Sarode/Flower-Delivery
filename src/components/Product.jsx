import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductCard({ title, imageSrc, path, buttonText = "Shop now" }) {
    return (
        <div className='flex border border-slate-950'>
            <div className='w-[50%] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-[700] tracking-wide'>{title}</h1>
                <Link to={path}>
                    <button className='flex items-center font-bold'>
                        {buttonText}
                        <div className='text-3xl'><IoIosArrowRoundForward /></div>
                    </button>
                </Link>
            </div>
            <div>
                <img src={imageSrc} alt={`${title} image`} className='' />
            </div>
        </div>
    );
}

export default ProductCard;
