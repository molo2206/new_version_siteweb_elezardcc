import React from "react";
import aboutImage from "../../assets/ban3.jpg"; // Remplace si nécessaire

const TermsAndConditions: React.FC = () => {
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
            Conditions Générales d'Utilisation
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-4 px-4 md:px-8 lg:px-72">
        <div className="bg-white dark:bg-[#15202b]/80 backdrop-blur-md rounded-xl shadow-2xl px-6 md:px-12 py-12">
          <section className="space-y-10 text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
            <p>
              En accédant à notre site{" "}
              <span className="font-semibold text-black dark:text-white">
                Eleza RDC
              </span>
              , vous acceptez les présentes conditions générales d'utilisation.
              Veuillez les lire attentivement.
            </p>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                1. Utilisation du site
              </h2>
              <p>
                Vous vous engagez à utiliser notre site de manière légale,
                respectueuse et sans nuire à autrui.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                2. Propriété intellectuelle
              </h2>
              <p>
                Tous les contenus (textes, images, marques...) sont protégés par
                le droit de la propriété intellectuelle et sont la propriété de{" "}
                <strong>Eleza RDC</strong> ou de ses partenaires.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                3. Données personnelles
              </h2>
              <p>
                L’utilisation de vos données est encadrée par notre politique de
                confidentialité accessible depuis notre site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                4. Responsabilités
              </h2>
              <p>
                Nous ne garantissons pas que le site soit exempt d’erreurs ou
                accessible en permanence. Nous ne sommes pas responsables des
                dommages liés à son utilisation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                5. Modification des CGU
              </h2>
              <p>
                Nous nous réservons le droit de modifier les CGU à tout moment.
                Les modifications prendront effet dès leur publication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                6. Loi applicable
              </h2>
              <p>
                Les présentes conditions sont régies par les lois de la
                République Démocratique du Congo. En cas de litige, les
                tribunaux compétents seront ceux de Kinshasa.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-principale mb-2">
                7. Contact
              </h2>
              <p>
                Pour toute question relative aux CGU, veuillez nous contacter à{" "}
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

export default TermsAndConditions;
