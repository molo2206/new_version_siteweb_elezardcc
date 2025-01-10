/* eslint-disable @typescript-eslint/no-explicit-any */

import { limittext } from "../../../utils/heleprs";

interface props {
  video?: any;
}
const CardCat = ({ video }: props) => {
  return (
    <div className=" bg-white  ">
      <a
        href={`/video/` + video?.id}
        key={video?.index}
        className=" dark:bg-slate-900 overflow-hidden
           w-[100px]"
      >
        <div className="relative w-full ">
          <img
            src={video?.cover}
            alt={video?.title}
            className="w-[200px] h-[400px] object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full  text-white p-4 rounded-b-lg">
            <h2 className="text-xl font-bold">{limittext(video?.title, 60)}</h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardCat;
