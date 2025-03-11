import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Anews = ({ aNews }) => {
    const { author, title, thumbnail_url, details, _id, rating, total_view } = aNews;
    return (
        <div className='mx-auto mt-2'>
            <div className='card-holder border rounded-[5px] border-[#E7E7E7]'>

                <div className='author-info-holder w-[558px] h-[80px] rounded-b-md bg-[#F3F3F3] mx-auto'>
                    <div className='Avter-date-authorName-holder flex items-center p-3 gap-2 '>
                        <div>
                            {/* author profile */}
                            <img className='w-[40px] h-[40px] rounded-4xl' src={author.img} alt="" />
                        </div>
                        <div className='authorName-publishedDate'>
                            <h1 className='font-poppins font-semibold text-[16px] text-[#403F3F]'>{author.name}</h1>
                            <p className='text-[#706F6F] text-[14px] font-poppins'>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='share-bookmark-holder'>

                    </div>
                </div>

                <div className='title w-[514px] mx-auto mt-2'>
                    <h1 className='text-[20px] text-[#403F3F] font-bold font-poppins'>{title}</h1>
                </div>

                <div className="thumbnail_url w-[518px] h-[262px] flex justify-center items-center bg-gray-200 mt-2 mx-auto">
                    <img className="max-w-full max-h-full object-contain" src={thumbnail_url} alt="Thumbnail" />
                </div>

                <div className='deatails w-[518px] h-[130px] mt-5 mx-auto'>
                    {
                        details.length > 200 ?
                            <p className='text-[16px] text-[#706F6F] font-poppins'>{details.slice(0, 210)} <br /> <Link to={`/newDetails/${_id}`} className='text-orange-400 font-semibold'>Read more</Link></p> : <p>{details}</p>
                    }
                </div>

                <hr className='border-[#E7E7E7] w-[518px] mx-auto' />

                <div className='view&rateHolder flex justify-between w-[518px] mx-auto mt-2 '>
                    <div className='Rating flex items-center gap-2'>
                        <CiStar className='text-1.5xl' />
                        <p className='text-[16px] font-medium text-[#706F6F]'>{rating.number}</p>
                    </div>
                    <div className='totalViews flex items-center gap-2'>
                        <FaEye className='text-1xl' />
                        <p className='text-[16px] font-medium text-[#706F6F]'>{total_view}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Anews;