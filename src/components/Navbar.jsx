import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
    const navItems = [{
        name: ["Shop", "Shop"], path: "/category"
    }, {
        name: ["About Us", "About Us"], path: "/about"
    }, {
        name: ["Sign in", "Sign in"], path: "/signIn"
    }, {
        name: ["Cart", "Cart"], path: "/cart"
    },]

    return (
        <>
            <div className='sticky top-0 z-50 bg-white  flex justify-between h-[83px] w-[100%] border border-[#121212] font-Gilroy font-semibold '>
                <div className='flex w-[360px]'>
                    {navItems.slice(0, 2).map((items, index) => (
                        <Link
                            className='main flex w-[180px] h-[83px] items-center justify-center border-r border-[#121212] '
                            key={index}
                            to={items.path}>
                            <span className='one'>{items.name[0]}</span>
                            <span className='two'>{items.name[1]}</span>
                        </Link >
                    ))}
                </div>
                <div className='w-full h-[83px] boder border-[#121212]'></div>
                <div className='flex w-[360px]'>
                    {navItems.slice(2).map((items, index) => (
                        <Link
                            className='main border-l border-[#121212] flex justify-center items-center w-[180px] h-[83px] '
                            key={index}
                            to={items.path}>
                            <span className='one'>{items.name[0]}</span>
                            <span className='two'>{items.name[1]}</span></Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar


