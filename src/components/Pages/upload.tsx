// pages/Upload.tsx
import { useState, useRef } from "react";
import {
  FaUpload,
  FaVideo,
  FaTimes,
  FaChild,
  FaFemale,
  FaBalanceScale,
  FaLeaf,
  FaHeartbeat,
  FaInfoCircle,
} from "react-icons/fa";

import { GiVolcano } from "react-icons/gi";

type Theme = "enfant" | "femme" | "droit" | "catastrophe" | "climat" | "sante";

const themes: {
  value: Theme;
  label: string;
  icon: JSX.Element;
  description: string;
}[] = [
  {
    value: "enfant",
    label: "Desk enfant",
    icon: <FaChild />,
    description: "Droits de l'enfant, éducation, protection, loisirs",
  },
  {
    value: "femme",
    label: "Desk femme",
    icon: <FaFemale />,
    description: "Égalité des genres, autonomisation, santé féminine",
  },
  {
    value: "droit",
    label: "Droit de l'homme",
    icon: <FaBalanceScale />,
    description: "Libertés fondamentales, justice, discriminations",
  },
  {
    value: "catastrophe",
    label: "Catastrophe naturelle",
    icon: <GiVolcano  />,
    description: "Prévention, gestion de crise, solidarité",
  },
  {
    value: "climat",
    label: "Changement climatique",
    icon: <FaLeaf />,
    description: "Environnement, actions écologiques, sensibilisation",
  },
  {
    value: "sante",
    label: "Santé",
    icon: <FaHeartbeat />,
    description: "Prévention, accès aux soins, bien-être",
  },
];

const Upload = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState<Theme>("enfant");
  const [visibility, setVisibility] = useState<
    "public" | "unlisted" | "private"
  >("public");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbInputRef = useRef<HTMLInputElement>(null);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Vérification taille max 2 Go
      if (file.size > 2 * 1024 * 1024 * 1024) {
        setError("La vidéo ne doit pas dépasser 2 Go");
        return;
      }
      setVideoFile(file);
      setError("");
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnailFile(e.target.files[0]);
    }
  };

  const removeVideo = () => {
    setVideoFile(null);
    if (videoInputRef.current) videoInputRef.current.value = "";
  };

  const removeThumbnail = () => {
    setThumbnailFile(null);
    if (thumbInputRef.current) thumbInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) {
      setError("Veuillez sélectionner une vidéo");
      return;
    }
    if (!title.trim()) {
      setError("Veuillez donner un titre à votre vidéo");
      return;
    }

    setIsUploading(true);
    setError("");
    // Simulation d'envoi avec progression
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 200));
      setUploadProgress(i);
    }
    // Ici, faire un vrai appel API avec FormData
    alert("Vidéo publiée avec succès !");
    // Reset
    setVideoFile(null);
    setThumbnailFile(null);
    setTitle("");
    setDescription("");
    setUploadProgress(0);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <FaUpload className="text-principale" />
          Publier une vidéo
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Partage ton talent et sensibilise sur les grandes causes. Tous les
          contenus sont modérés.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Zone vidéo */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <label className="block font-semibold mb-2 text-gray-900 dark:text-white">
              Fichier vidéo *
            </label>
            {!videoFile ? (
              <div
                onClick={() => videoInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-principale transition"
              >
                <FaVideo className="mx-auto text-4xl text-gray-400 mb-3" />
                <p className="text-gray-600 dark:text-gray-400">
                  Clique ou glisse-dépose une vidéo
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  MP4, MOV, AVI (max 2 Go)
                </p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  ref={videoInputRef}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
                <FaVideo className="text-principale" />
                <span className="text-sm truncate flex-1">
                  {videoFile.name}
                </span>
                <button
                  type="button"
                  onClick={removeVideo}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </div>

          {/* Miniature */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <label className="block font-semibold mb-2 text-gray-900 dark:text-white">
              Miniature (optionnelle)
            </label>
            {!thumbnailFile ? (
              <div
                onClick={() => thumbInputRef.current?.click()}
                className="border border-gray-300 dark:border-slate-600 rounded-lg p-4 text-center cursor-pointer hover:border-principale"
              >
                <p className="text-sm text-gray-500">
                  Choisir une image (recommandé)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  ref={thumbInputRef}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
                <img
                  src={URL.createObjectURL(thumbnailFile)}
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="text-sm truncate flex-1">
                  {thumbnailFile.name}
                </span>
                <button
                  type="button"
                  onClick={removeThumbnail}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </div>

          {/* Titre */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <label className="block font-semibold mb-2 text-gray-900 dark:text-white">
              Titre de la vidéo *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Comment lutter contre les violences faites aux femmes"
              className="w-full border dark:border-slate-600 rounded-lg px-4 py-2 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-principale focus:border-transparent"
              required
            />
          </div>

          {/* Description */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <label className="block font-semibold mb-2 text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décris ta vidéo, ajoute des liens utiles, des sources, etc."
              className="w-full border dark:border-slate-600 rounded-lg px-4 py-2 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-principale"
            />
          </div>

          {/* Thème */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <label className="block font-semibold mb-3 text-gray-900 dark:text-white">
              Thème principal *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {themes.map((t) => (
                <label
                  key={t.value}
                  className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition ${
                    theme === t.value
                      ? "border-principale bg-principale/5 dark:bg-principale/10"
                      : "border-gray-200 dark:border-slate-700 hover:border-principale"
                  }`}
                >
                  <input
                    type="radio"
                    name="theme"
                    value={t.value}
                    checked={theme === t.value}
                    onChange={() => setTheme(t.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-white">
                      {t.icon}
                      {t.label}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {t.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Visibilité */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">
            <label className="block font-semibold mb-3 text-gray-900 dark:text-white">
              Visibilité
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="public"
                  checked={visibility === "public"}
                  onChange={() => setVisibility("public")}
                />
                <span>Public (visible par tous)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="unlisted"
                  checked={visibility === "unlisted"}
                  onChange={() => setVisibility("unlisted")}
                />
                <span>Non répertoriée (seulement via lien)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="private"
                  checked={visibility === "private"}
                  onChange={() => setVisibility("private")}
                />
                <span>Privée (seulement moi)</span>
              </label>
            </div>
          </div>

          {/* Message d'erreur */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
              <FaInfoCircle /> {error}
            </div>
          )}

          {/* Progression */}
          {isUploading && (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4">
              <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-principale transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Publication en cours... {uploadProgress}%
              </p>
            </div>
          )}

          {/* Boutons */}
          <div className="flex justify-end gap-3 pb-10">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-300 dark:border-slate-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={!videoFile || !title || isUploading}
              className="px-6 py-2 bg-principale text-white rounded-full font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isUploading ? "Publication..." : "Publier"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
