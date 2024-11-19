import { FaEye } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  const {
    author,
    title,
    details,
    image_url,
    thumbnail_url,
    rating,
    total_view,
    others_info,
  } = singleNews;

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      {/* Author Section */}
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full"
          src={author.img || "https://via.placeholder.com/100"}
          alt="Author Avatar"
        />
        <div className="ml-4">
          <h2 className="text-gray-900 font-medium">{author.name}</h2>
          <p className="text-sm text-gray-600">{author.published_date}</p>
        </div>
        <div className="ml-auto text-gray-500">
          <div className={`badge ${others_info.is_trending ? "badge-success" : "badge-secondary"}`}>
            {others_info.is_trending ? "Trending" : "Normal"}
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      <img className="w-full h-80 object-cover" src={image_url} alt="Post Thumbnail" />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">{details}</p>
        <a
          href="#"
          className="block mt-4 text-indigo-500 font-semibold hover:underline"
        >
          Read More
        </a>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between border-t border-gray-200">
        {/* Rating Section */}
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">★ {rating.number}</span>
          <p className="text-sm text-gray-600">{rating.badge}</p>
        </div>
        {/* Views Section */}
        <div className="flex items-center text-gray-600">
          <FaEye className="w-5 h-5" />
          <p className="text-sm ml-2">{total_view} views</p>
        </div>
      </div>
    </div>
  );
};



export default NewsCard;