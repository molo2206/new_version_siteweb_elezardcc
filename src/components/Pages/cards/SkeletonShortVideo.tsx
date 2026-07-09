// components/cards/SkeletonShortVideo.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonShortVideo = () => {
  return (
    <div className="flex-shrink-0">
      <div className="relative w-[200px] overflow-hidden rounded-lg">
        <Skeleton height={400} width="100%" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
          <Skeleton width="90%" height={24} baseColor="#ffffff80" highlightColor="#ffffff40" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonShortVideo;