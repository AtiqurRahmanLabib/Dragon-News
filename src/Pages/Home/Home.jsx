import React from 'react';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';
import LeftSidebar from './Shared/LeftSidebar';
import RightSidebar from './Shared/RightSidebar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className='text-4xl'>Home section</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto w-[1140px]'>
                <div className='border'>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className='border col-span-2'>
                    <h1>News Coming soon</h1>
                </div>
                <div className='border '>
                    <RightSidebar></RightSidebar>
                </div>
            </div>

        </div>
    );
};

export default Home;