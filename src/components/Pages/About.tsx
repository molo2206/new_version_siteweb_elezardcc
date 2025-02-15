import { useAuthContext } from "../../context";
import useAsync from "../../hooks/useAsync";
import SettingsServices from "../../services/SettingsServices";
import { showingTranslateValue } from "../../utils/heleprs";
import BlogCardLoad from "./cards/BlogCardLoad";

const About = () => {
  const { data: settings, loading } = useAsync(() =>
    SettingsServices.getSettings()
  );
  const { lang } = useAuthContext();
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogCardLoad />)
      ) : (
        <div className="bg-gray-50 mt-12">
          {/* Section À propos */}
          <div className="py-12 px-6 lg:px-16 bg-blue-50 dark:bg-slate-900  ">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10">
              <div>
                <h2 className="text-xl font-bold text-principale mb-4 dark:text-white ">
                  À propos de nous
                </h2>
                <p
                  className="text-xl font-light text-gray-700 mb-6 dark:text-white "
                  dangerouslySetInnerHTML={{
                    __html: showingTranslateValue(settings?.translations, lang)
                      ?.about_us,
                  }}
                ></p>
              </div>
              <img
                src={settings?.img_media} // Remplacez par l'URL réelle de l'image
                alt="Eleza RDC team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Section La raison d'être */}
          <div className="py-8 px-6 lg:px-16 dark:bg-slate-900">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-bold text-principale mb-4 dark:text-white">
                La raison d'être d'Eleza RDC
              </h3>
              {/* <p
                className="text-gray-700 mb-6 font-semibold dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(settings?.translations, lang)
                    ?.mission,
                }}
              ></p> */}
              <p className="text-gray-700 dark:text-white">
                Eleza RDC est une organisation non gouvernementale qui promeut
                le journalisme de qualité à travers la production des contenus
                vidéos animés par les jeunes avec un accent sur les droits
                humains, l’environnement et la lutte contre les fausses
                informations en République démocratique du Congo et la Région
                des Grands-Lacs .
              </p>
              <p
                className="text-gray-700 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(settings?.translations, lang)
                    ?.mission,
                }}
              ></p>
            </div>
          </div>

          {/* Section Nos engagements */}
          <div className="py-12 px-6 lg:px-16 bg-blue-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-principale mb-4 dark:text-white">
                Notre historique
              </h3>
              <p
                className="mb-6 dark:bg-slate-400 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(settings?.translations, lang)
                    ?.history,
                }}
              ></p>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Engagement Automatiser */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-left">
                  <h4 className="text-xl font-bold text-blue-900 mb-2 dark:text-white">
                    Filmer
                  </h4>
                  <p className="text-gray-600 dark:text-white">
                    Eleza RDC filme les gens pour plusieurs raisons, qui peuvent
                    être liées à ses objectifs en matière de communication, de
                    sensibilisation ou de documentation.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-left">
                  <h4 className="text-xl font-bold text-blue-900 mb-2 dark:text-white">
                    Plaider
                  </h4>
                  <p className="text-gray-600 dark:text-white">
                    Eleza RDC plaide pour les gens parce que c'est une
                    plateforme engagée dans la défense des droits humains, la
                    justice sociale et l'amélioration des conditions de vie des
                    populations en République démocratique du Congo (RDC).
                  </p>
                </div>

                {/* Engagement Simplifier */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-left">
                  <h4 className="text-xl font-bold text-blue-900 mb-2 dark:text-white">
                    Humaniser
                  </h4>
                  <p className="text-gray-600 dark:text-white">
                    Contexte local : En RDC, de nombreux défis sociaux
                    (pauvreté, conflits, accès à la santé, éducation, etc.) sont
                    souvent traités comme des statistiques ou des problèmes
                    abstraits. "Humaniser" permet de mettre des visages et des
                    histoires réelles derrière ces enjeux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
