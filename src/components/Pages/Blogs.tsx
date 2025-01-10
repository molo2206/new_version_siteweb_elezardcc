/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAsync from "../../hooks/useAsync";
import BlogServices from "../../services/BlogsServices";
import CardBlog from "../Pages/cards/CardBlog";
import BlogCardLoad from "./cards/BlogCardLoad";
import Pagination from "../Pagination/Pagination";
import SideBlog from "./cards/SideBlog";
import SearchForm from "./cards/SearchForm";
const Blogs = () => {
  const { data, loading } = useAsync(() => BlogServices.getBlogHome());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlog = data?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
          <SearchForm title="Articles" />
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            <div className="hidden md:block">
              <SideBlog />
            </div>
            <div className="bg-white py-2">
              <div className="container mx-auto px-6">
                <div className="space-y-12">
                  {currentBlog.map((blog: any) => (
                    <CardBlog blog={blog} />
                  ))}
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPasts={data.length}
                  paginate={paginate}
                />
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

export default Blogs;
