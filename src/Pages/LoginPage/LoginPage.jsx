import { Link, useNavigate, } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const LoginPage = () => {
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [suceess, setSuccess] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login successfully')
                navigate("/home")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="w-[1140px] mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="mt-10">
                <div className="w-[752px] h-[700px] bg-[#FFFFFF] shadow-2xl mx-auto">
                    <h1 className="text-center pt-9 text-[#403F3F] text-[35px] font-semibold font-poppins">Login your account</h1>
                    <hr className="w-[606px] border-[#E7E7E7] mx-auto mt-9" />
                    <div className="w-[559px] h-[349px] rounded-[5px] mx-auto mt-9">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="Email" className="text-[#403F3F] font-semibold text-[20px] font-poppins">Email address</label>
                                <input className="w-[558px] h-[65px] bg-[#F3F3F3] rounded-[5px] text-[16px] text-[#9F9F9F] p-5 mt-2"
                                    type="email"
                                    placeholder="Enter your email address"
                                    name="email" />
                            </div>

                            <div className="mt-2">
                                <label htmlFor="Password" className="text-[#403F3F] font-semibold text-[20px] font-poppins ">Password</label>
                                <input className="w-[558px] h-[65px] bg-[#F3F3F3] rounded-[5px] text-[16px] text-[#9F9F9F] p-5 mt-2"
                                    type="password"
                                    placeholder="Enter your email password"
                                    name="password" />
                            </div>
                            <button className="w-[558px] h-[65px] bg-[#403F3F]  mt-5 rounded-[5px] text-[20px] font-semibold font-poppins text-[#FFFFFF]" type="submit">Login</button>
                            {
                                error && <p className='text-1xl font-bold text-red-500 mt-2'>{error}</p>
                            }
                            {
                                suceess && <p className='text-1xl font-bold text-green-500 mt-2'>{suceess}</p>
                            }
                        </form>
                        <Link to="/register"><p className="font-semibold font-poppins text-[16px] text-[#706F6F] text-center mt-5">Dont’t Have An Account ? <span className="font-semibold font-poppins text-[16px] bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text">Register</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;