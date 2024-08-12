/* eslint-disable @typescript-eslint/no-explicit-any */
import { showingTranslateValue } from "../../../utils/heleprs";
import { useAuthContext } from "../../../context";
import { Link } from "react-router-dom";
interface props {
  blog?: any;
}
const CardBlog = ({ blog }: props) => {
  const { lang } = useAuthContext();
  return (
    <div>
      <Link to={
          `/blog/detail/` +
          showingTranslateValue(blog?.translations, lang)?.slug
        }
        onClick={() => window.scroll(0, 0)}
      >
        <div key={blog?.id} className=" mx-auto relative mb-12 cursor-pointer">
          <img
            src={blog?.image}
            alt=""
            className=" hover:scale-95 transition-all duration-300 rounded-md"
          />
          <div
            className=" text-center px-4 py-8 
            bg-white shadow-lg rounded-md md:w-3/4
             mx-auto absolute left-0 right-0 
             -bottom-16 dark:bg-slate-800 dark:text-slate-200 "
          >
            <h3
              className=" mb-3 text-neutralGray font-semibold line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: showingTranslateValue(blog?.translations, lang)?.title,
              }}
            ></h3>
            <div className=" flex items-center justify-center gap-8 ">
              <a
                href=""
                className=" font-bold text-brandPrimary hover:text-neutral-700"
              >
                Readmore
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardBlog;
