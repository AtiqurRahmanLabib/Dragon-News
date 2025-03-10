import React from 'react';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';
import Marquee from "react-fast-marquee";
import LeftSidebar from './Shared/LeftSidebar';
import RightSidebar from './Shared/RightSidebar';
import { useLoaderData } from 'react-router-dom';
import Anews from './Shared/News/Anews';

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div className='w-[1140px] mx-auto'>
            <Header></Header>

            <div className='w-[1140px] h-[80px] bg-[#F3F3F3] mt-5 content-center items-center flex p-3'>

                <button className='w-[110px] h-[48px] bg-[#D72050]  text-[20px] text-[#FFFFFF] font-medium font-poppins'>Latest</button>

                <Marquee>
                    <h1 className='font-poppins font-semibold text-[18px] text-[#403F3F]'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1>
                </Marquee>

            </div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto mt-5'>
                <div className=''>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='col-span-2'>
                    <h1 className='font-semibold font-poppins text-[20px] text-[#403F3F]'>Dragon News Home</h1>
                    <div className='mx-auto'>
                        {
                            news.map(aNews => <Anews
                            key={aNews._id}
                            aNews={aNews}
                            ></Anews>)
                        }
                    </div>
                </div>
                <div className=''>
                    <RightSidebar></RightSidebar>
                </div>
            </div>

        </div>
    );
};

export default Home;