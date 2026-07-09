import { useState } from "react";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { FaBars, FaTimes } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
import ReactCountryFlag from "react-country-flag";
import { useAuthContext } from "../context";

const Navbar = () => {
  const { data, loading } = useAsync(() => SettingsServices.getSettings());
  const { handleLanguageChange } = useAuthContext(); // Récupération utilisateur & logout
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

  return (
    <div className="font-sans text-gray-800">
      <header className="flex justify-between items-center px-4 md:px-8 h-20 py-4 w-full fixed top-0 left-0 right-0 text-sm bg-white dark:bg-slate-800 shadow-md z-50 transition-colors duration-300">
        {/* Logo et nom de l'application */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            {loading ? (
              // Skeleton pour l'image
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            ) : (
              <img
                src={data?.logo1}
                alt="Logo Eleza RDC"
                className="text-principale w-10 h-10 md:w-12 md:h-12"
              />
            )}
            <div>
              {loading ? (
                // Skeleton pour le texte
                <>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 md:w-28 animate-pulse mb-1" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32 md:w-36 animate-pulse hidden sm:block" />
                </>
              ) : (
                <>
                  <p className="font-bold text-base leading-tight text-principale dark:text-white">
                    Eleza RDC
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                    La voix des jeunes !
                  </p>
                </>
              )}
            </div>
          </a>
        </div>
        {/* Barre de recherche (desktop) */}
        {/* Barre de recherche (desktop) - version professionnelle */}
        {/* <form
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
        </form> */}

        <nav className="space-x-4 lg:space-x-6 hidden md:flex items-center">
          {loading ? (
            // Squelettes pour les liens de navigation
            <>
              <div className="w-16 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-24 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-16 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </>
          ) : (
            <>
              <a
                href="/trending"
                className="flex items-center gap-1 hover:text-[#1DA1F2] text-slate-900 dark:text-white transition-colors duration-200"
              >
                <span>Tendances</span>
              </a>
              <a
                href="/videos"
                className="flex items-center gap-1 hover:text-[#1DA1F2] text-slate-900 dark:text-white transition-colors duration-200"
              >
                <span>Vidéos</span>
              </a>
              {/* <div className="group relative">
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
              </div> */}
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
            </>
          )}
        </nav>

        {/* Actions à droite */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* {loading ? (
            <div className="hidden md:block w-24 h-9 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          ) : (
            <a
              href="/upload"
              className="hidden md:flex items-center gap-2 bg-principale text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition shadow-md"
            >
              <FaUpload />
              <span>Publier</span>
            </a>
          )} */}
          <div className="relative hidden md:block">
            {loading ? (
              <div className="w-28 h-9 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Menu burger mobile - pas de skeleton (indépendant) */}
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
