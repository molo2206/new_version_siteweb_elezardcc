// src/components/skeletons/SkeletonSidebar.tsx
import Skeleton from "react-loading-skeleton";

const SkeletonSidebar = () => {
  return (
    <div className="p-4 space-y-4">
      <Skeleton height={30} width="80%" />
      <Skeleton height={20} count={5} />
      <Skeleton height={30} width="80%" />
      <Skeleton height={20} count={3} />
    </div>
  );
};

export default SkeletonSidebar;