import useAsync from "../../hooks/useAsync";
import {
  date_format,
  limittext,
  showingTranslateValue,
} from "../../utils/heleprs";
import VideosServices from "../../services/VideosServices";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import BlogCardLoad from "./cards/BlogCardLoad";
import Side from "./cards/Side";
import { FaSearch } from "react-icons/fa";
import { useAuthContext } from "../../context";
import ShareButton from "./cards/ShareButton";

const DetailVideo = () => {
  const { id } = useParams();
  const { data: video, loading } = useAsync(
    () => VideosServices.OneVid(id),
    id
  );
  const { lang } = useAuthContext();
  // const { data: lastvideo } = useAsync(() => VideosServices.LastVideo());
  // const { data: home } = useAsync(() => VideosServices.getVideoHome());
  // const { lang } = useAuthContext();
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
          <nav className="flex justify-between items-center border-b border-gray-700 pb-4 py-10">
            <ul className="flex space-x-6 text-sm md:text-base">
              <li className="hover:underline">
                <a href="/">Accueil</a>
              </li>
              <li className="hover:underline text-blue-500">
                <a href="/videos">Vidéos</a>
              </li>
              {/* <li className="hover:underline"><a href="/podcast">Podcast</a></li> */}
              <li className="hover:underline">
                <a href="/blogs">Articles</a>
              </li>
            </ul>
            <div className="relative hidden md:block ">
              <input
                type="text"
                placeholder="Votre recherche"
                className="rounded-full px-4 py-1 text-black w-40 md:w-60"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500">
                <FaSearch />
              </button>
            </div>
          </nav>

          {/* Content */}
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            <div className="hidden md:block">
              <Side />
            </div>
            {/* Video Section */}
            <div className="flex-1">
              <div className="relative w-full h-64 md:h-96">
                <div className="relative w-full pb-[56.25%] py-20 bg-black rounded-lg overflow-hidden">
                  <YouTube
                    videoId={video?.url}
                    opts={opts}
                    className="absolute top-0 left-0 w-full h-full  rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
                {video?.title}
              </h1>
              <p className="text-blue-500 text-sm md:text-base mb-2">
                {
                  showingTranslateValue(video?.category?.translations, lang)
                    ?.name
                }
              </p>
              <p
                className=" text-slate-900 text-sm md:text-base mb-4"
                dangerouslySetInnerHTML={{
                  __html: limittext(video?.description, 200),
                }}
              ></p>
              <p className="text-sm md:text-base mb-4">
                {/* <strong>Voix :</strong> Abd Al Malik */}
                <br />
                <strong>Réalisation :</strong> équipe éditoriale (Eleza RDC,{" "}
                {date_format(video?.created_at)})
              </p>

              <div className="text-sm md:text-base">
                <p className="flex items-center mb-2">
                  Diffusion : Le {date_format(video?.created_at)}
                </p>
                <p className="flex items-center text-blue-500">
                  Disponible en replay
                  <span className="ml-2 text-gray-300">Sur Youtube</span>
                </p>
              </div>
              <ShareButton />
            </div>
            <div className=" md:hidden">
              <Side />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailVideo;
