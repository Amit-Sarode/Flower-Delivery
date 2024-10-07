import React from 'react'
import { PiTelegramLogoBold } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            {/* section1 */}
            <div>
                <p>
                    Remember to offer beautiful flowers from Kyiv Florist Studio Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
                </p>
                <input type='email' placeholder='Your Email'></input>
                <button className='uppercase font-[500] text-xl border border-slate-950 px-5 py-2 hover:bg-black hover:text-white'>Remind</button>
            </div>
            {/* section2 */}
            <div>
                <h1>Contact Us</h1>
                <h2>Address</h2>
                <div><span>15/4 Khreshchatyk Street, Kyiv</span>
                    <span>15/4 Khreshchatyk Street, Kyiv</span></div>
                <h2>Phone</h2>
                <div>
                    <span>+380980099777</span>
                    <span>+380980099777</span>
                </div>
                <h2>General Enquiry</h2>
                <div>
                    <span>Kiev.Florist.Studio@gmail.com</span>
                    <span>Kiev.Florist.Studio@gmail.com</span>
                </div>
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
            {/* section3 */}
            <div>
                <h1>Shop</h1>
                <div>
                    <span>All Products</span>
                    <span>All Products</span>
                </div>
                <div>
                    <span>Fresh Flowers</span>
                    <span>Fresh Flowers</span>
                </div>
                <div>
                    <span>Dried Flowers</span>
                    <span>Dried Flowers</span>
                </div>
                <div>
                    <span>Live Plants</span>
                    <span>Live Plants</span>
                </div>
                <div>
                    <span>Aroma Candles</span>
                    <span>Aroma Candles</span>
                </div>
                <div>
                    <span>Fresheners</span>
                    <span>Fresheners</span>
                </div>
                <div>
                    <span>All Products</span>
                    <span>All Products</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
