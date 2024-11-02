import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";


function SignIn() {
    return (
        <div className='w-full h-auto flex justify-center items-center'>

            <form className='signInblock flex flex-col justify-center items-center w-[45%] border border-gray-800 p-10 '>
                <h1 className='text-3xl font-bold'>Greetings! Welcome to luxury gift shop.</h1>
                <label>use your mobile number for log in or sign up</label>
                <input type='tel' placeholder='xx xx xx xx xx' className='mt-4 w-[350px] h-[50px] border border-slate-950 rounded-md' />
                <button className='mt-4 w-[200px] h-[50px] font-bold bg-black text-white border  border-slate-950 rounded-md hover:border-slate-950 hover:border-b hover:bg-white hover:text-black ease-linear duration-200'>Continue</button>
                <p className='mt-4 text-sm'>Don't have an account? <span className='text-blue-500'>Sign Up </span></p>
                <span>instantly login or sign up via Google</span>
                <div className='mt-4 flex gap-5'>
                    <Link className='text-nowrap flex justify-center items-center border border-gray-950 px-2 py-3' to={''}><FcGoogle />
                        continue with google</Link>
                    <Link className='text-nowrap flex justify-center items-center border border-gray-950 px-2 py-3' to={''}><SiApple />
                        continue with apple</Link>
                </div>

            </form>

        </div>
    )
}

export default SignIn
