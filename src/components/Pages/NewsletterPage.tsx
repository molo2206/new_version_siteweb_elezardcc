
const NewsletterPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 dark:bg-slate-900 ">
      {/* Section principale */}
      <div className=" mx-auto mt-8 px-8 md:px-8 md:py-2">
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-slate-800">
          {/* Section gauche */}
          <div className="flex flex-wrap lg:flex-nowrap items-center">
            <div className="lg:w-2/3 w-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
                L'édito d'Eleza RDC
              </h1>
              <p className="text-gray-600 text-lg mb-6 dark:text-white">
                Une semaine sur deux, recevez des notifications et ressources
                intéressantes!
              </p>
              <ul className="text-gray-700 mb-8 space-y-2 dark:text-white">
                <li>✅ La mise en avant d'un sujet précis</li>
                <li>
                  ✅ Des infos et outils pour vous aider à gagner en visibilité
                </li>
                <li>✅ Les meilleurs conseils des experts Simplébo</li>
                <li>✅ Les derniers articles parus sur le blog</li>
                <li>✅ L'actu du digital</li>
              </ul>
              <p className="text-gray-600 dark:text-white">
                À bientôt dans vos boîtes mails 😊
              </p>
              <p className="text-sm text-gray-500 mt-4 dark:text-white">
                En renseignant votre adresse e-mail, vous consentez à recevoir
                des informations de Simplébo par voie électronique. Vous pourrez
                vous désinscrire à tout moment à travers les liens de
                désinscription.
              </p>
            </div>

            {/* Section droite */}
            <div className="lg:w-1/3 w-full mt-10 lg:mt-0 ">
              <div className="bg-principale dark:bg-slate-950 text-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">
                  Recevoir l'actualité du web par mail
                </h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="prenom" className="block text-sm mb-2">
                      Prénom*
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      className="w-full p-2 rounded border border-gray-300"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="nom" className="block text-sm mb-2">
                      Nom*
                    </label>
                    <input
                      type="text"
                      id="nom"
                      className="w-full p-2 rounded border border-gray-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2">
                      E-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 rounded border border-gray-300"
                      placeholder="Votre email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-500"
                      />
                      <span className="ml-2 text-sm">
                        J'accepte de recevoir d'autres communications d'Eleza RDC.
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100"
                  >
                    M'inscrire à la newsletter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 ">
          <h2
            className="text-2xl font-bold
           text-gray-800 mb-6 dark:text-white"
          >
            Questions fréquentes sur notre newsletter
          </h2>
          <div className="space-y-4">
            <details className="bg-white dark:bg-slate-800 shadow rounded-lg p-4">
              <summary className="font-semibold cursor-pointer text-gray-800 dark:text-white ">
                Quel est le rythme d'envoi ?
              </summary>
              <p className="mt-2 text-gray-600 dark:text-white ">
                Une semaine sur deux, pour vous laisser le temps de profiter des
                conseils et outils envoyés !
              </p>
            </details>
            <details className="bg-white dark:bg-slate-800 shadow rounded-lg p-4">
              <summary className="font-semibold cursor-pointer text-gray-800 dark:text-white">
                Quels sont les sujets abordés ?
              </summary>
              <p className="mt-2 text-gray-600 dark:text-white">
                Nous abordons des sujets liés aux enfants, droits de l'homme,
                catastrophe naturelle etc ...
              </p>
            </details>
            <details className="bg-white dark:bg-slate-800 shadow rounded-lg p-4">
              <summary className="font-semibold cursor-pointer text-gray-800 dark:text-white">
                Pourquoi vous inscrire à notre newsletter ?
              </summary>
              <p className="mt-2 text-gray-600 dark:text-white">
                Pour rester à jour sur les meilleures pratiques et astuces pour
                développer votre présence en ligne !
              </p>
            </details>
            <details className="bg-white dark:bg-slate-800 shadow rounded-lg p-4">
              <summary className="font-semibold cursor-pointer text-gray-800 dark:text-white">
                Qui est Eleza RDC ?
              </summary>
              <p className="mt-2 text-gray-600 dark:text-white">
                Eleza RDC est une organisation non gouvernementale qui promeut
                le journalisme de qualité à travers la production indépendante
                des contenus vidéos avec un accent sur les droits humains,
                l’environnement, et le fact-checking en République démocratique
                du Congo.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
