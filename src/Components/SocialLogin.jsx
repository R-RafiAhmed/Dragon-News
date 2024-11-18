import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold">Login With</h2>
           <div className="space-y-1 mt-5">
                <button className="flex items-center gap-1 btn w-full text-lg font-medium hover:text-blue-500"><IoLogoGoogle></IoLogoGoogle>Login With Google</button>
                <button className="flex items-center gap-1 btn w-full text-lg font-medium hover:text-blue-500"><FaGithub></FaGithub>Login With Github</button>
           </div>
        </div>
    );
};

export default SocialLogin;