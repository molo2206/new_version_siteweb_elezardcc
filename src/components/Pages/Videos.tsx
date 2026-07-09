/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BASE_YOUTUBE } from "../../utils/heleprs";
import CardVideo from "./cards/CardVideo";
import SkeletonCardVideo from "./cards/SkeletonCardVideo";
import Pagination from "../Pagination/Pagination";
import Side from "./cards/Side";
import SearchFormVideo from "./cards/SearchFormVideo";

const Videos = () => {
  const [allvideos, setAllvideos] = useState<any[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(true); // État pour le chargement YouTube

  // Chargement des vidéos YouTube
  useEffect(() => {
    setLoadingVideos(true);
    fetch(BASE_YOUTUBE)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc: any) => ({
          ...doc,
          VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllvideos(result);
        setLoadingVideos(false);
      })
      .catch(() => setLoadingVideos(false));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentVideos = allvideos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  // Chargement des catégories (Side gère son propre skeleton)
  // const { loading: loadingCategory } = useAsync(() =>
  //   CategoryServices.getCategory()
  // );

  // Skeleton des cartes vidéo (6 cartes pour l'exemple)
  const renderVideoSkeletons = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <SkeletonCardVideo key={index} />
    ));
  };

  // Si le chargement des catégories est actif, on affiche un squelette global (mais Side gère déjà le sien)
  // Ici on ne bloque pas tout l'affichage, on laisse Side gérer son état.
  // On gère seulement l'affichage des vidéos.

  return (
    <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
      <SearchFormVideo title="Dernières vidéos publiées" />

      <div className="flex flex-col md:flex-row mt-2 gap-8">
        {/* Sidebar – gère son propre skeleton */}
        <div className="hidden md:block md:w-80 lg:w-96 flex-shrink-0">
          <Side />
        </div>

        {/* Section vidéos */}
        <div className="flex-1">
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen max-h-full">
            <div className="text-center">
              {loadingVideos ? (
                <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-12 items-center justify-between py-4">
                  {renderVideoSkeletons()}
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-12 items-center justify-between py-4">
                    {currentVideos.map((item: any, index: number) => (
                      <CardVideo items={item} key={index} />
                    ))}
                  </div>
                  {allvideos.length > 0 && (
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPasts={allvideos.length}
                      paginate={paginate}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar mobile */}
      <div className="md:hidden mt-12">
        <Side />
      </div>
    </div>
  );
};

export default Videos;