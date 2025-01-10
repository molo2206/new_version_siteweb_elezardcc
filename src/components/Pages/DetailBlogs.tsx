/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import BlogServices from "../../services/BlogsServices";
import { useAuthContext } from "../../context";
import { date_format, showingTranslateValue } from "../../utils/heleprs";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import Side from "./cards/Side";
import BlogCardLoad from "./cards/BlogCardLoad";
import SideBlog from "./cards/SideBlog";
import ShareButton from "./cards/ShareButton";
import SearchForm from "./cards/SearchForm";

const DetailBlogs = () => {
  const { slug } = useParams();
  const { lang } = useAuthContext();
  const { data } = useAsync(() => BlogServices.oneBlogs(slug), slug);
  const { data: blog, loading } = useAsync(() => BlogServices.getBlogHome());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlog = blog.slice(indexOfFirstPost, indexOfLastPost);
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
            <div className="bg-white">
              <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contenu principal */}
                  <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {showingTranslateValue(data?.translations, lang)?.title}
                    </h1>
                    <p
                      className="text-gray-700 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: showingTranslateValue(data?.translations, lang)
                          ?.description,
                      }}
                    ></p>
                    {/* Métadonnées */}
                    <p className="text-sm text-gray-500 mb-6">
                      Le {date_format(data?.publication_date)} • Par{" "}
                      <a href="#" className="text-blue-500 hover:underline">
                        {data?.author?.full_name}
                      </a>{" "}
                    </p>
                    {/* Image principale */}
                    <img
                      src={data?.image}
                      alt="Illustration"
                      className="w-full h-auto mb-4 rounded-lg shadow-md"
                    />
                    <p
                      className="text-gray-500 text-sm italic mb-8"
                      dangerouslySetInnerHTML={{
                        __html: showingTranslateValue(data?.translations, lang)
                          ?.documentation,
                      }}
                    ></p>
                    <ShareButton />
                    {/* Texte de l'article */}
                    <p className="text-gray-700 mb-6">
                      Le monde est-il mieux préparé pour affronter une autre
                      pandémie ? "La réponse est oui, et non", a récemment
                      affirmé Tedros Adhanom Ghebreyesus, le chef de l'OMS, une
                      organisation qui a été au cœur de la bataille contre le
                      Covid-19...
                    </p>
                    {/* Bloc citation */}
                    <blockquote className="bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-4 italic rounded-lg shadow-sm">
                      "Si la prochaine pandémie survenait aujourd'hui, le monde
                      serait toujours confronté à certaines des mêmes faiblesses
                      et vulnérabilités. Mais le monde a également retenu de
                      nombreuses et douloureuses leçons de la pandémie et pris
                      des mesures importantes pour renforcer ses défenses."
                    </blockquote>
                  </div>
                  <aside className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      À lire aussi
                    </h3>
                    <ul className="space-y-4">
                      {currentBlog.map((item: any) => (
                        <li>
                          <a
                            href={
                              `/blog/detail/` +
                              showingTranslateValue(item?.translations, lang)
                                ?.slug
                            }
                            className="text-blue-500 hover:underline text-sm font-semibold"
                          >
                            {
                              showingTranslateValue(item?.translations, lang)
                                ?.title
                            }
                          </a>
                        </li>
                      ))}
                    </ul>
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPasts={currentBlog.length}
                      paginate={paginate}
                    />
                    {/* <div className=" py-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Categories des articles
                      </h3>
                      <ul className="space-y-4">
                        {cat.map((item: any) => (
                          <li>
                            <a
                              href={`/blog/category/${
                                showingTranslateValue(item?.translations, lang)
                                  ?.category_id
                              }`}
                              className="text-blue-500 hover:underline text-sm font-semibold"
                            >
                              {
                                showingTranslateValue(item?.translations, lang)
                                  ?.name
                              }
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </aside>
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

export default DetailBlogs;
