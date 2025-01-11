/* eslint-disable @typescript-eslint/no-explicit-any */
import useAsync from "../../hooks/useAsync";
import Video from "../../services/VideosServices";
// import YouTube from "react-youtube";
import Side from "./cards/Side";
import BlogCardLoad from "./cards/BlogCardLoad";
import { useNavigate } from "react-router-dom";
import ShortVideo from "./cards/ShortVideo";
import { limittext, showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import YouTube from "react-youtube";

const Home = () => {
  const { data: video } = useAsync(() => Video.LastVideo());
  const { data: home, loading } = useAsync(() => Video.getVideoHome());
  const { data: Group } = useAsync(() => Video.getGroupBy());
  const { lang } = useAuthContext();
  const opts = {
     width: "100%",
     height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="flex min-h-screen relative bg-white md:py-16 py-20 ">
          <div className="hidden sm:block md:hidden lg:block">
            <Side />
          </div>
          <main className="relative p-4 px-2 py-8 bg-white">
            <section className="flex-1 ">
              <div className="molo-container  rounded-lg  text-white p-4">
                <div
                  className="molobg bg-slate-800"
                  style={{
                    backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjItbWluZC0xNl8xLmpwZw.jpg")`,
                  }}
                ></div>

                <div className=" relative rounded-lg py-2 ">
                  <main className="max-w-4xl  mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Video Section */}
                    <section className="col-span-2">
                      <div className="relative w-full pb-[56.25%] py-20 bg-black rounded-lg overflow-hidden">
                        
                          <YouTube
                            videoId={video?.url}
                            opts={opts}
                            className="absolute top-0 left-0 w-full h-full  rounded-lg"
                          />
                      </div>
                      <div className="p-2 block md:hidden">
                        <h1 className="text-2xl font-extrabold text-slate-800">
                          {video?.title}
                        </h1>
                        <p
                          className=" line-clamp-6"
                          dangerouslySetInnerHTML={{
                            __html: limittext(video?.description, 200),
                          }}
                        ></p>
                        <p className="text-slate-800 mt-2">Durée : 2 min 23 s</p>
                      </div>
                    </section>

                    {/* Sidebar Section */}
                    <aside className="bg-transparent hidden md:block px-1">
                      <h1 className="text-2xl font-extrabold text-slate-800">
                        {video?.title}
                      </h1>
                      <p
                        className=" font-light"
                        dangerouslySetInnerHTML={{
                          __html: limittext(video?.description, 400),
                        }}
                      ></p>
                      <p className="text-gray-600 mt-2">Durée : 2 min 23 s</p>
                    </aside>
                  </main>
                </div>
              </div>
            </section>

            <div className=" md:w-[940px] lg:w-full w-[300px] py-4">
              <h2 className="font-semibold text-xl md:text-2xl mb-2 text-slate-900">
                Dernières vidéos publiées
              </h2>
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
                {home.map((video: any, index: any) => (
                  <div key={index} className=" flex-shrink-0">
                    <ShortVideo video={video} index={index} />
                  </div>
                ))}
              </div>
            </div>
            {Group.map(
              (video: any) =>
                video?.videos?.length > 0 && (
                  <div className="md:w-[940px]  lg:w-full w-[w-[330px] py-2">
                    <h2 className="font-semibold text-xl md:text-2xl mb-2 text-slate-900">
                      {showingTranslateValue(video?.translations, lang)?.name}
                    </h2>
                    <div className="flex space-x-2 overflow-x-auto scrollbar-hide py-2">
                      {video.videos.map((item: any, index: any) => (
                        <div key={index} className="flex-shrink-0">
                          <ShortVideo video={item} index={index} />
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
            <button
              onClick={() => navigate(`/videos`)}
              className="px-4 py-2  border border-gray-300 dark:text-white rounded-full text-black hover:bg-gray-100 focus:outline-none"
            >
              Tout voir
            </button>
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
