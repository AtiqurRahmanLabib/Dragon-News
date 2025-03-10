import { Link, NavLink } from "react-router-dom";
import profile from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleSignOut = () => {
        logout()
            .then(() => {
                console.log('logout')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="flex items-center mt-5">
                <div className=" flex gap-5 ml-[450px]">
                    <NavLink to="/home"
                        className={({ isActive }) =>
                            `font-poppins text-[18px] text-[#706F6F]
                ${isActive ? ' text-black' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink to="/about"
                        className={({ isActive }) =>
                            `font-poppins text-[18px] text-[#706F6F]
                ${isActive ? ' text-black' : ''}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink to="/career"
                        className={({ isActive }) =>
                            `font-poppins text-[18px] text-[#706F6F]
                ${isActive ? ' text-black' : ''}`
                        }
                    >
                        Career
                    </NavLink>

                </div>
                <div className="ml-[310px] flex">
                    <img className="mr-5" src={profile} alt="" />

                    {
                        user ?
                            <button onClick={handleSignOut} className="w-[140px] h-[44px] bg-[#403F3F] ">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="w-[140px] h-[44px] bg-[#403F3F] ">Login</button>
                            </Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;