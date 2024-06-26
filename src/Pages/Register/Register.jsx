import Navbar from "../../Shared/Navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <form>
                <div className="bg-[#FFFFFF] w-[650px] h-[930px] mx-auto rounded-md">
                    <h1 className="font-poppins font-semibold text-[35px] text-[#403F3F] text-center pt-[100px]">Register your account</h1>
                    <br />
                    <br />
                    <hr />
                    <p className="text-[20px] text-[#403F3F] font-semibold font-poppins mt-12 pl-[75px]">Your Name</p>
                    <div className="pl-[75px]">
                        <input className="rounded-md w-[500px] h-[60px] bg-[#F3F3F3] text-[#9F9F9F] font-poppins text-[16px] mt-3 pl-2" placeholder="Enter your email name" type="email" name="" id="" required />
                    </div>
                    <p className="text-[20px] text-[#403F3F] font-semibold font-poppins mt-12 pl-[75px]">Photo URL</p>
                    <div className="pl-[75px]">
                        <input className="rounded-md w-[500px] h-[60px] bg-[#F3F3F3] text-[#9F9F9F] font-poppins text-[16px] mt-3 pl-2" placeholder="Enter your email address" type="" name="" id="" required />
                    </div>
                    <p className="text-[20px] text-[#403F3F] font-semibold font-poppins mt-12 pl-[75px]">Email address</p>
                    <div className="pl-[75px]">
                        <input className="rounded-md w-[500px] h-[60px] bg-[#F3F3F3] text-[#9F9F9F] font-poppins text-[16px] mt-3 pl-2" placeholder="Enter your email address" type="email" name="" id="" required />
                    </div>

                    <p className="text-[20px] text-[#403F3F] font-semibold font-poppins mt-6 pl-[75px]">Password</p>

                    <div className="pl-[75px]">
                        <input className="rounded-md w-[500px] h-[60px] bg-[#F3F3F3] text-[#9F9F9F] font-poppins text-[16px] pl-2 mt-3" placeholder="Enter your Password" type="password" name="" id="" required />
                        <button className="bg-[#403F3F] text-[#FFFFFF] w-[500px] h-[60px] font-poppins text-[20px] font-semibold mt-6 rounded-md" type="submit">Register</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;