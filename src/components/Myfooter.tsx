import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Myfooter = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { data: address } = useAsync(() => SettingsServices.getAdresse());

  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }

  const [currentDate] = useState(getDate());

  return (
    <footer className="bg-principale dark:bg-slate-800 dark:text-white text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Objectif Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Eleza RDC</h3>
          <p className="text-sm md:text-base mb-4">
            Est une organisation non gouvernementale qui promeut le journalisme
            de qualité à travers la production des contenus vidéos animés par
            les jeunes avec un accent sur les droits humains, l’environnement et
            la lutte contre les fausses informations en République démocratique
            du Congo et la Région des Grands-Lacs.
          </p>
        </div>

        {/* Autres Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Autres</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-sm md:text-base">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/newsletter-inscription"
                className="hover:underline text-sm md:text-base"
              >
                La newsletter
              </a>
            </li>
          </ul>
        </div>

        {/* À Propos Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">À propos</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline text-sm md:text-base">
                À propos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline text-sm md:text-base"
              >
                Nous contacter
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contactez-nous !</h3>
          <p className="mb-2">
            <span className="block text-sm md:text-base">
              {address?.adresse +
                "/" +
                address?.city +
                "/" +
                address?.country?.name}
            </span>
          </p>
          <p className="mb-2">
            <a
              href={"tel:" + address?.phones}
              className="hover:underline text-sm md:text-base"
            >
              {address?.phones}
            </a>
          </p>
          <p>
            <a
              href={"mailto:" + address?.emails}
              className="hover:underline text-sm md:text-base"
            >
              {address?.emails}
            </a>
          </p>
        </div>
      </div>

      {/* Donation Section */}
      <div className="text-center my-8 px-4">
        <h3 className="font-bold text-lg text-white mb-4">
          Soutenez notre mission
        </h3>
        <p className="text-sm text-white mb-4 max-w-3xl mx-auto">
          Chaque jour, nous luttons contre la désinformation en vous apportant
          des faits vérifiés et une information fiable. Mais pour continuer,
          nous avons besoin de vous : un journalisme indépendant ne peut exister
          sans votre soutien.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Faire un Don
        </a>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
          <a
            target="_blank"
            href={JSON.parse(data?.social_links || "{}")?.facebook}
            className="text-white text-xl font-light hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            href={JSON.parse(data?.social_links || "{}")?.twitter}
            className="text-white text-xl font-light hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            href={JSON.parse(data?.social_links || "{}")?.linkedin}
            className="text-white text-xl font-light hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="py-4 font-light text-xs text-white/70">
          {data?.app_name} © {currentDate}
        </p>
      </div>

      {/* Legal Links Section */}
      <div className="mt-6 text-center text-sm text-white/80 space-x-4">
        <a
          href="/privacy-policy"
          className="hover:underline hover:text-white transition"
        >
          Politique de confidentialité
        </a>
        <span>|</span>
        <a
          href="/terms-and-conditions"
          className="hover:underline hover:text-white transition"
        >
          Conditions d'utilisation
        </a>
      </div>
    </footer>
  );
};

export default Myfooter;
