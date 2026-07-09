// src/components/cards/SkeletonMainVideo.tsx
import Skeleton from "react-loading-skeleton";

const SkeletonMainVideo = () => {
  return (
    <section className="bg-white p-4 shadow-md rounded-lg">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
        <Skeleton height="100%" width="100%" />
      </div>
      <div className="mt-4">
        <Skeleton width="60%" height={24} />
        <Skeleton count={2} className="mt-2" />
        <Skeleton width="40%" height={16} className="mt-2" />
      </div>
    </section>
  );
};

export default SkeletonMainVideo;