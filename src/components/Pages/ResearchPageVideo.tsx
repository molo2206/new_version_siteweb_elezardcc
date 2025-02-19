/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAsync from "../../hooks/useAsync";
import BlogCardLoad from "./cards/BlogCardLoad";
import SideBlog from "./cards/SideBlog";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../context";
import SearchServices from "../../services/SearchServices";
import CardCat from "./cards/CardCat";
import SearchFormVideo from "./cards/SearchFormVideo";

const ResearchPageVideo = () => {
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();
  const [currentPage, setCurrentPage] = useState<any>(
    searchParams.get("page") || 1
  );
  const { lang } = useAuthContext();

  const location = useLocation();

  const { data, loading } = useAsync(
    () =>
      SearchServices.search_video(
        {
          keyword: searchParams.get("q"),
          local: lang,
        },
        currentPage
      ),
    [location.key, currentPage]
  );

  const fetchNextPrevTasks = (link: any) => {
    const url = new URL(link);
    navigation(
      `/search?q=${searchParams.get("q")}&page=${url.searchParams.get("page")}`
    );
    setCurrentPage(url.searchParams.get("page"));
  };
  const renderPaginationLinks = () => {
    return (
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <ul className=" flex relative ">
          {data?.links?.map((link: any, index: number) => (
            <li key={index}>
              <a
                onClick={() => fetchNextPrevTasks(link?.url)}
                aria-current="page"
                className={`cursor-pointer relative z-10 inline-flex items-center
                 ${
                   link?.active
                     ? "bg-principal text-white"
                     : "border-principal border-[1px] text-principal"
                 } px-4 py-2 text-sm font-semibold
                  focus:z-20 focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-indigo-600 ${
                     !link?.url && "disabled"
                   }`}
              >
                {link.label
                  .replace("&laquo;", "")
                  .replace("Previous", "<<")
                  .replace("&raquo;", "")
                  .replace("Next", ">>")}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
          <SearchFormVideo title="Résultat de la recherche" />
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            <div className="hidden md:block w-1/5 p-4 bg-white shadow-lg h-screen sticky top-16 mt-2 rounded-lg">
              <SideBlog />
            </div>
            <div className="bg-white py-2">
              <div className="container mx-auto px-6">
                <div className="">
                  <p className=" md:text-3xl sm:text-xl">
                    Votre recherche a généré
                    <span className=" px-2 text-principal text-principale">
                      {data?.length} résultat(s).
                    </span>
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative w-full h-64 md:h-96">
                    <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                      {data.map((video: any, index: any) => (
                        <div key={index} className=" flex-shrink-0">
                          <CardCat video={video} />
                        </div>
                      ))}
                    </div>
                    {renderPaginationLinks()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:hidden py-36">
            <SideBlog />
          </div>
        </div>
      )}
    </>
  );
};

export default ResearchPageVideo;
