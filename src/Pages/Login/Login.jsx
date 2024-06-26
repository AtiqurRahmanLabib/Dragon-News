import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#FFFFFF]  md:w-auto lg:w-[650px] h-[630px] mx-auto rounded-md">
                <h1 className="font-poppins font-semibold text-[35px] text-[#403F3F] text-center pt-[100px]">Login your account</h1>
                <br />
                <br />
                <hr />
                <p className="text-[20px] text-[#403F3F] font-semibold font-poppins mt-12 pl-[75px]">Email address</p>
                <div className="pl-[75px]">
                    <input className="rounded-md md:w lg:w-[500px] h-[60px] bg-[#F3F3F3] text-[#9F9F9F] font-poppins text-[16px] mt-3 pl-2" placeholder="Enter your email address" type="email" name="" id="" required />
                </div>

                <p className="text-[20px] text-[#403F3F] font-semibold font-poppins mt-6 pl-[75px]">Password</p>

                <div className="pl-[75px]">
                    <input className="rounded-md md:w-full lg:w-[500px] h-[60px] bg-[#F3F3F3] text-[#9F9F9F] font-poppins text-[16px] pl-2 mt-3" placeholder="Enter your Password" type="password" name="" id="" required />
                    <button className="bg-[#403F3F] text-[#FFFFFF] md:grid grid w-full lg:w-[500px] h-[60px] font-poppins text-[20px] font-semibold mt-6 rounded-md" type="submit">Login</button>
                </div>
                <p className=" text-[#706F6F] text-[16px] font-poppins font-semibold text-center mt-3">Dont’t Have An Account ? <Link to='/register'><span className="text-red-700">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;