import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightSection from "../Components/Layout-Components/RightSection";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  const { title, author, details, image_url } = news;

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="container mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <img
              src={image_url}
              alt="News"
              className="w-full h-96 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium">Author:</span> {author.name} |{" "}
                <span className="font-medium">Published:</span>{" "}
                {author.published_date}
              </p>
              <p className="text-gray-700 leading-6">{details}</p>
            </div>

            {/* Button */}
            <div className="p-6 border-t border-gray-200">
              <Link to="/" className="btn btn-outline btn-primary flex items-center gap-2">
                <FaArrowLeft />
                All news in this category
              </Link>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightSection></RightSection>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
