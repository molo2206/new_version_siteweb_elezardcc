/* eslint-disable @typescript-eslint/no-explicit-any */
import useAsync from "../../hooks/useAsync";
import {
  date_format,
  limittext,
  showingTranslateValue,
} from "../../utils/heleprs";
import VideosServices from "../../services/VideosServices";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import Side from "./cards/Side";
import { useAuthContext } from "../../context";
import ShareButton from "./cards/ShareButton";
import SearchFormVideo from "./cards/SearchFormVideo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailVideo = () => {
  const { id } = useParams();
  const { data: video, loading } = useAsync(
    () => VideosServices.OneVid(id),
    id
  );
  const { lang } = useAuthContext();

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  // Skeleton pour les détails
  const DetailSkeleton = () => (
    <div className="flex-1">
      <Skeleton width="80%" height={32} className="mb-4" />
      <Skeleton width="40%" height={20} className="mb-2" />
      <Skeleton count={3} className="mb-4" />
      <Skeleton width="60%" height={20} className="mb-2" />
      <div className="flex items-center justify-between">
        <Skeleton width={200} height={20} />
        <Skeleton width={100} height={36} />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
        <SearchFormVideo title="Chargement..." />
        <div className="flex flex-col md:flex-row mt-8 gap-8">
          <div className="hidden md:block md:w-80 lg:w-96 flex-shrink-0">
            <div className="sticky top-20">
              <Skeleton height={400} width="100%" className="rounded-xl" />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-[300px] md:h-[400px] bg-gray-200 rounded-xl mb-6">
              <Skeleton height="100%" width="100%" />
            </div>
            <DetailSkeleton />
          </div>
        </div>
        <div className="md:hidden mt-12">
          <Skeleton height={300} width="100%" className="rounded-xl" />
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="text-center py-40 px-4">
        <h2 className="text-2xl font-bold text-gray-700">Vidéo introuvable</h2>
        <p className="text-gray-500 mt-2">La vidéo que vous cherchez n'existe pas ou a été supprimée.</p>
        <a href="/videos" className="mt-4 inline-block text-principale hover:underline">
          Retour aux vidéos
        </a>
      </div>
    );
  }

  return (
    <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
      <SearchFormVideo
        title={showingTranslateValue(video?.category?.translations, lang)?.name || "Détail de la vidéo"}
      />

      <div className="flex flex-col md:flex-row mt-8 gap-8">
        {/* Sidebar gauche – desktop */}
        <div className="hidden md:block md:w-80 lg:w-96 flex-shrink-0">
          <div className="sticky top-20">
            <Side />
          </div>
        </div>

        {/* Contenu principal – vidéo + détails */}
        <div className="flex-1">
          {/* Lecteur vidéo - taille réduite */}
          <div className="relative w-full h-[300px] md:h-[400px] bg-black rounded-xl overflow-hidden shadow-lg mb-6">
            <YouTube
              videoId={video?.url}
              opts={opts}
              className="absolute top-0 left-0 w-full h-full"
              iframeClassName="w-full h-full"
            />
          </div>

          {/* Détails de la vidéo */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {video.title}
            </h1>
            <p className="text-principale text-sm md:text-base mb-3">
              {showingTranslateValue(video?.category?.translations, lang)?.name}
            </p>
            <div
              className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: limittext(video?.description, 300),
              }}
            />
            <div className="text-sm text-gray-500 mb-4">
              <p>
                <strong>Réalisation :</strong> Équipe éditoriale (Eleza RDC,{" "}
                {date_format(video?.created_at)})
              </p>
              <p className="mt-1">
                <strong>Diffusion :</strong> Le {date_format(video?.created_at)}
              </p>
              <div className="flex flex-wrap items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <span className="text-blue-500">Disponible en replay :</span>
                  <span className="text-gray-400">YouTube</span>
                </span>
                <ShareButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar mobile – après la vidéo */}
      <div className="md:hidden mt-12">
        <Side />
      </div>
    </div>
  );
};

export default DetailVideo;