import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-5 py-6 bg-gray-200 px-4">
            <p className="py-2 px-6 bg-pink-700 text-xl font-medium text-white">Latest</p>
            <Marquee pauseOnHover={true} speed={80} className="space-x-6">
                <Link className="text-lg font-semibold text-gray-800">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="text-lg font-semibold text-gray-800">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="text-lg font-semibold text-gray-800">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;