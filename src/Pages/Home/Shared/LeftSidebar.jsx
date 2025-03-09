import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [Caterogys, setCaterogy] = useState([])
    useEffect( () => {
        fetch('../../../../public/categories.json')
        .then(res => res.json())
        .then(data => setCaterogy(data))
    } ,[])
    return (
        <div>
            <h1 className='text-[20px]  text-[#403F3F] font-semibold font-poppins'>All Caterogy</h1>
            <div className='mt-2 mx-auto'>
                {
                    Caterogys.map(caterogy => <Link
                    key={caterogy.id}
                    className='block text-[#9F9F9F] text-[20px] font-medium font-poppins pt-1 hover:w-[267px]  hover:h-[64px] hover:bg-[#E7E7E7] hover:rounded-[5px] hover:text-[#403F3F] hover:pt-5 pl-2'
                    >{caterogy.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;