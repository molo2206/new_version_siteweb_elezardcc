/* eslint-disable @typescript-eslint/no-explicit-any */
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Myfooter = () => {
  const { data: settings, loading: settingsLoading } = useAsync(() => SettingsServices.getSettings());

  const getAddressSafe = async () => {
    if (SettingsServices.getAdresse) {
      return await SettingsServices.getAdresse();
    }
    return null;
  };
  const { data: address, loading: addressLoading } = useAsync(getAddressSafe, []);

  let socialLinks = { facebook: "", twitter: "", linkedin: "", youtube: "", tiktok: "", instagram: "" };
  if (settings?.social_links) {
    try {
      socialLinks = JSON.parse(settings.social_links);
    } catch (e) {
      console.error("Erreur de parsing JSON des liens sociaux", e);
    }
  }

  const currentYear = new Date().getFullYear();

  if (settingsLoading || addressLoading) {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} width={200} height={20} baseColor="#374151" highlightColor="#4B5563" />
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Première ligne : tous les blocs sur une seule ligne (flex responsive) */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Bloc 1 : Nom et description courte */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-lg font-bold mb-2 tracking-tight">Eleza RDC</h3>
            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              ONG promouvant le journalisme de qualité par les jeunes – droits humains, environnement, lutte contre la désinformation.
            </p>
          </div>

          {/* Bloc 2 : Liens rapides */}
          <div>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">Notre histoire</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Nous contacter</a></li>
            </ul>
          </div>

          {/* Bloc 3 : Coordonnées */}
          <div className="text-sm space-y-1">
            {address ? (
              <>
                <p className="opacity-80">{address.adresse || address.address}, {address.city}</p>
                <p><a href={`tel:${address.phones || address.phone}`} className="hover:text-white transition-colors">{address.phones || address.phone}</a></p>
                <p><a href={`mailto:${address.emails || address.email}`} className="hover:text-white transition-colors">{address.emails || address.email}</a></p>
              </>
            ) : (
              <p className="opacity-60">Adresse non disponible</p>
            )}
          </div>

          {/* Bloc 4 : Bouton don */}
          <div>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-principale to-blue-600 text-white font-semibold py-2 px-5 rounded-full text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Faire un don
            </a>
          </div>
        </div>

        {/* Deuxième ligne : réseaux sociaux + copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-5">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaFacebook />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaTwitter />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaLinkedin />
              </a>
            )}
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaYoutube />
              </a>
            )}
            {socialLinks.tiktok && (
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaTiktok />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaInstagram />
              </a>
            )}
          </div>
          <p className="text-xs opacity-60">
            {settings?.app_name || "Eleza RDC"} © {currentYear} – Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Myfooter;