import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Shared/Navbar';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDeffault()
    }
    return (
        <div>
            <div className="w-[1140px]  mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="mt-10 ">
                <div className="w-[752px] h-[781px] bg-[#FFFFFF] shadow-2xl mx-auto">
                    <h1 className="text-center pt-9 text-[#403F3F] text-[35px] font-semibold font-poppins">Register your account</h1>
                    <hr className="w-[606px] border-[#E7E7E7] mx-auto mt-9" />
                    <div className="w-[559px] h-[349px] rounded-[5px] mx-auto mt-9">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="Name" className="text-[#403F3F] font-semibold text-[20px] font-poppins">Your Name</label>
                                <input className="w-[558px] h-[65px] bg-[#F3F3F3] rounded-[5px] text-[16px] text-[#9F9F9F] p-5 mt-2"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name" />
                            </div>

                            <div className="mt-2">
                                <label htmlFor="photoUrl" className="text-[#403F3F] font-semibold text-[20px] font-poppins ">Photo URL</label>
                                <input className="w-[558px] h-[65px] bg-[#F3F3F3] rounded-[5px] text-[16px] text-[#9F9F9F] p-5 mt-2"
                                    type="text"
                                    placeholder="Enter your photo url"
                                    name="Photo" />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="Email" className="text-[#403F3F] font-semibold text-[20px] font-poppins ">Email</label>
                                <input className="w-[558px] h-[65px] bg-[#F3F3F3] rounded-[5px] text-[16px] text-[#9F9F9F] p-5 mt-2"
                                    type="email"
                                    placeholder="Enter your email "
                                    name="eamil" />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="Password" className="text-[#403F3F] font-semibold text-[20px] font-poppins ">Password</label>
                                <input className="w-[558px] h-[65px] bg-[#F3F3F3] rounded-[5px] text-[16px] text-[#9F9F9F] p-5 mt-2"
                                    type="password"
                                    placeholder="Enter your email password"
                                    name="password" />
                            </div>
                            
                                <div className='mt-5'>
                                <input type="checkbox" name="terms" id="" />
                                <label className='ml-2 text-[#706F6F] text-[16px] font-poppins' htmlFor="terms">Accept Term & Conditions</label>
                                </div>
                            
                            <button className="w-[558px] h-[65px] bg-[#403F3F]  mt-5 rounded-[5px] text-[20px] font-semibold font-poppins text-[#FFFFFF]" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;