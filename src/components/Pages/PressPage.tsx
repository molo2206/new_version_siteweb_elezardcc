
const PressPage = () => {
  return (
    <div className="bg-gray-100 mt-10">
      {/* Header Section */}
      <div className="bg-blue-50 py-12 px-6 text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
          Espace communication et relation presse de Simplébo
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Toute l’actualité de l’agence web Simplébo
        </p>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-400">
          Demande d'information
        </button>
      </div>

      {/* Recent Publications Section */}
      <div className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Sélection de parutions récentes dans la presse
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Challenges
            </h3>
            <p className="text-gray-600 mt-2">
              Simplébo, l’agence Web la mieux notée de France
            </p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-400">
              Lire l'article
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Les Echos Entrepreneurs
            </h3>
            <p className="text-gray-600 mt-2">
              Simplébo, le créateur de sites Web qui monte
            </p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-400">
              Lire l'article
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              BFM Business
            </h3>
            <p className="text-gray-600 mt-2">
              Alexandre Bonetti (CEO de Simplébo) sur BFM TV
            </p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-400">
              Voir la vidéo
            </button>
          </div>
        </div>
      </div>

      {/* Podcasts Section */}
      <div className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Podcasts : les dirigeants de Simplébo à l’honneur
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Podcast Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Podcast 1"
              className="mx-auto mb-4"
            />
            <p className="text-gray-800 font-semibold">
              “Comprendre le besoin client” par Alexandre Bonetti
            </p>
            <p className="text-gray-600 mt-2">Method to scale | Épisode 12</p>
          </div>
          {/* Podcast Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Podcast 2"
              className="mx-auto mb-4"
            />
            <p className="text-gray-800 font-semibold">
              “Devenir le n°1 sur un marché hyperconcurrentiel” par Alexandre Bonetti
            </p>
            <p className="text-gray-600 mt-2">Harmony Inside | Épisode 61</p>
          </div>
          {/* Podcast Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Podcast 3"
              className="mx-auto mb-4"
            />
            <p className="text-gray-800 font-semibold">
              “Automatiser pour personnaliser” par Alexandre Bonetti
            </p>
            <p className="text-gray-600 mt-2">Podcast Structure | Épisode 27</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
