import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="mt-5">
            <div className="text-center">
                <img className="w-[471px] mx-auto" src={logo} alt="" />
                <h2 className="font-poppins text-[#706F6F] text-[18px] mt-2">Journalism Without Fear or Favour</h2>
                
                <p className="text-[20px] font-medium font-poppins text-[#706F6F] mt-1">{moment().format('dddd, MMMM DD, YYYY')}</p>
                
            </div>
        </div>
    );
};

export default Header;