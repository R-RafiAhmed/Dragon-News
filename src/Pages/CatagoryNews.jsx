import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CatagoryNews = () => {

    const {data: news} = useLoaderData();

    return (
        <div>
            <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
            <div className="space-y-7">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews} ></NewsCard> )
                }
            </div>
        </div>
    );
};

export default CatagoryNews;