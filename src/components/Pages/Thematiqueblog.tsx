/* eslint-disable @typescript-eslint/no-explicit-any */
import CategoryServices from "../../services/CategoryServices";
import useAsync from "../../hooks/useAsync";
import { useParams } from "react-router-dom";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import BlogThematiqueCard from "./cards/BlogThematiqueCard";
import BlogCardLoad from "./cards/BlogCardLoad";
import SideBlog from "./cards/SideBlog";
import SearchForm from "./cards/SearchForm";

const Thematiqueblog = () => {
  const { id } = useParams();
  const { lang } = useAuthContext();
  const { data, loading } = useAsync(() => CategoryServices.getblogCat(id), id);
  const { data: cat } = useAsync(() => CategoryServices.getOneCategory(id), id);
  console.log(cat);

  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
          <SearchForm
            title={showingTranslateValue(cat?.translations, lang)?.name}
          />
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            <div className="hidden md:block">
              <SideBlog />
            </div>
            {/* Video Section */}
            <div className="flex-1">
              <div className="relative w-full h-64 md:h-96">
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                  {data.map((blog: any, index: any) => (
                    <div key={index} className=" flex-shrink-0">
                      <BlogThematiqueCard cat={blog} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" md:hidden py-36">
              <SideBlog />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Thematiqueblog;
