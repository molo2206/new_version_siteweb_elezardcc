/* eslint-disable @typescript-eslint/no-explicit-any */
import { limittext } from "../../../utils/heleprs";

interface Props {
  video: any;
  rank?: number; // pour afficher le top 3
}

const TrendingCard = ({ video, rank }: Props) => {
  // Déterminer le thème à partir de la catégorie de la vidéo (à adapter selon votre API)
  // On suppose que video.category contient l'id ou le nom du thème
  // On utilise une correspondance approximative. À ajuster.

  const thumbnail =
    video?.cover || video?.thumbnail || "https://via.placeholder.com/400x225";

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
      <a href={`/video/${video?.id}`} className="block">
        <div className="relative">
          <img
            src={thumbnail}
            alt={video?.title}
            className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
          />
          {rank && rank <= 3 && (
            <div className="absolute top-2 left-2 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded-full">
              #{rank}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
            {limittext(video?.title, 60)}
          </h3>
          
        </div>
      </a>
    </div>
  );
};

export default TrendingCard;
