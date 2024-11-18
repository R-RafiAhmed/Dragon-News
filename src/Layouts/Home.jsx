import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSection from "../Components/Layout-Components/LeftSection";
import RightSection from "../Components/Layout-Components/RightSection";
import NavBar from "../Components/NavBar";


const Home = () => {
    return (
        <>
            <header>
                <Header></Header>
                <section className="container mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="container mx-auto pt-8">
                <NavBar></NavBar>
            </nav>
            <main className="container mx-auto pt-20 grid md:grid-cols-12 gap-5">
                <aside className="col-span-3"><LeftSection></LeftSection></aside>
                <section className="col-span-6">Main Part</section>
                <aside className="col-span-3"><RightSection></RightSection></aside>
            </main>
        </>
    );
};

export default Home;