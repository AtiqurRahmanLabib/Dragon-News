import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Qzone1 from "../../../assets/swimming.png"
import Qzone2 from "../../../assets/class.png"
import Qzone3 from "../../../assets/playground.png"
import bg from "../../../assets/bg.png"


const RightSidebar = () => {
    return (
        <div>
            <h1 className='text-[20px] font-poppins font-semibold text-[#403F3F]'>Login With</h1>
            <div className='mx-auto'>
                <div className='px-auto mt-5 justify-items-center'>
                    <button className='text-[#706F6F] text-center justify-center text-[16px] font-medium font-poppins w-[261px] h-[40px] border border-blue-400 flex items-center gap-2 rounded-[8px]'>
                        <FcGoogle className='text-2xl'></FcGoogle>
                        Login With Google
                    </button>
                    <button className='text-[#706F6F] text-center justify-center text-[16px] font-medium font-poppins w-[261px] h-[40px] border border-[#000000] flex items-center gap-2 rounded-[8px] mt-2'>
                        <FaGithub className='text-2xl'></FaGithub>
                        Login With Github
                    </button>
                </div>
                <div>
                    <h1 className='text-[20px] font-poppins font-semibold text-[#403F3F] mt-5'>
                        Find Us On
                    </h1>
                    <div className='grid w-[267px] h-[190px] mt-2 mx-auto'>
                        <div className='flex items-center border-t border-x gap-2 pl-5 border-[#E7E7E7] rounded-t-[5px]'>
                            <FaFacebook className='text-2xl text-blue-700'></FaFacebook>
                            <a className='' href="www.facebook.com">Facebook</a>
                        </div>
                        <div className='flex items-center border gap-2 pl-5 border-[#E7E7E7]'>
                            <FaTwitter className='text-2xl text-[#58A7DE]'></FaTwitter>
                            <a className='' href="">Twitter</a>
                        </div>
                        <div className='flex items-center border-x gap-2 pl-5 border-[#E7E7E7] rounded-b-[5px]'>
                            <FaInstagram className='text-2xl text-pink-400'></FaInstagram>
                            <a className='' href="">Instagram</a>
                        </div>
                    </div>
                    <div className='w-[267px] bg-[#F3F3F3] mx-auto mt-5'>
                        <h1 className='font-poppins font-semibold text-[20px] text-[#403F3F] pt-2 pl-2'>Q-Zone</h1>
                        <div className='mt-2'>
                            <img src={Qzone1} alt="" />
                            <img src={Qzone2} alt="" />
                            <img src={Qzone3} alt="" />
                        </div>
                    </div>
                    <div className='mt-5 mx-auto'>
                        <img src={bg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;