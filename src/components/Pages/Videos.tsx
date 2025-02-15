/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BASE_YOUTUBE } from "../../utils/heleprs";
import CardVideo from "./cards/CardVideo";
import Pagination from "../Pagination/Pagination";
import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";
import BlogCardLoad from "./cards/BlogCardLoad";
import Side from "./cards/Side";
import SearchFormVideo from "./cards/SearchFormVideo";

const Videos = () => {
  const [allvideos, setAllvideos] = useState([]);
  useEffect(() => {
    fetch(BASE_YOUTUBE)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc: any) => ({
          ...doc,
          VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllvideos(result);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentVideos = allvideos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const { data: category, loading } = useAsync(() =>
    CategoryServices.getCategory()
  );
  console.log(category);
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
          <SearchFormVideo title="Dernières vidéos publiées" />
          <div className="flex flex-col md:flex-row mt-2 gap-8">
            <div className="hidden md:block">
              <Side />
            </div>
            {/* Video Section */}
            <div className="flex-1">
              <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen max-h-full">
                <div className="text-center">
                  {loading ? (
                    Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
                  ) : (
                    <div className=" grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-12 items-center justify-between py-4">
                      {currentVideos.map((item: any, index: number) => (
                        <CardVideo items={item} key={index} />
                      ))}
                    </div>
                  )}
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPasts={allvideos.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" md:hidden py-36">
            <Side />
          </div>
        </div>
      )}
    </>
  );
};

export default Videos;
