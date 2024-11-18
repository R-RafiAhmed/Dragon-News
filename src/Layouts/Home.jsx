import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";


const Home = () => {
    return (
        <>
            <header>
                <Header></Header>
                <section className="container mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
        </>
    );
};

export default Home;