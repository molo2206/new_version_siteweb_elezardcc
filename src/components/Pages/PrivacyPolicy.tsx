import aboutImage from "../../assets/ban3.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="dark:from-black dark:to-[#15202b] text-black dark:text-white">
      {/* Banner */}
      <div className="relative  w-full h-[300px] md:h-[400px]">
        <img
          src={aboutImage}
          alt="Bannière Politique de Confidentialité"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4 drop-shadow-lg">
            Politique de confidentialité
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="py-4 px-4 sm:px-8 lg:px-64">
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg p-8 md:p-12 space-y-10 text-gray-800 dark:text-gray-300">
          <p className="text-base leading-relaxed">
            Chez{" "}
            <span className="font-semibold text-black dark:text-white">
              Eleza RDC
            </span>
            , nous nous engageons à protéger votre vie privée. Cette politique
            explique comment nous collectons, utilisons et protégeons vos
            informations lorsque vous utilisez nos services.
          </p>

          <section className="space-y-10 text-[15px] leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                1. Informations collectées
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Nom et prénom</li>
                <li>Email</li>
                <li>Téléphone</li>
                <li>Adresse IP et données de navigation</li>
                <li>Données fournies volontairement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                2. Utilisation des données
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Amélioration de nos services</li>
                <li>Envoi de communications</li>
                <li>Gestion de votre abonnement à la newsletter</li>
                <li>Analyse du trafic et de l’usage du site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                3. Partage des données
              </h2>
              <p>
                Nous ne partageons pas vos données personnelles, sauf avec des
                prestataires de confiance, dans le cadre strict de nos services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                4. Sécurité
              </h2>
              <p>
                Nous mettons en place des mesures techniques pour sécuriser vos
                données. Néanmoins, aucun système n’est infaillible.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                5. Vos droits
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Accès à vos données</li>
                <li>Modification ou suppression de vos données</li>
                <li>Opposition à certains traitements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                6. Modifications
              </h2>
              <p>
                Cette politique peut être modifiée. Toute modification sera
                affichée ici, avec la date de mise à jour.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-principale mb-2">
                7. Contact
              </h2>
              <p>
                Pour toute question, contactez-nous à{" "}
                <a
                  href="mailto:eleza.rdc@gmail.com"
                  className="text-principale underline hover:text-[#1a8cd8]"
                >
                 eleza.rdc@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
