import React, { useRef } from 'react'
import ProductCard from './Product';
import serviceSvg2 from '../assets/Home/Service2Section.svg';
import serviceSvg1 from '../assets/Home/image-service-1.svg';
import freshFlowersImage from '../assets/Home/card item-2.svg';
import driedFlowersImage from '../assets/Home/card item.svg';
import livePlantsImage from '../assets/Home/card item-3.svg';
import aromaCandlesImage from '../assets/Home/card item-1.svg';
import freshenersImage from '../assets/Home/card item-4.svg';
import right from '../assets/Home/Right colum.svg'
import hero from '../assets/Home/img hero.svg'
import { Link } from 'react-router-dom'
import { PiPhoneCallFill, PiTelegramLogoBold } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import './Navbar.css'
function Home() {
    return (
        <>
            {/* top section */}
            <div className='h-[283.2vh]'>
                <div className='sticky top-20  page1 w-[50%] p-20 flex flex-col gap-10 float-left'>
                    <div className='text-[65px] font-Gilroy font-[900] tracking-wider w-[50%]'>
                        <h1>Kyiv</h1>
                        <h1>LuxeBouquets
                            <sup className='text-[43px]'>®</sup>
                        </h1>
                    </div>
                    <div>
                        <p className='text-wrap text-[18px] font-Gilroy'>
                            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
                        </p>
                    </div>
                    <div className='border-b border-slate-950'></div>

                    {/* bottom section */}

                    <div className='flex gap-7'>
                        <img className='h-[236px] w-[189px] block' src={hero}></img>
                        <div className='border-l border-slate-950'></div>
                        <p className='text-wrap text-[14px] font-Gilroy font-[550] float-end '>
                            Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
                        </p>
                    </div>
                </div>
                {/* page2 */}
                <div className=' h-[100vh] page2 w-[50%] float-right font-Gilroy'>
                    <ProductCard path="#" title="Fresh Flowers" imageSrc={freshFlowersImage} />
                    <ProductCard path="#" title="Dried Flowers" imageSrc={driedFlowersImage} />
                    <ProductCard path="#" title="Live Plants" imageSrc={livePlantsImage} />
                    <ProductCard path="#" title="Aroma Candles" imageSrc={aromaCandlesImage} />
                    <ProductCard path="#" title="Fresheners" imageSrc={freshenersImage} />
                </div>
            </div>

            <div className='h-[80vh] border  border-gray-950 p-20 ' >
                {/* page3 */}
                <div className='sticky top-28  page3 w-[50%]  float-left font-Gilroy'>
                    <h1 className='text-5xl font-[600] tracking-widest'>About us</h1>
                </div>
                {/* page4 */}
                <div className='page4 w-[50%] float-right font-Gilroy  tracking-wide pt-0 pl-16 text-wrap border-l border-gray-950'>
                    <h4>our story</h4>
                    <h2 className='font-bold text-2xl'>Kyiv LuxeBouquets</h2>
                    <p className='text-wrap '>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.

                    </p>
                    <button className='uppercase font-[500] text-xl border border-slate-950 px-5 py-2 hover:bg-black hover:text-white ease-linear duration-300'>Learn More</button>
                </div>
            </div>
            <div className='h-[205vh] border border-gray-950'>
                {/* page5 */}
                <div className=' sticky top-28 page5 w-[50%] p-20 float-left '>
                    <h1 className='text-5xl font-[600] tracking-widest'>Why choose us ?</h1>
                </div>
                {/* page6 */}
                <div className='page6 w-[50%] float-right  font-gilroy'>
                    <div className='p-20 border border-gray-950 flex flex-col   gap-3'>
                        <h2 className='usblock text-3xl font-[400] '>Stylish bouquets by florists</h2>
                        <p className='usblock'>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
                    </div>
                    <div className=' p-20 border border-gray-950 flex flex-col  gap-3'>
                        <h2 className='usblock text-3xl font-[400] '>On-time delivery</h2>
                        <p className='usblock'>Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
                    </div>
                    <div className='p-20 border border-gray-950 flex flex-col  gap-3'>
                        <h2 className='usblock text-3xl font-[400]'>
                            Safe payment
                        </h2>
                        <p className=' usblock leading-4'>You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
                    </div>
                    <div className='p-[52px] border border-gray-950'>
                        <h2 className='usblock text-3xl font-[400] '>Subscription by your needs</h2>
                        <p className='usblock'>
                            With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.
                        </p>
                    </div>
                </div>
            </div >
            {/* page7 */}
            < div className='h-[100vh] w-[50%] float-left' >
                <div>
                    <h1>Let's Talk</h1>
                    <p>Enter your number and we'll call you back ASAP to help you with any questions or to place an order</p>
                    <input type="tel" placeholder='+91 XX XX XX XX XX' className='border border-slate-950 p-2'></input>
                    <button className='uppercase font-[500] text-xl border border-slate-950 px-5 py-2 hover:bg-black hover:text-white ease-linear duration-300'>Reach us</button>
                </div>
                <div>
                    <div>
                        <h1>Phone</h1>
                        <span><PiPhoneCallFill />
                            +380980099777</span>
                        <span><PiPhoneCallFill />
                            +380980099111</span>
                    </div>
                    <div>
                        <h1>Address</h1>
                        <span>opening hours: 8 to 11 p.m.15/4 Khreshchatyk Street, Kyiv</span>
                    </div>
                </div>
            </div >

            <div className='float-right h-[100vh] w-[50%] '>
                <img className='object-cover h-[90vh] w-full' src={right} alt="Right Section Background" />

                {/* Icon and Follow Us Container */}
                <div className='h-[10vh] flex items-center justify-center space-y-4 border border-gray-950 '>
                    <h1 className='text-3xl font-[500] w-[50%] h-full flex items-center justify-center border-r border-gray-950'>Follow us</h1>
                    <div className='flex space-x-4 w-[50%] items-center justify-center'>
                        <Link to={'#'}>
                            <FaInstagram size={24} />
                        </Link>
                        <Link to={'#'}>
                            <RiPinterestLine size={24} />
                        </Link>
                        <Link to={'#'}>
                            <FiFacebook size={24} />
                        </Link>
                        <Link to={'#'}>
                            <FiTwitter size={24} />
                        </Link>
                        <Link to={'#'}>
                            <PiTelegramLogoBold size={24} />
                        </Link>
                    </div>
                </div>
            </div>


            {/* page9 */}
            < div className='h-[40vh] w-[100%] border border-gray-950 flex items-center justify-center' >
                <h1 className='text-7xl font-Gilroy font-[600]'>Our Service</h1>
            </div >

            <div className='w-[100%] '>
                <div className='h-[100vh] w-[50%] float-left '>
                    <img className='h-full w-full transition-transform object-fit duration-200 ease-linear' src={serviceSvg1}></img>
                </div>
                <div className='w-[50%] float-right flex flex-col p-20 justify-center items-center font-Gilroy gap-5' >
                    <h3 className='usblock font-[600] text-2xl tracking-wide'>service</h3>
                    <h1 className='usblock font-[900] text-4xl tracking-widest'>Flower Subcriptions</h1>
                    <p className='usblock text-wrap'>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                    <button className='usblock uppercase font-[500] text-l border border-slate-950 px-5 py-2 hover:bg-black hover:text-white ease-linear duration-300 '>Subscribe Now</button>

                </div>

            </div>
            {/* page10 */}
            <div className='h-[100vh] w-[100%] flex text-[#fff] justify-center items-center font-Gilroy'>
                <img className='z-0 absolute' src={serviceSvg2} alt="Service Section" />
                <div className='relative z-10 text-wrap w-[60%] flex flex-col justify-center items-center'>
                    <h3 className='usblock'>service</h3>
                    <h1 className='usblock text-6xl font-[900]'>Wedding & Event Decor</h1>
                    <p className='usblock'>
                        Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                    <button className='usblock uppercase font-[500] text-xl border border-slate-white px-5 py-2 hover:bg-white hover:text-black duration-300 ease-linear'>Inquire Now</button>
                </div>
            </div>
        </>
    )
}

export default Home
