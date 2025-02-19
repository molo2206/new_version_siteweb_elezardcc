import { useAuthContext } from "../../context";
import useAsync from "../../hooks/useAsync";
import SettingsServices from "../../services/SettingsServices";
import { showingTranslateValue } from "../../utils/heleprs";
import BlogCardLoad from "./cards/BlogCardLoad";

const About = () => {
  const { data: settings, loading } = useAsync(() => SettingsServices.getSettings());
  const { lang } = useAuthContext();

  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map((_, index) => <BlogCardLoad key={index} />)
      ) : (
        <div className="bg-gray-100 mt-12 text-gray-800 dark:bg-gray-900 dark:text-white">
          {/* Section À propos */}
          <div className="py-12 px-6 lg:px-16 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-4 dark:text-blue-400">
                  À propos de nous
                </h2>
                <p
                  className="text-lg font-light leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: showingTranslateValue(settings?.translations, lang)?.about_us,
                  }}
                ></p>
              </div>
              <img
                src={settings?.img_media}
                alt="Eleza RDC team"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Section La raison d'être */}
          <div className="py-12 px-6 lg:px-16 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mt-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                La raison d'être d'Eleza RDC
              </h3>
              <p className="text-lg leading-relaxed">
                Eleza RDC est une organisation qui promeut le journalisme de qualité à travers des contenus animés
                par les jeunes, mettant l'accent sur les droits humains, l’environnement et la lutte contre les
                fausses informations en République démocratique du Congo et la Région des Grands Lacs.
              </p>
            </div>
          </div>

          {/* Section Notre historique */}
          <div className="py-12 px-6 lg:px-16 bg-white dark:bg-gray-800 shadow-md rounded-lg mt-8">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Notre historique
              </h3>
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{
                __html: showingTranslateValue(settings?.translations, lang)?.history,
              }}></p>
            </div>
          </div>

          {/* Section Nos engagements */}
          <div className="py-12 px-6 lg:px-16 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg mt-8">
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
              {[
                { title: "Filmer", content: "Eleza RDC filme les gens pour sensibiliser et documenter la réalité du terrain." },
                { title: "Plaider", content: "Nous plaidons pour les droits humains et la justice sociale en RDC." },
                { title: "Humaniser", content: "Nous mettons en avant les histoires réelles pour illustrer les enjeux sociaux." },
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-left">
                  <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
