/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/Trending.tsx
import { useParams } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import VideosServices from "../../services/VideosServices";
import CategoryServices from "../../services/CategoryServices";
import Side from "./cards/Side";
import SearchFormVideo from "./cards/SearchFormVideo";
import BlogCardLoad from "./cards/BlogCardLoad";
import { useAuthContext } from "../../context";
import { showingTranslateValue } from "../../utils/heleprs";
import TrendingCard from "./cards/TrendingCard";

const Trending = () => {
  const { id } = useParams<{ id: string }>(); // id de la catégorie
  const { lang } = useAuthContext();

  // Récupérer les vidéos (toutes ou par catégorie)
  const { data: videos, loading } = useAsync(
    () => (id ? VideosServices.getByCategory(id) : VideosServices.getVideo()),
    [id],
  );

  // Récupérer le nom de la catégorie si un id est présent
  const { data: category } = useAsync(
    () => (id ? CategoryServices.getOneCategory(id) : Promise.resolve(null)),
    [id],
  );

  const pageTitle = id
    ? showingTranslateValue(category?.translations, lang)?.name || "Catégorie"
    : "Tendances";

  return (
    <div className="text-slate-800 bg-white dark:bg-slate-900 min-h-screen px-4 md:px-16 py-20">
      {/* Barre de recherche + titre dynamique */}
      <SearchFormVideo title={`${pageTitle} - Vidéos populaires`} />

      {/* Contenu principal avec side et grille */}
      <div className="flex flex-col md:flex-row mt-8 gap-8">
        {/* Sidebar gauche (desktop) - affiche les 6 thématiques */}
        <div className="hidden md:block w-1/5 p-4 bg-white dark:bg-slate-800 shadow-md h-screen sticky top-16 mt-2 rounded-lg">
          <Side />
        </div>

        {/* Zone des vidéos */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from(Array(6).keys()).map((i) => (
                <BlogCardLoad key={i} />
              ))}
            </div>
          ) : (
            <>
              {videos?.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  Aucune vidéo dans cette catégorie pour le moment.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos?.map((video: any, index: number) => (
                    <TrendingCard
                      key={video.id}
                      video={video}
                      rank={index + 1}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar mobile */}
        <div className="md:hidden py-10">
          <Side />
        </div>
      </div>
    </div>
  );
};

export default Trending;
