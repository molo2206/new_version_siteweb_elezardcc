import { limittext } from "../../../utils/heleprs";

interface Props {
  video?: {
    id: string;
    cover: string;
    title: string;
  };
  index?: number;
}

const ShortVideo = ({ video, index }: Props) => {
  return (
    <div className="bg-white">
      <a
        href={`/video/${video?.id}`}
        key={index}
        className="dark:bg-slate-900 overflow-hidden w-[100px]"
      >
        <div className="relative w-full">
          <img
            src={video?.cover}
            alt={video?.title}
            className="w-[200px] h-[400px] object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full text-white p-4 rounded-b-lg bg-gradient-to-t from-black/60 to-transparent">
          <h2 className="text-xl font-bold">{limittext(video?.title ?? "", 60)}</h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ShortVideo;
