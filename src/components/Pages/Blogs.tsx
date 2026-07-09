/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAsync from "../../hooks/useAsync";
import BlogServices from "../../services/BlogsServices";
import CardBlog from "../Pages/cards/CardBlog";
import BlogCardLoad from "./cards/BlogCardLoad";
import Pagination from "../Pagination/Pagination";
import SideBlog from "./cards/SideBlog";
import SearchForm from "./cards/SearchForm";
import Skeleton from "react-loading-skeleton";

const Blogs = () => {
  const { data, loading } = useAsync(() => BlogServices.getBlogHome());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlog = data?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  // Skeleton pour les articles
  const renderSkeletons = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <BlogCardLoad key={index} />
    ));
  };

  return (
    <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
      <SearchForm title="Articles" />
      
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        {/* Sidebar gauche (skeleton ou contenu réel) */}
        <div className="hidden md:block">
          {loading ? (
            <div className="w-64 p-4 space-y-4">
              <Skeleton height={30} width="80%" />
              <Skeleton height={20} count={5} />
              <Skeleton height={30} width="80%" />
              <Skeleton height={20} count={3} />
            </div>
          ) : (
            <SideBlog />
          )}
        </div>

        {/* Liste des articles */}
        <div className="bg-white py-2 flex-1">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {loading ? renderSkeletons() : currentBlog?.map((blog: any, index: number) => (
                <CardBlog key={index} blog={blog} />
              ))}
            </div>
            
            {!loading && data?.length > 0 && (
              <Pagination
                postsPerPage={postsPerPage}
                totalPasts={data.length}
                paginate={paginate}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sidebar mobile */}
      <div className="md:hidden py-36">
        {loading ? (
          <div className="space-y-4">
            <Skeleton height={30} width="80%" />
            <Skeleton height={20} count={5} />
          </div>
        ) : (
          <SideBlog />
        )}
      </div>
    </div>
  );
};

export default Blogs;