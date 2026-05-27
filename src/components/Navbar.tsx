import { useState } from "react";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import {
  FaBars,
  FaTimes,
  FaUpload,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
import ReactCountryFlag from "react-country-flag";
import { useAuthContext } from "../context";

const Navbar = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { handleLanguageChange, user, logout } = useAuthContext(); // Récupération utilisateur & logout
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
    handleLanguageChange(language);
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMe = () => {
    setShowMenu(!showMenu);
  };

  // État pour la recherche
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de recherche (redirection ou appel API)
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  // État pour le menu utilisateur
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // État pour les notifications (exemple)

  return (
    <div className="font-sans text-gray-800">
      <header className="flex justify-between items-center px-4 md:px-8 h-20 py-4 w-full fixed top-0 left-0 right-0 text-sm bg-white dark:bg-slate-800 shadow-md z-50 transition-colors duration-300">
        {/* Logo et nom de l'application */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={data?.logo1}
              alt="Logo Eleza RDC"
              className="text-principale w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              <p className="font-bold text-base leading-tight text-principale dark:text-white">
                Eleza RDC
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                Espace jeunes vidéastes
              </p>
            </div>
          </a>
        </div>

        {/* Barre de recherche (desktop) */}
        {/* Barre de recherche (desktop) - version professionnelle */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center relative w-80 lg:w-96 transition-all duration-300 focus-within:w-96 lg:focus-within:w-[28rem]"
        >
          <input
            type="text"
            placeholder="Rechercher une vidéo, un créateur..."
            className="w-full bg-gray-50 dark:bg-slate-700/80 border border-gray-200 dark:border-slate-600 rounded-full py-2.5 pl-5 pr-12 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-principale/70 focus:border-transparent shadow-sm transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-gray-400 hover:text-principale dark:text-gray-500 dark:hover:text-principale transition-colors duration-200"
            aria-label="Lancer la recherche"
          >
            <FaSearch className="w-4 h-4" />
          </button>
        </form>

        {/* Navigation principale desktop */}
        <nav className="space-x-4 lg:space-x-6 hidden md:flex items-center">
          {/* Lien Tendances avec icône */}
          <a
            href="/trending"
            className="flex items-center gap-1 hover:text-[#1DA1F2] text-slate-900 dark:text-white transition-colors duration-200"
          >
            <span>Tendances</span>
          </a>

          {/* Menu Ressources existant amélioré */}
          <div className="group relative">
            <button className="hover:text-[#1DA1F2] text-slate-900 dark:text-white transition-colors duration-200">
              Ressources
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 w-48 z-20">
              <a
                href="/videos"
                className="block px-4 py-2 font-semibold text-sm text-slate-900 hover:bg-principale hover:text-white dark:hover:bg-slate-900 dark:text-white"
              >
                Vidéos
              </a>
              <a
                href="/blogs"
                className="block px-4 py-2 font-semibold text-sm text-slate-900 hover:bg-principale hover:text-white dark:hover:bg-slate-900 dark:text-white"
              >
                Articles
              </a>
              <a
                href="/tutoriels"
                className="block px-4 py-2 font-semibold text-sm text-slate-900 hover:bg-principale hover:text-white dark:hover:bg-slate-900 dark:text-white"
              >
                Tutoriels
              </a>
            </div>
          </div>

          <a
            href="/partners"
            className="hover:text-[#1DA1F2] text-slate-900 dark:text-white transition-colors duration-200"
          >
            Partenariat
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://elezafact.cd/"
            className="hover:text-principale text-slate-900 dark:text-white transition-colors duration-200"
          >
            Eleza Fact
          </a>
          <a
            href="/about"
            className="hover:text-[#1DA1F2] text-slate-900 dark:text-white transition-colors duration-200"
          >
            À propos
          </a>
        </nav>

        {/* Actions à droite (bouton upload, notifications, thème, langue, profil) */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Bouton Upload Vidéo (pour les vidéastes connectés) */}
          <a
            href="/upload"
            className="hidden md:flex items-center gap-2 bg-principale text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition shadow-md"
          >
            <FaUpload />
            <span>Publier</span>
          </a>

          {/* Icône de recherche mobile (ouvre la recherche dans le sidebar ou modal) */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-slate-700"
            onClick={() => {
              // Option: ouvrir une modal de recherche ou rediriger
              window.location.href = "/search";
            }}
          >
            <FaSearch className="text-principale" />
          </button>

          {/* Notifications */}
          {/* <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <FaBell className="text-gray-600 dark:text-gray-300" />
            {notifCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {notifCount}
              </span>
            )}
          </button> */}

          {/* Toggle Dark/Light Mode */}
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition"
            aria-label="Changer de thème"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </button> */}

          {/* Sélecteur de langue (desktop) */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center gap-2 bg-principale text-white px-4 py-2 rounded-full shadow-sm hover:bg-blue-500 transition"
              onClick={toggleDropdown}
            >
              <ReactCountryFlag
                countryCode={selectedLanguage === "en" ? "GB" : "FR"}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
                title={selectedLanguage === "en" ? "English" : "French"}
              />
              {selectedLanguage === "en" ? "English" : "French"}
              <span className="ml-2">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded shadow-lg z-20">
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 text-left"
                  onClick={() => selectLanguage("en")}
                >
                  <ReactCountryFlag
                    countryCode="GB"
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                  English
                </button>
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 text-left"
                  onClick={() => selectLanguage("fr")}
                >
                  <ReactCountryFlag
                    countryCode="FR"
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                  French
                </button>
              </div>
            )}
          </div>

          {/* Menu utilisateur avec avatar */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-1 p-1 rounded-full bg-gray-200 dark:bg-slate-700 hover:ring-2 hover:ring-principale transition"
            >
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <FaUser className="w-5 h-5 text-gray-600 dark:text-gray-300 m-1" />
              )}
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-2 z-20 border dark:border-slate-700">
                {user ? (
                  <>
                    <p className="px-4 py-2 text-sm font-semibold border-b dark:border-slate-700">
                      {user.name || "Mon compte"}
                    </p>
                    {/* <a
                      href="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      Mon profil
                    </a> */}
                    <a
                      href="/my-videos"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      Mes vidéos
                    </a>
                    {/* <a
                      href="/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      Tableau de bord
                    </a> */}
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      Connexion
                    </a>
                    <a
                      href="/register"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      Inscription (gratuite)
                    </a>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Menu burger mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMe}
              className="focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] p-2 rounded-full bg-gray-100 dark:bg-slate-700"
            >
              {showMenu ? (
                <FaTimes className="h-5 w-5 text-principale" />
              ) : (
                <FaBars className="h-5 w-5 text-principale" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* SidebarMenu enrichi (reçoit aussi les nouvelles props si besoin) */}
      <SidebarMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
