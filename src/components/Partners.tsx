/* eslint-disable @typescript-eslint/no-explicit-any */
import PartenersServices from "../services/PartenersServices";
import useAsync from "../hooks/useAsync";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Partners = () => {
  const { data, loading } = useAsync(() => PartenersServices.getPartners());

  // Squelette d'une carte partenaire
  const PartnerSkeleton = () => (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <Skeleton circle width={80} height={80} className="mb-4" />
      <Skeleton width="70%" height={24} className="mb-2" />
      <Skeleton width="50%" height={16} />
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Bannière héros (statique) */}
        <div
          className="bg-gray-100 border-b border-gray-300 bg-cover bg-center py-20 rounded-lg mb-12"
          style={{ backgroundImage: "url(https://apisiteweb.elezardc.org/uploads/ban3.jpg)" }}
        >
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="mt-6"></div>
            <div className="mt-6 flex justify-center">
              {/* Bouton éventuel (désactivé) */}
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center text-principale dark:text-white mb-12">
          Nos Partenaires
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading
            ? // Affiche 8 squelettes pendant le chargement
              Array.from({ length: 8 }).map((_, index) => (
                <PartnerSkeleton key={index} />
              ))
            : data?.map((partner: any, index: number) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
                >
                  <img
                    src={partner.image}
                    alt={`${partner.full_name} logo`}
                    className="h-20 w-20 mb-4 object-contain rounded-full border-2 border-gray-200 dark:border-slate-600"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {partner.full_name}
                  </h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={partner.url}
                    className="text-gray-600 dark:text-gray-300 mt-2 hover:text-principale transition-colors"
                  >
                    Visitez leur site →
                  </a>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;