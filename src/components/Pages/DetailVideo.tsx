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
import { useAuthContext } from "../../context";
import ShareButton from "./cards/ShareButton";
import SearchFormVideo from "./cards/SearchFormVideo";

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
          <SearchFormVideo
            title={
              showingTranslateValue(video?.category?.translations, lang)?.name
            }
          />
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            <div className="hidden md:block">
              <Side />
            </div>
            <div className="flex-1">
              <div className="">
                <ul className="flex space-x-6 text-sm md:text-base">
                  <li className="hover:underline">
                    <a href="/">Accueil</a>
                  </li>
                  <li className="hover:underline text-blue-500">
                    <a href="/videos">Vidéos</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/blogs">Articles</a>
                  </li>
                </ul>
              </div>
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
              <h1 className="text-2xl py-2 md:text-4xl font-bold mb-4 text-slate-900">
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
                <p className="flex items-center text-blue-500 sm:justify-between ">
                  Disponible en replay :
                  <span className="ml-2 text-gray-300">Sur Youtube</span>
                  <ShareButton />
                </p>
              </div>
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
