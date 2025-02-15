/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import Video from "../../services/VideosServices";
import { useAuthContext } from "../../context";
import { limittext, showingTranslateValue } from "../../utils/heleprs";
import YouTube from "react-youtube";
import Side from "./cards/Side";
import BlogCardLoad from "./cards/BlogCardLoad";
import ShortVideo from "./cards/ShortVideo";

const Home = () => {
  const { data: video } = useAsync(Video.LastVideo);
  const { data: home, loading } = useAsync(Video.getVideoHome);
  const { data: Group } = useAsync(Video.getGroupBy);
  const { lang } = useAuthContext();
  const navigate = useNavigate();

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <>
      {loading ? (
        Array.from({ length: 20 }).map((_, index) => (
          <BlogCardLoad key={index} />
        ))
      ) : (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white mt-20">
          {/* Sidebar (caché sur mobile) */}
          <div className="hidden md:block w-1/4 lg:w-1/5">
            <Side />
          </div>

          {/* Contenu principal */}
          <main className="flex-1 p-4 bg-white">
            {/* Section principale avec la vidéo */}
            <section className="flex flex-col items-center">
              <div className="w-full max-w-8xl">
                <div className="relative w-full h-[250px] md:h-[450px] lg:h-[600px] bg-black rounded-lg overflow-hidden">
                  {video?.url ? (
                    <YouTube
                      videoId={video.url}
                      opts={opts}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Vidéo indisponible
                    </div>
                  )}
                </div>

                <div className="p-4 text-center md:text-left">
                  <h1 className="text-2xl font-bold text-slate-800">
                    {video?.title ?? "Titre inconnu"}
                  </h1>
                  <p
                    className="text-gray-700 mt-2"
                    dangerouslySetInnerHTML={{
                      __html: limittext(video?.description ?? "", 200),
                    }}
                  ></p>
                  <p className="text-gray-600 mt-2">Durée : 2 min 23 s</p>
                </div>
              </div>
            </section>

            {/* Section des vidéos récentes */}
            <section className="w-full max-w-8xl mt-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900">
                Dernières vidéos publiées
              </h2>
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
                {home.map((video: any, index: number) => (
                  <div key={index} className="flex-shrink-0">
                    <ShortVideo video={video} index={index} />
                  </div>
                ))}
              </div>
            </section>

            {/* Sections des groupes de vidéos */}
            {Group.map((group: any, index: number) =>
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
              ) : null
            )}

            {/* Bouton voir plus */}
            <div className="text-center mt-6">
              <button
                onClick={() => navigate(`/videos`)}
                className="px-4 py-2 border border-gray-300 rounded-full text-black hover:bg-gray-100 focus:outline-none"
              >
                Tout voir
              </button>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
