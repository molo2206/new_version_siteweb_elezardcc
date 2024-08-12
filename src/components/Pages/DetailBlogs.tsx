/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import BlogServices from "../../services/BlogsServices";
import { useAuthContext } from "../../context";
import { showingTranslateValue } from "../../utils/heleprs";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import BlogLastCard from "./cards/BlogLastCard";
import CategoryServices from "../../services/CategoryServices";
import CategoryCard from "./cards/CategoryCard";

const DetailBlogs = () => {
  const { slug } = useParams();
  const { lang } = useAuthContext();
  const { data } = useAsync(() => BlogServices.oneBlogs(slug), slug);
  const { data: blog } = useAsync(() => BlogServices.getBlogHome());
  const { data: cat } = useAsync(() => CategoryServices.getCategory());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlog = blog.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  return (
    <div
      className="py-12  max-w-screen-2xl
   mx-auto my-12  dark:bg-slate-800 dark:text-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 row">
        <div className="col-span-2 col-lg-8 col-md-8 px-4">
          <div className="overflow-hidden">
            <img
              src={data?.image}
              alt=""
              className="mx-auto md:h-[500px] w-full 
            object-cover transition duration-700 rounded-md"
            />
          </div>
          <p
            className=" font-montserrat text-lg"
            dangerouslySetInnerHTML={{
              __html: showingTranslateValue(data?.translations, lang)
                ?.documentation,
            }}
          ></p>
          {/* <ImageBlogs data={data?.allimages} /> */}
          <br />

          <h1 className=" text-2xl font-semibold mb-10 ">
            {showingTranslateValue(data?.translations, lang)?.title}
            <p className="border border-t-2 border-principal"></p>
          </h1>
          <div
            className="text-lg font-montserrat"
            dangerouslySetInnerHTML={{
              __html: showingTranslateValue(data?.translations, lang)
                ?.description,
            }}
          ></div>
          <div className="">
            <img
              src={data?.author?.image}
              className=" h-[60px] w-[60px] px-30 rounded-full duration-200 hover:scale-105"
            />
            <p className="text-xl font-bold ">{data?.author?.full_name}</p>
          </div>
        </div>
        <div className="col-span-1 md:col-lg-4 col-md-4 gap-3 px-4 ">
          <form className="mt-8 space-y-6 mb-8">
            <div className="space-y-px rounded-md items-center">
              <div className="blog-search-content">
                <div className=" border border-sm  search-box">
                  {/* <input placeholder="Search" type="search" />
                          <button>
                            <i className="fa fa-search"></i>
                          </button> */}
                </div>
              </div>
            </div>
          </form>
          <div className="p-4 shadow-2xl rounded-2xl">
            <div className="overflow-hidden">
              <h1 className="text-principal text-2xl font-montserrat font-semibold items-center justify-center">
                Categories
              </h1>
              <div className="right-bar">
                <div className="right-bar-item category">
                  <div className="right-item-content text-slate-600 dark:text-slate-700  ">
                    {cat.map((item: any, index: number) => (
                      <a className="text-sm font-semibold ">
                        <CategoryCard cat={item} key={index} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 shadow-2xl rounded-2xl">
            <div className="overflow-hidden">
              <h1 className="text-principal text-2xl font-montserrat font-semibold items-center justify-center">
                Publications recentes
              </h1>
              <div className="right-bar">
                {currentBlog.map((item: any, index: number) => (
                  <div className=" text-sm ">
                    <BlogLastCard blog={item} key={index} />
                  </div>
                ))}
              </div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPasts={blog.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogs;
