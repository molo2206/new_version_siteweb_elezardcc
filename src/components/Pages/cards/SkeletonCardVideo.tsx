// src/components/Pages/cards/SkeletonCardVideo.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCardVideo = () => {
  return (
    <div className="mx-auto relative mb-12 cursor-pointer">
      <Skeleton height={350} width="100%" className="rounded-md" />
      <div className="text-center px-4 bg-white dark:bg-slate-800 shadow-lg rounded-md md:w-4/4 mx-auto absolute left-0 right-0 -bottom-18">
        <Skeleton width="80%" height={24} className="mx-auto my-2" />
      </div>
    </div>
  );
};

export default SkeletonCardVideo;