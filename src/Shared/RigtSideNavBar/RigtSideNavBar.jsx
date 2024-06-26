import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { SiFacebook } from 'react-icons/si';
import Qzonep1 from '../../assets/Images/qZone1.png';
import Qzonep2 from '../../assets/Images/qZone2.png';
import Qzonep3 from '../../assets/Images/qZone3.png';

const RightSideNavBar = () => {
  return (
    <div>
      <div>
        <h1 className="text-[#403F3F] text-[20px] font-poppins font-semibold">Login With</h1>

        <div className="flex border-[2px] mt-7 rounded-2xl">
          <button className="w-full h-10 text-blue-900 flex pl-[68px] items-center hover:bg-blue-600 rounded-2xl hover:text-white">
            <FaGoogle className="mr-2" />
            Login With Google
          </button>
        </div>

        <div className="flex border-[2px] mt-7 rounded-2xl">
          <button className="w-full h-10 text-black flex pl-[68px] items-center hover:bg-white rounded-2xl hover:text-black">
            <FaGithub className="mr-2" />
            Login With GitHub
          </button>
        </div>
      </div>

      <div className="mt-11">
        <h1 className="text-[#403F3F] text-[20px] font-poppins font-semibold mb-3">Find Us on</h1>
        <div className="border-[3px] rounded-t-md rounded-b-md">
          <a className="flex items-center gap-3 text-[16px] font-poppins font-medium p-3" href="#">
            <SiFacebook />
            Facebook
          </a>
          <hr />
          <a className="flex items-center gap-3 text-[16px] font-poppins font-medium p-3" href="#">
            <FaTwitter />
            Twitter
          </a>
          <hr />
          <a className="flex items-center gap-3 text-[16px] font-poppins font-medium p-3" href="#">
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>

      <div className="bg-[#F3F3F3] w-full mt-6 h-auto">
        <h1 className="text-[#403F3F] font-semibold text-[20px] font-poppins pt-2 pl-2">Q-Zone</h1>
        <div className="mt-4 p-4 space-y-4 ">
          <img src={Qzonep1} alt="Qzone 1" />
          <img src={Qzonep2} alt="Qzone 2" />
          <img src={Qzonep3} alt="Qzone 3" />
        </div>
      </div>

      <div className="bg-custom-image h-[510px] w-full bg-cover bg-center flex items-center justify-center mt-6">

        <div className="grid grid-cols-1 text-center">
        <h1 className="text-[] text-[30px] font-bold">Create an 
            <br />
            Amazing 
            <br />
            Newspaper</h1>
        <p className="text-[16px] text-[#FFFFFF] font-poppins mt-4">Discover thousands of <br />options, easy to <br /> customize layouts, one- <br />click to import demo <br /> and much more.</p>
        <button className="bg-[#D72050] w-[110px] h-[48px] text-[#FFFFFF] mx-auto mt-4">Learn More</button>

        </div>
      </div>
    </div>
  );
};

export default RightSideNavBar;
