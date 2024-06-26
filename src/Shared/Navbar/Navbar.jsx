import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const NavLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
     </>

    return (
        <div className="     lg:w-[1155px] h-auto mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to="/login">
                   <button className="bg-[#403F3F] text-[#FFFFFF] w-[144px] h-[40px] font-poppins text-[20px] font-semibold">Login</button>
                   </Link>
                </div>
            </div>
        </div>
    );

};
export default Navbar;