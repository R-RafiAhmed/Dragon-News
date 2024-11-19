import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'


const NavBar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="space-x-5 text-lg text-gray-500 font-medium">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="carrer">Carrer</Link>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral text-xl font-semibold">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;