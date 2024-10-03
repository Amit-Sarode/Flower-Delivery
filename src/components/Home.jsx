import React, { useRef } from 'react'
import './Home.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import { PiPhoneCallFill, PiTelegramLogoBold } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import ProductCard from './Product';



function Home() {
    const page1 = useRef(null)
    useGSAP(
        () => {

            gsap.from('.page1', { y: 360 });
        },
        {}
    );



    return (
        <>
            <Navbar />
            {/* top section */}
            <div useRef className=' page1 w-[50%] p-20 flex flex-col gap-10 float-left'>
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
                    <img className='h-[236px] w-[189px] block' src='public/assets/img hero.svg'></img>
                    <div className='border-l border-slate-950'></div>
                    <p className='text-wrap text-[14px] font-Gilroy font-[550] float-end '>
                        Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
                    </p>
                </div>
            </div>

            {/* page2 */}

            <div className='page2 w-[50%] float-right font-Gilroy'>
                <ProductCard path="#" title="Fresh Flowers" imageSrc='public/assets/card item-2.svg' />
                <ProductCard path="#" title="Dried Flowers" imageSrc='public/assets/card item.svg' />
                <ProductCard path="#" title="Live Plants" imageSrc='public/assets/card item-3.svg' />
                <ProductCard path="#" title="Aroma Candles" imageSrc='public/assets/card item-1.svg' />
                <ProductCard path="#" title="Fresheners" imageSrc='public/assets/card item-4.svg' />
            </div>

            {/* page3 */}

            <div className='page3 w-[50%] p-20 float-left'>
                <h1>About us</h1>
            </div>
            {/* page4 */}
            <div className='page4 w-[50%] float-right p-20 font-Gilroy'>
                <h4>our story</h4>
                <h2 className='font-bold text-2xl'>Kyiv LuxeBouquets</h2>
                <p className='text-wrap'>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.

                </p>
                <button className='uppercase font-[500] text-xl border border-slate-950 px-5 py-2 hover:bg-black hover:text-white'>Learn More</button>
            </div>
            {/* page5 */}
            <div className='page5 w-[50%] p-20 float-left'>
                <h1>Why choose us ?</h1>
            </div>
            <div className='text-wrap page6 w-[50%] float-right'>
                <div>
                    <h2>Stylish bouquets by florists</h2>
                    <p>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
                </div>
                <div>
                    <h2>On-time delivery</h2>
                    <p>Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
                </div>
                <div>
                    <h2>
                        Safe payment
                    </h2>
                    <p>You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
                </div>
                <div>
                    <h2>Subscription by your needs</h2>
                    <p>
                        With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.
                    </p>
                </div>
            </div>
            {/* page7 */}
            <div>
                <div>
                    <h1>Let's Talk</h1>
                    <p>Enter your number and we'll call you back ASAP to help you with any questions or to place an order</p>
                    <input type="tel" placeholder='+91 XX XX XX XX XX' className='border border-slate-950 p-2'></input>
                    <button className='uppercase font-[500] text-xl border border-slate-950 px-5 py-2 hover:bg-black hover:text-white'>Reach us</button>
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
            </div>
            {/* page8 */}
            <div>
                <div>
                    <img src='public/assets/Right colum.svg'></img>
                </div>
                <div>
                    <h1>Follow us</h1>
                    <div>
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
            {/* page9 */}
            <div>
                <h1>Our Service</h1>
            </div>
            <div>
                <img src='public/assets/image-service-1.svg'></img>
                <div>
                    <h3>service</h3>
                    <h1>Flower Subcriptions</h1>
                    <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                    <button className='uppercase font-[500] text-xl border border-slate-950 px-5 py-2 hover:bg-black hover:text-white'>Subscribe Now</button>
                </div>
            </div>

            {/* page10 */}
            <div>
                <img src='public/assets/Service2Section.svg'></img>
                <h3>service</h3>
                <h1>Wedding & Event Decor</h1>
                <p>
                    Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                <button>Inquire Now</button>
            </div>
        </>
    )
}

export default Home
