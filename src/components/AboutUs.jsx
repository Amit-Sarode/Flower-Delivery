import React from 'react'
import { Link } from 'react-router-dom'
import { PiTelegramLogoBold } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import hero from '../../src/assets/about/Hero img.svg'
import card1 from '../../src/assets/about/Rectangle 74.svg'
import card2 from '../../src/assets/about/Rectangle 75.svg'
import card3 from '../../src/assets/about/Rectangle 76.svg'

function AboutUs() {
    return (<>
        <div className='flex '>
            <div className='w-[50%] flex flex-col items-center p-16 gap-5 border border-slate-950'>
                <h1 className='font-Gilroy font-[900] text-5xl ' >Our Story</h1>
                <h3 className='font-Zapfino text-6xl'>About</h3>
                <h1 className='font-Gilroy font-[900] text-5xl'>
                    Kyiv LuxeBouquets
                </h1>
                <p className='text-wrap flex'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                <div className='flex gap-8 text-2xl pt-16'>
                    <Link to={'#'} className='border border-slate-950 rounded-full p-3'>
                        <FaInstagram />
                    </Link>
                    <Link to={'#'} className='border border-slate-950 rounded-full p-3'>
                        <RiPinterestLine />
                    </Link>
                    <Link to={'#'} className='border border-slate-950 rounded-full p-3'>
                        <FiFacebook />
                    </Link>
                    <Link to={'#'} className='border border-slate-950 rounded-full p-3'>
                        <FiTwitter />
                    </Link>
                    <Link to={'#'} className='border border-slate-950 rounded-full p-3'>
                        < PiTelegramLogoBold />
                    </Link>
                </div>
            </div>
            <img className='w-[50%] h-[100vh] border border-slate-950 object-cover' src={hero} alt='kyiv'>
            </img>
        </div>
        {/* page2 */}
        <div className='flex flex-col justify-center items-center p-16 gap-5 border border-slate-950 h-[65vh]'>
            <h3 className='text-2xl font-Gilroy'>About Us
            </h3>
            <h1 className='text-4xl font-[500] font-sans'>Our Founder's Passion
            </h1>
            <p className='text-wrap w-[60%] font-Gilroy'>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
        </div>
        {/* page3 */}
        <div className='h-[90vh]'>
            <img className='w-[50%] float-left h-full object-cover' src={card1} alt=''></img>
            <div className='w-[50%] float-right flex flex-col justify-center items-center p-20 gap-8'>
                <h1 className='text-4xl font-[400] font-sans'>Expertly Crafted Bouquets</h1>
                <p className='text-wrap w-[90%] font-Gilroy'>At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
            </div>
        </div>
        <div className='h-[90vh]'>
            <img className='w-[50%] float-right h-full object-cover' src={card2} alt=''></img>
            <div className='w-[50%] float-left flex flex-col justify-center items-center p-20 gap-8'>
                <h1 className='text-4xl font-[400] font-sans'>Bouquets, Gifts & Ambiance</h1>
                <p className='text-wrap w-[90%] font-Gilroy'>In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.</p>
            </div>
        </div>
        <div className='h-[90vh]'>
            <img className='w-[50%] float-left h-full object-cover' src={card3} alt=''></img>
            <div className='w-[50%] float-right flex flex-col justify-center items-center p-20 gap-8'>
                <h1 className='text-4xl font-[400] font-sans'>Making Every Day Special</h1>
                <p className='text-wrap w-[90%] font-Gilroy'>Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.</p>
            </div>
        </div>

    </>

    )
}

export default AboutUs
