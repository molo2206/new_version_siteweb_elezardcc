/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import Video from "../../services/VideosServices";
import { useAuthContext } from "../../context";
import {
  date_format,
  limittext,
  showingTranslateValue,
} from "../../utils/heleprs";
import YouTube, { YouTubeEvent } from "react-youtube";
import Side from "./cards/Side";
import ShortVideo from "./cards/ShortVideo";
import SkeletonShortVideo from "./cards/SkeletonShortVideo";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import SkeletonSidebar from "./cards/SkeletonSidebar";
import SkeletonMainVideo from "./cards/SkeletonMainVideo";

const Home = () => {
  const { data: video } = useAsync(Video.LastVideo);
  const { data: home, loading } = useAsync(Video.getVideoHome);
  const { data: Group } = useAsync(Video.getGroupBy);
  const { lang } = useAuthContext();
  const navigate = useNavigate();

  const getYouTubeId = (url: string = "") => {
    if (!url) return "";
    const patterns = [
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtube\.com\/embed\/([^?]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return url;
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  // Affichage du squelette si chargement
  if (loading) {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 mt-20">
        {/* Sidebar squelette */}
        <div className="hidden md:block w-1/5 p-4 bg-white shadow-md h-screen sticky top-16 mt-4 rounded-lg">
          <SkeletonSidebar />
        </div>

        {/* Contenu principal squelette */}
        <main className="flex-1 p-4">
          <SkeletonMainVideo />

          {/* Section Dernières vidéos */}
          <section className="w-full max-w-8xl mt-6">
            <Skeleton width={250} height={30} className="mb-2" />
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonShortVideo key={i} />
              ))}
            </div>
          </section>

          {/* Groupes simulés */}
          {[1, 2, 3].map((_, idx) => (
            <section key={idx} className="w-full max-w-8xl mt-6">
              <Skeleton width={200} height={30} className="mb-2" />
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonShortVideo key={i} />
                ))}
              </div>
            </section>
          ))}

          {/* Bouton Tout voir */}
          <div className="text-center mt-6">
            <Skeleton width={120} height={40} className="rounded-full" />
          </div>
        </main>
      </div>
    );
  }

  // Affichage normal une fois chargé
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 mt-20">
      <div className="hidden md:block w-1/5 p-4 bg-white shadow-md h-screen sticky top-16 mt-4 rounded-lg">
        <Side />
      </div>

      <main className="flex-1 p-4">
        {/* Vidéo principale - version réduite */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800">
            {video?.url ? (
              <YouTube
                videoId={getYouTubeId(video.url)}
                opts={opts}
                className="absolute top-0 left-0 w-full h-full"
                iframeClassName="w-full h-full"
                onError={(error: YouTubeEvent<number>) => {
                  console.log("Erreur YouTube :", error);
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-br from-gray-800 to-gray-900">
                <svg
                  className="w-12 h-12 mb-3 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-base font-medium">
                  Vidéo temporairement indisponible
                </p>
                <p className="text-xs text-gray-400 mt-1">Revenez plus tard</p>
              </div>
            )}
          </div>

          <div className="p-4 md:p-6">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
              {video?.title ?? "Titre de la vidéo"}
            </h1>

            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {video?.created_at
                  ? date_format(video.created_at)
                  : "Date non disponible"}
              </span>
            </div>

            <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
              <p
                dangerouslySetInnerHTML={{
                  __html: limittext(
                    video?.description ?? "Aucune description disponible",
                    300,
                  ),
                }}
                className="leading-relaxed text-sm"
              />
            </div>

            {video?.tags && video.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                {video.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Dernières vidéos */}
        <section className="w-full max-w-8xl mt-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900">
            Dernières vidéos publiées
          </h2>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
            {home?.map((video: any, index: number) => (
              <div key={index} className="flex-shrink-0">
                <ShortVideo video={video} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Groupes */}
        {Group?.map((group: any, index: number) =>
          group?.videos?.length > 0 ? (
            <section key={index} className="w-full max-w-8xl mt-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900">
                {showingTranslateValue(group?.translations, lang)?.name}
              </h2>
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
                {group.videos.map((item: any, subIndex: number) => (
                  <div key={subIndex} className="flex-shrink-0">
                    <ShortVideo video={item} index={subIndex} />
                  </div>
                ))}
              </div>
            </section>
          ) : null,
        )}

        {/* Bouton Tout voir */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate(`/videos`)}
            className="px-4 py-2 border border-gray-300 rounded-full text-black hover:bg-gray-100"
          >
            Tout voir
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
