// pages/Challenges.tsx
import { useState } from "react";
import {
  FaTrophy,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaChild,
  FaFemale,
  FaBalanceScale,
  FaLeaf,
  FaHeartbeat,
  FaMedal,
} from "react-icons/fa";
import { GiVolcano } from "react-icons/gi";

type Theme = "enfant" | "femme" | "droit" | "catastrophe" | "climat" | "sante";

interface Challenge {
  id: number;
  title: string;
  theme: Theme;
  description: string;
  prize: string;
  participants: number;
  endDate: Date;
  hashtag: string;
  difficulty: "Facile" | "Moyen" | "Avancé";
  image: string;
}

const themeConfig: Record<
  Theme,
  { label: string; icon: JSX.Element; color: string }
> = {
  enfant: { label: "Desk enfant", icon: <FaChild />, color: "text-blue-500" },
  femme: { label: "Desk femme", icon: <FaFemale />, color: "text-pink-500" },
  droit: {
    label: "Droit de l'homme",
    icon: <FaBalanceScale />,
    color: "text-purple-500",
  },
  catastrophe: {
    label: "Catastrophe naturelle",
    icon: <GiVolcano />,
    color: "text-red-500",
  },
  climat: {
    label: "Changement climatique",
    icon: <FaLeaf />,
    color: "text-green-500",
  },
  sante: { label: "Santé", icon: <FaHeartbeat />, color: "text-teal-500" },
};

const Challenges = () => {
  const [activeFilter, setActiveFilter] = useState<Theme | "all">("all");

  const challenges: Challenge[] = [
    {
      id: 1,
      title: "Parle-moi de ton droit préféré",
      theme: "droit",
      description:
        "Une vidéo de 1 minute expliquant un droit humain qui te touche personnellement. Utilise des témoignages, des dessins ou des mises en scène.",
      prize: "Livre sur les droits humains + goodies Eleza",
      participants: 340,
      endDate: new Date(2025, 5, 10),
      hashtag: "#MonDroit",
      difficulty: "Facile",
      image: "https://picsum.photos/id/88/400/250",
    },
    {
      id: 2,
      title: "Femmes inspirantes de ton quartier",
      theme: "femme",
      description:
        "Interview ou portrait d'une femme qui agit pour sa communauté (artisane, enseignante, militante, etc.). Format libre, max 3 min.",
      prize: "Formation en prise de parole + kit vidéo",
      participants: 890,
      endDate: new Date(2025, 5, 20),
      hashtag: "#FemmesInspirantes",
      difficulty: "Moyen",
      image: "https://picsum.photos/id/30/400/250",
    },
    {
      id: 3,
      title: "Agis pour le climat en 30 secondes",
      theme: "climat",
      description:
        "Un geste écologique simple filmé de façon créative et percutante. Pas plus de 30 secondes, avec ou sans parole.",
      prize: "Plante + kit zéro déchet + 100€",
      participants: 2100,
      endDate: new Date(2025, 5, 25),
      hashtag: "#30SecondesPourLaPlanete",
      difficulty: "Facile",
      image: "https://picsum.photos/id/29/400/250",
    },
    {
      id: 4,
      title: "Prévention des catastrophes : le message qui sauve",
      theme: "catastrophe",
      description:
        "Crée un spot de prévention (inondation, séisme, feu de forêt) accessible à tous. 45 secondes max.",
      prize: "Drone + formation secourisme",
      participants: 430,
      endDate: new Date(2025, 6, 5),
      hashtag: "#PreventionQuiSauve",
      difficulty: "Avancé",
      image: "https://picsum.photos/id/13/400/250",
    },
    {
      id: 5,
      title: "L'accès aux soins pour tous : ton témoignage",
      theme: "sante",
      description:
        "Raconte un obstacle ou une réussite liée à l'accès aux soins dans ta région. Vidéo de 2 minutes max.",
      prize: "Carte cadeau santé + suivi médical offert",
      participants: 670,
      endDate: new Date(2025, 6, 12),
      hashtag: "#SantePourTous",
      difficulty: "Moyen",
      image: "https://picsum.photos/id/116/400/250",
    },
    {
      id: 6,
      title: "Les droits de l'enfant illustrés",
      theme: "enfant",
      description:
        "Choisis un droit de l'enfant (éducation, protection, loisirs) et illustre-le par une courte animation ou saynète.",
      prize: "Tablette graphique + abonnement atelier créatif",
      participants: 1120,
      endDate: new Date(2025, 5, 30),
      hashtag: "#DroitsDesEnfants",
      difficulty: "Moyen",
      image: "https://picsum.photos/id/76/400/250",
    },
  ];

  const filteredChallenges =
    activeFilter === "all"
      ? challenges
      : challenges.filter((c) => c.theme === activeFilter);

  const getDifficultyBadge = (difficulty: string) => {
    const styles = {
      Facile:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Moyen:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Avancé: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };
    return styles[difficulty as keyof typeof styles];
  };

  const daysRemaining = (endDate: Date) => {
    const diff = Math.ceil(
      (endDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24),
    );
    return diff > 0 ? `${diff} jours restants` : "Terminé";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec visuel */}
        <div className="relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-r from-principale to-blue-700 p-8 text-white">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <FaTrophy /> Défis Vidéo Engagés
            </h1>
            <p className="mt-2 text-blue-100 max-w-xl">
              Participe, crée du contenu utile et gagne des prix. Les meilleures
              vidéos sont récompensées chaque mois.
            </p>
            <button className="mt-4 bg-white text-principale px-5 py-2 rounded-full font-semibold hover:shadow-lg transition">
              Proposer un défi
            </button>
          </div>
        </div>

        {/* Filtres par thème */}
        <div className="flex flex-wrap gap-2 mb-6 border-b dark:border-slate-700 pb-4">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              activeFilter === "all"
                ? "bg-principale text-white"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
            }`}
          >
            Tous les défis
          </button>
          {Object.entries(themeConfig).map(([key, { label, icon, color }]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key as Theme)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition ${
                activeFilter === key
                  ? "bg-principale text-white"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
              }`}
            >
              <span className={color}>{icon}</span> {label}
            </button>
          ))}
        </div>

        {/* Grille des défis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group flex flex-col"
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className={themeConfig[challenge.theme].color}>
                      {themeConfig[challenge.theme].icon}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {challenge.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyBadge(
                      challenge.difficulty,
                    )}`}
                  >
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2 flex-1">
                  {challenge.description}
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaMedal className="text-yellow-500" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {challenge.prize}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers />
                    <span>
                      {challenge.participants.toLocaleString()} participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{daysRemaining(challenge.endDate)}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-principale font-mono text-sm">
                    {challenge.hashtag}
                  </span>
                  <button className="flex items-center gap-1 text-principale hover:gap-2 transition-all text-sm font-medium">
                    Participer <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section comment ça marche */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-6">
            ✨ Comment participer ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-principale/10 text-principale w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold">Choisis un défi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Parcours les défis actifs et sélectionne celui qui te motive.
              </p>
            </div>
            <div>
              <div className="bg-principale/10 text-principale w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold">Crée ta vidéo</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Utilise le hashtag officiel et suis les règles du défi.
              </p>
            </div>
            <div>
              <div className="bg-principale/10 text-principale w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold">Soumets & gagne</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Dépose ta vidéo sur la plateforme. Les votes et le jury
                désignent les gagnants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
