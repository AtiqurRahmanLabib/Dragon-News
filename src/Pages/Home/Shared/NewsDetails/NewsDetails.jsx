import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import RightSidebar from '../RightSidebar';
import Navbar from '../Navbar';

const NewsDetails = () => {
    const { _id, title } = useParams();

    console.log(_id)
    return (
        <div className='w-[1140px] mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto mt-9'>
                <div className='col-span-3'>
                    <h1 className='font-semibold font-poppins text-[20px] text-[#403F3F]'>Dragon News</h1>
                    <h1>{_id}</h1>
                    <h1>{title}</h1>
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;