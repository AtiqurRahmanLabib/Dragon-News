import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="mx-auto border">
            <div className="items-center">
                <img className="w-[471px]" src={logo} alt="" />
                <h2 className="font-poppins text-[#706F6F] text-[18px]">Journalism Without Fear or Favour</h2>
                
                <p className="text-[20px] font-medium font-poppins text-[#706F6F]">{moment().format('dddd, MMMM DD, YYYY')}</p>
                
            </div>
        </div>
    );
};

export default Header;