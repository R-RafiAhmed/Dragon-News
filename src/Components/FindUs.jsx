import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-7">
            <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
            <div className="join join-vertical w-full *:bg-base-100">
                <button className="flex items-center justify-start btn join-item w-full text-lg font-medium"><FaFacebook className="text-blue-500"></FaFacebook>Facebook</button>
                <button className="flex items-center justify-start btn join-item w-full text-lg font-medium"><FaTwitter className="text-blue-500"></FaTwitter>Twitter</button>
                <button className="flex items-center justify-start btn join-item w-full text-lg font-medium"><FaInstagramSquare className="text-orange-600"></FaInstagramSquare>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;