/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuthContext } from "../context";
import ReactCountryFlag from "react-country-flag";

interface props {
  showMenu?: any;
}

const SidebarMenu = ({ showMenu }: props) => {
  const { handleLanguageChange } = useAuthContext();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
    handleLanguageChange(language);
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed bottom-0 top-0 z-30 flex h-full w-80 flex-col bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 ease-in-out md:hidden`}
    >
      <div className="flex-1 overflow-y-auto mt-24 px-4">
        <ul className="space-y-1">
          {/* Accueil */}
          <li>
            <a
              href="/"
              className="flex items-center rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-principale/10 hover:text-principale transition-colors"
            >
              <span className="font-medium">Accueil</span>
            </a>
          </li>
          {/* Tendances */}
          <li>
            <a
              href="/trending"
              className="flex items-center rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-principale/10 hover:text-principale transition-colors"
            >
              <span className="font-medium">Tendances</span>
            </a>
          </li>
          {/* Vidéos */}
          <li>
            <a
              href="/videos"
              className="flex items-center rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-principale/10 hover:text-principale transition-colors"
            >
              <span className="font-medium">Vidéos</span>
            </a>
          </li>
          {/* Catégories (sous-menu) */}
        
          {/* Partenariat */}
          <li>
            <a
              href="/partners"
              className="flex items-center rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-principale/10 hover:text-principale transition-colors"
            >
              <span className="font-medium">Partenariat</span>
            </a>
          </li>
          {/* Eleza Fact (externe) */}
          <li>
            <a
              href="https://elezafact.cd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-principale/10 hover:text-principale transition-colors"
            >
              <span className="font-medium">Eleza Fact</span>
            </a>
          </li>
          {/* À propos */}
          <li>
            <a
              href="/about"
              className="flex items-center rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-principale/10 hover:text-principale transition-colors"
            >
              <span className="font-medium">À propos</span>
            </a>
          </li>
        </ul>

        {/* Sélecteur de langue uniquement */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="px-3 py-2">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex w-full items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-700 dark:text-gray-200"
              >
                <div className="flex items-center gap-2">
                  <ReactCountryFlag
                    countryCode={selectedLanguage === "en" ? "GB" : "FR"}
                    svg
                    style={{ width: "1.2em", height: "1.2em" }}
                  />
                  <span>
                    {selectedLanguage === "en" ? "English" : "Français"}
                  </span>
                </div>
                <span>▼</span>
              </button>
              {dropdownOpen && (
                <div className="absolute bottom-full left-0 mb-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                  <button
                    onClick={() => selectLanguage("en")}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{ width: "1.2em", height: "1.2em" }}
                    />
                    English
                  </button>
                  <button
                    onClick={() => selectLanguage("fr")}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ReactCountryFlag
                      countryCode="FR"
                      svg
                      style={{ width: "1.2em", height: "1.2em" }}
                    />
                    Français
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
