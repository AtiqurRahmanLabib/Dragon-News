import moment from "moment";
import Marquee from "react-fast-marquee";

import logo from "../../assets/Images/logo.png"

const Header = () => {
    return (
        <div>
            <img className="mx-auto mt-4" src={logo} alt="" />
            <p className="text-[#706F6F] font-poppins text-[18px] text-center mt-1 font">Journalism Without Fear or Favour</p>
            <p className="text-[20px] text-center mt-1 font-poppins font-medium">{moment().format("MMMM D, YYYY,")}</p>
            <div className="bg-[#F3F3F3] w-[1140px] h-[80px] mx-auto px-[30px] py-[16px] mt-4 ">
                <div className="flex">
                    <button className="bg-[#D72050] w-[110px] h-[48px] text-[#FFFFFF]">Latest</button>
                    <Marquee>
                        <p className="text-[#403F3F] font-poppins font-semibold text-[18px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    </Marquee>
                </div>

            </div>
        </div>
    );
};

export default Header;