/* eslint-disable @typescript-eslint/no-explicit-any */
import { limittext, showingTranslateValue } from "../../../utils/heleprs";
import { useAuthContext } from "../../../context";
import { Link } from "react-router-dom";
interface props {
  blog?: any;
}
const CardBlog = ({ blog }: props) => {
  const { lang } = useAuthContext();
  return (
    <div>
      <Link
        to={
          `/blog/detail/` +
          showingTranslateValue(blog?.translations, lang)?.slug
        }
        onClick={() => window.scroll(0, 0)}
      >
        <div
          key={blog?.id}
          className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6"
        >
          <div className="flex-shrink-0">
            <img
              src={blog?.image}
              alt={blog.title}
              className="w-full md:w-64 h-40 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-blue-600 text-sm font-bold uppercase">
              {showingTranslateValue(blog?.category.translations, lang)?.name}
            </h3>
            <h4
              className="text-lg font-bold text-gray-900 mt-1"
              dangerouslySetInnerHTML={{
                __html: showingTranslateValue(blog?.translations, lang)?.title,
              }}
            ></h4>
            <p
              className="text-gray-600 mt-2"
              dangerouslySetInnerHTML={{
                __html: limittext(showingTranslateValue(blog?.translations, lang)?.description,300) 
              }}
            ></p>
            <span className="inline-block bg-gray-200 text-gray-700 text-sm font-bold py-1 px-2 rounded mt-4">
              {blog?.publication_date}
            </span>
          </div>
          {/* Diffusions */}
          <div className="flex-shrink-0 text-gray-700">
            <h5 className="text-blue-900 font-bold mb-2">Publication</h5>
            <p className="text-sm"> {blog?.publication_date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardBlog;
