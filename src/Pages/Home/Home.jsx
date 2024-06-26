import Header from "../../Shared/Header/Header";
import LeftSideNavBar from "../../Shared/LeftSideNavBar/LeftSideNavBar";
import Navbar from "../../Shared/Navbar/Navbar";
import RigtSideNavBar from "../../Shared/RigtSideNavBar/RigtSideNavBar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-3xl font-poppins">This is Home</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="border"><LeftSideNavBar></LeftSideNavBar></div>
           <div className="border md:col-span-2">News coming soon</div>
            <div className=""><RigtSideNavBar></RigtSideNavBar></div>
        </div>
        </div>
    );
};

export default Home;