/* eslint-disable @typescript-eslint/no-explicit-any */
interface props {
  items?: any;
}

const CardVideo = ({ items }: props) => {
  return (
    <div className="mx-auto relative mb-12 cursor-pointer group">
      <iframe
        height="350"
        width="460"
        src={items?.VideoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-md max-h-full max-w-full shadow-md group-hover:shadow-lg transition-shadow"
      ></iframe>
      <div className="text-center px-4 bg-white dark:bg-slate-800 shadow-lg rounded-md md:w-4/4 mx-auto absolute left-0 right-0 -bottom-18">
        <h3 className="my-3 hover:text-principale line-clamp-2 font-semibold text-gray-800 dark:text-white">
          {items?.snippet?.title}
        </h3>
      </div>
    </div>
  );
};

export default CardVideo;