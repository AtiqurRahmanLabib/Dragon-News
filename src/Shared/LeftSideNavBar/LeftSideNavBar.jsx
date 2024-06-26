import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavBar = () => {


    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div>
            <h1 className="text-[#403F3F] text-[20px] font-semibold font-poppins">All Cetogories</h1>
            {
                categories.map(categories => <Link
                    className="block text-[#9F9F9F] text-[20px] font-medium font-poppins  w-full h-[44px] p-2 pl-9 items-start hover:bg-[#E7E7E7] rounded-lg hover:text-black"
                    key={categories.id}
                >{categories.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNavBar;