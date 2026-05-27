import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const Myfooter = () => {
  // Un seul appel pour les réglages généraux (on peut inclure l'adresse dedans ou appeler séparément)
  const { data: settings, loading: settingsLoading, error: settingsError } = useAsync(() => SettingsServices.getSettings());
  const { data: address, loading: addressLoading, error: addressError } = useAsync(() => SettingsServices.getAdresse());

  // Récupération sécurisée des réseaux sociaux
  let socialLinks = { facebook: "", twitter: "", linkedin: "", youtube: "", tiktok: "", instagram: "" };
  try {
    if (settings?.social_links) {
      socialLinks = JSON.parse(settings.social_links);
    }
  } catch (e) {
    console.error("Erreur de parsing des liens sociaux", e);
  }

  const currentYear = new Date().getFullYear();

  // Affichage d'un état de chargement minimal (optionnel)
  if (settingsLoading || addressLoading) {
    return (
      <footer className="bg-principale dark:bg-slate-800 text-white py-10 text-center">
        <div className="animate-pulse">Chargement...</div>
      </footer>
    );
  }

  if (settingsError || addressError) {
    console.error(settingsError || addressError);
  }

  return (
    <footer className="bg-principale dark:bg-slate-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section À propos / Mission */}
          <div>
            <h3 className="font-bold text-xl mb-4 tracking-tight">Eleza RDC</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Organisation non gouvernementale qui promeut le journalisme de qualité
              à travers des contenus vidéo animés par les jeunes. Focalisée sur les
              droits humains, l’environnement et la lutte contre la désinformation
              en RDC et dans les Grands Lacs.
            </p>
          </div>

          {/* Liens utiles pour vidéastes */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pour les vidéastes</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/upload" className="hover:underline transition">Publier une vidéo</a></li>
              <li><a href="/challenges" className="hover:underline transition">Défis en cours</a></li>
              <li><a href="" className="hover:underline transition">Boîte à outils</a></li>
              <li><a href="" className="hover:underline transition">Règles de la communauté</a></li>
              <li><a href="" className="hover:underline transition">FAQ – Aide</a></li>
            </ul>
          </div>

          {/* Liens légaux & entreprise */}
          <div>
            <h3 className="font-bold text-lg mb-4">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline transition">Notre histoire</a></li>
              <li><a href="/contact" className="hover:underline transition">Nous contacter</a></li>
              <li><a href="" className="hover:underline transition">Politique de confidentialité</a></li>
              <li><a href="" className="hover:underline transition">Conditions d’utilisation</a></li>
              <li><a href="" className="hover:underline transition">Newsletter</a></li>
            </ul>
          </div>

          {/* Contact & adresse */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
            {address && (
              <>
                <p className="text-sm opacity-90 mb-2">
                  {address.adresse}, {address.city}, {address.country?.name}
                </p>
                <p className="text-sm mb-1">
                  <a href={`tel:${address.phones}`} className="hover:underline">
                    📞 {address.phones}
                  </a>
                </p>
                <p className="text-sm">
                  <a href={`mailto:${address.emails}`} className="hover:underline">
                    ✉️ {address.emails}
                  </a>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Bandeau soutien */}
        <div className="my-8 text-center border-t border-white/20 pt-8">
          <h3 className="font-bold text-xl mb-2">Soutenez notre mission</h3>
          <p className="text-sm opacity-90 max-w-2xl mx-auto mb-4">
            Pour un journalisme indépendant et une information fiable, nous avons besoin de vous.
            Faites un don et aidez-nous à former la prochaine génération de vidéastes engagés.
          </p>
          <a
            href=""
            className="inline-block bg-white text-principale font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-105"
          >
            Faire un don
          </a>
        </div>

        {/* Réseaux sociaux + copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/20 text-sm">
          <div className="flex space-x-5 mb-3 md:mb-0">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {/* Icônes supplémentaires si disponibles */}
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl">
                <FaYoutube />
              </a>
            )}
            {socialLinks.tiktok && (
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl">
                <FaTiktok />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 text-xl">
                <FaInstagram />
              </a>
            )}
          </div>
          <p className="text-xs opacity-75">
            {settings?.app_name || "Eleza RDC"} © {currentYear} – Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Myfooter;