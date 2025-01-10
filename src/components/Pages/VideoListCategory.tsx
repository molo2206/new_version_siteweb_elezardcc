/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import useAsync from "../../hooks/useAsync";
import VideosServices from "../../services/VideosServices";
import CardCat from "./cards/CardCat";
import Side from "./cards/Side";
import CategoryServices from "../../services/CategoryServices";
import { useAuthContext } from "../../context";
import { showingTranslateValue } from "../../utils/heleprs";
import BlogCardLoad from "./cards/BlogCardLoad";
import SearchFormVideo from "./cards/SearchFormVideo";
const VideoListCategory = () => {
  const { id } = useParams();
  const { data: video, loading } = useAsync(
    () => VideosServices.getByCategory(id),
    id
  );
  const { data: onecat } = useAsync(
    () => CategoryServices.getOneCategory(id),
    id
  );
  const { lang } = useAuthContext();

  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="text-slate-800 bg-white min-h-screen px-4 md:px-16 py-20">
          <SearchFormVideo
            title={showingTranslateValue(onecat?.translations, lang)?.name}
          />
          <div className="flex flex-col md:flex-row mt-8 gap-8">
            <div className="hidden md:block">
              <Side />
            </div>
            <div className="flex-1">
              <div className="relative w-full h-64 md:h-96">
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                  {video.map((video: any, index: any) => (
                    <div key={index} className=" flex-shrink-0">
                      <CardCat video={video} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" md:hidden py-36">
              <Side />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoListCategory;
