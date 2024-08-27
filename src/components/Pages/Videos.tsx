/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BASE_YOUTUBE } from "../../utils/heleprs";
import CardVideo from "./cards/CardVideo";
import Pagination from "../Pagination/Pagination";


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

  //Get current blog
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentVideos = allvideos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className=" md:px-14 px-4 py-20 max-w-screen-2xl  mx-auto dark:bg-slate-800 dark:text-slate-200">
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen max-h-full">
        <div className="text-center my-8 ">
          <h2 className=" text-2xl text-neutralDGray font-semibold mb-2">
            Nos Videos
          </h2>
          <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-12 items-center justify-between">
            {currentVideos.map((item: any, index: number) => (
              <CardVideo items={item} key={index} />
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPasts={allvideos.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
