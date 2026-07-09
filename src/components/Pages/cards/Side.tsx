/* eslint-disable @typescript-eslint/no-explicit-any */
import { showingTranslateValue } from "../../../utils/heleprs";
import useAsync from "../../../hooks/useAsync";
import CategoryServices from "../../../services/CategoryServices";
import { useAuthContext } from "../../../context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Side = () => {
  const { data: category, loading } = useAsync(() =>
    CategoryServices.getCategory()
  );
  const { lang } = useAuthContext();

  // Squelette stylisé pour la sidebar
  const SidebarSkeleton = () => (
    <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-slate-700">
        <Skeleton width={140} height={24} />
        <Skeleton width={180} height={14} className="mt-1" />
      </div>
      <div className="p-2 space-y-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="flex items-center px-3 py-2">
            <Skeleton circle width={8} height={8} className="mr-3" />
            <Skeleton width="70%" height={16} />
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-100 dark:border-slate-700 text-center">
        <Skeleton width={120} height={14} className="mx-auto" />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden sticky top-20 transition-all duration-200">
      {loading ? (
        <SidebarSkeleton />
      ) : (
        <>
          {/* En-tête */}
          <div className="p-4 border-b border-gray-100 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-800">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-principale rounded-full"></span>
              Thématiques
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-2">
              Explorez par catégorie
            </p>
          </div>

          {/* Liste des catégories */}
          <div className="max-h-[calc(100vh-220px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            <ul className="py-2 space-y-0.5">
              {category?.map((item: any, index: number) => (
                <li key={index}>
                  <a
                    href={`/video-category/${item?.id}`}
                    className="flex items-center px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-principale transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-principale group-hover:scale-125 mr-3 transition-all"></span>
                    <span className="font-medium line-clamp-1">
                      {showingTranslateValue(item?.translations, lang)?.name}
                    </span>
                    {/* Optionnel : afficher le nombre de vidéos si disponible */}
                    {item?.videos_count && (
                      <span className="ml-auto text-xs text-gray-400 group-hover:text-principale">
                        {item.videos_count}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Side;