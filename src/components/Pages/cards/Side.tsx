/* eslint-disable @typescript-eslint/no-explicit-any */
import { showingTranslateValue } from "../../../utils/heleprs";
import useAsync from "../../../hooks/useAsync";
import CategoryServices from "../../../services/CategoryServices";
import { useAuthContext } from "../../../context";
import BlogCardLoad from "./BlogCardLoad";

const Side = () => {
  const { data: category, loading } = useAsync(() =>
    CategoryServices.getCategory()
  );
  const { lang } = useAuthContext();

  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="w-full h-98  mt-4 bg-white  flex flex-col">
          <div className="p-4 text-xl font-bold text-slate-900">
            Thématiques.
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-2">
            <ul className="space-y-4 px-4">
              {category.map((item: any, index: any) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer "
                >
                  <span className="text-xl"></span>
                  <span
                    className="text-sm md:text-base hover:text-principale text-slate-900"
                    style={{ fontSize: 13 }}
                  >
                    <a href={`/video-category/` + item?.id}>
                      {showingTranslateValue(item?.translations, lang)?.name}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Footer */}
        </div>
      )}
    </>
  );
};

export default Side;
