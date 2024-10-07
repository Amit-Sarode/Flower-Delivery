import { PiTelegramLogoBold } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className=' grid grid-cols-4 h-max gap-1 w-full font-Gilroy text-sm'>

            <div className='col-start-1 border-r border-black flex flex-col p-8 gap-5'>
                <p>Remember to offer beautiful flowers from Kyiv Florist Studio Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
                <input type="text" className='w-full border-[1px] border-black p-3 ' placeholder='Your Email' />
                <button className='remind  border-[1px] border-black p-3 bg-black text-white hover:bg-white hover:text-black'>REMIND</button>

            </div>
            <div className='col-start-2 border-r border-black flex flex-col p-8 '>
                <h1 className='text-[#808080] text-lg font-bold capitalize '>Contact us</h1>
                <div className='py-4 gap-1 flex flex-col'>
                    <p className='text-sm text-[#808080]'>Address</p>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>15/4 Khreshchatyk Street, Kyiv</p><p className='add2'>15/4 Khreshchatyk Street, Kyiv</p> </h2>
                </div>

                <div className='py-4 gap-1 flex flex-col'>
                    <p className='text-sm text-[#808080]'>Phone</p>
                    <h2 className='phone text-sm flex  flex-col font-semibold cursor-pointer'> <p className='phone1 text-black'>+380980099777</p><p className='phone2'>+380980099777</p> </h2>
                </div>

                <div className='py-4 gap-1 flex flex-col'>
                    <p className='text-sm text-[#808080]'>General Enquiry:</p>
                    <h2 className='general text-sm flex  flex-col font-semibold cursor-pointer'> <p className='general1 text-black'>Kiev.Florist.Studio@gmail.com</p><p className='general2'>Kiev.Florist.Studio@gmail.com</p> </h2>
                    <div>
                        <h1>Follow Us</h1>
                        <div className='flex'>
                            <Link to={'#'}>
                                <FaInstagram />
                            </Link>
                            <Link to={'#'}>
                                <RiPinterestLine />
                            </Link>
                            <Link to={'#'}>
                                <FiFacebook />
                            </Link>
                            <Link to={'#'}>
                                <FiTwitter />
                            </Link>
                            <Link to={'#'}>
                                < PiTelegramLogoBold />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-start-3 border-r border-black flex flex-col p-8'>
                <h1 className='text-[#808080] text-lg font-bold capitalize mb-4 '>Shop</h1>
                <div className='flex flex-col gap-2'>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>All Product</p><p className='add2'>All Product</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Fresh Flowers</p><p className='add2'>Fresh Flowers</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Dried Flower</p><p className='add2'>Dried Flower</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Live Plants</p><p className='add2'>Live Plants</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Aroma Candles</p><p className='add2'>Aroma Candles</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Fresher Diffuser</p><p className='add2'>Fresher Diffuser</p> </h2>
                </div>
                <h1 className='text-[#808080] text-lg font-bold capitalize my-4 '>Serivce</h1>
                <div className='flex flex-col gap-2'>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Flower Subscription</p><p className='add2'>Flower Subscription</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Wedding & Event Decor</p><p className='add2'>Wedding & Event Decor</p> </h2>
                </div>

            </div>
            <div className='col-start-4  flex flex-col p-8 '>
                <h1 className='text-[#808080] text-lg font-bold capitalize'>About us</h1>
                <div className='flex flex-col gap-2'>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Our Story</p><p className='add2'>Our Story</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer mb-4'> <p className='add1 text-black'>Blog</p><p className='add2'>Blog</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Shipping and return</p><p className='add2'>Shipping and return</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Terms and conditions</p><p className='add2'>Terms and conditions</p> </h2>
                    <h2 className='address text-sm flex  flex-col font-semibold cursor-pointer'> <p className='add1 text-black'>Privacy policy</p><p className='add2'>Privacy policy</p> </h2>
                </div>
            </div>

        </div>
    )
}

export default Footer
