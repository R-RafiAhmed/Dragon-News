import { useEffect, useState } from "react";


const LeftSection = () => {

    const [catagories, setCatagories] = useState([]);
    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCatagories(data.data.news_category));
    },[]);

    return (
        <div>
            <h2 className="text-xl font-semibold">All Caterogy</h2>
            <div className="flex flex-col gap-1 mt-5">
                {
                    catagories.map(catagory => <button className="btn" key={catagory.category_id}>{catagory.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftSection;