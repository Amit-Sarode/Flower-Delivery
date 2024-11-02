import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    const navItems = [
        {
            name: ["Shop", "Shop"],
            path: "/category",
        },
        {
            name: ["About Us", "About Us"],
            path: "/about",
        },
        {
            name: ["Sign in", "Sign in"],
            path: "/SignIn",
        },
        {
            name: ["Cart", "Cart"],
            path: "/cart",
        },
    ];

    navItems[0] = location.pathname.includes("category")
        ? { name: ["Home", "Home"], path: "/" } :
        { name: ["Shop", "Shop"], path: "/category" }


    const handleText = (item, index) => {
        if (index === 0 && item.path !== location.pathname) {
            return item.name[0];
        }
        return item.name[0];
    };

    return (
        <div className='sticky top-0 z-50 bg-white flex justify-between h-[83px] w-[100%] border border-[#121212] font-Gilroy font-semibold'>
            <div className='flex w-[360px]'>
                {navItems.slice(0, 2).map((item, index) => (
                    <NavLink
                        className='main flex w-[180px] h-[83px] items-center justify-center border-r border-[#121212]'
                        key={index}
                        to={item.path}
                    >
                        <span className='one'>{handleText(item, index)}</span>
                        <span className='two'>{item.name[1]}</span>
                    </NavLink>
                ))}
            </div>
            <div className='w-full h-[83px] border border-[#121212]'></div>
            <div className='flex w-[360px]'>
                {navItems.slice(2).map((item, index) => (
                    <NavLink
                        className='main border-l border-[#121212] flex justify-center items-center w-[180px] h-[83px]'
                        key={index}
                        to={item.path}
                    >
                        <span className='one'>{item.name[0]}</span>
                        <span className='two'>{item.name[1]}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
