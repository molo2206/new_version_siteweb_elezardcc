import { useState } from "react";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { FaBars, FaTimes } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
import ReactCountryFlag from "react-country-flag";
import { useAuthContext } from "../context";

const Navbar = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { handleLanguageChange } = useAuthContext();
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
      <header className="flex justify-between items-center px-8 h-20 py-4 w-full fixed top-0 left-0 right-0 text-sm bg-white dark:bg-slate-800 shadow-md z-50">
        {/* Logo et nom de l'application */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img src={data?.logo1} alt=""  className="text-principale w-12 h-12"/>
            <div>
              <p className="font-bold text-base leading-tight text-principale dark:text-white">Eleza RDC</p>
            </div>
          </a>
        </div>

        {/* Navigation principale */}
        <nav className="space-x-6 hidden md:flex">
          <div className="group relative">
            <button className="hover:text-[#1DA1F2] text-sm md:text-base text-slate-900 dark:text-white dark:hover:text-[#1DA1F2] transition-colors duration-200">
              Ressources
            </button>
            <div className="absolute hidden group-hover:block bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 w-48">
              <a href="/videos" className="block px-4 py-2 font-semibold text-sm md:text-base text-slate-900 hover:bg-principale hover:text-white dark:hover:bg-slate-900 dark:bg-slate-800 dark:hover:text-[#1DA1F2] dark:text-white transition-colors duration-200">
                Vidéos
              </a>
              <a href="/blogs" className="block px-4 py-2 font-semibold text-sm md:text-base text-slate-900 hover:bg-principale hover:text-white dark:hover:bg-slate-900 dark:bg-slate-800 dark:hover:text-[#1DA1F2] dark:text-white transition-colors duration-200">
                Articles
              </a>
            </div>
          </div>
          <a href="/partners" className="hover:text-[#1DA1F2] text-slate-900 text-sm md:text-base dark:hover:text-principale dark:text-white transition-colors duration-200">
            Partenariat
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://elezafact.cd/" className="hover:text-principale text-slate-900 text-sm md:text-base dark:hover:text-[#1DA1F2] dark:text-white transition-colors duration-200">
            Eleza Fact
          </a>
          <a href="/about" className="hover:text-[#1DA1F2] text-slate-900 text-sm md:text-base dark:hover:text-principale dark:text-white transition-colors duration-200">
            À propos
          </a>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMe} className="focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition">
            {showMenu ? (
              <FaTimes className="h-6 w-6 text-principale" />
            ) : (
              <FaBars className="h-6 w-6 text-principale" />
            )}
          </button>
        </div>

        {/* Sélecteur de langue */}
        <div className="relative hidden md:block">
          <button className="flex items-center gap-2 bg-principale text-sm md:text-base text-white px-4 py-2 rounded-full shadow-sm hover:bg-blue-500 transition duration-200" onClick={toggleDropdown}>
            <ReactCountryFlag
              countryCode={selectedLanguage === "en" ? "GB" : "FR"}
              svg
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
              title={selectedLanguage === "en" ? "English" : "French"}
            />
            {selectedLanguage === "en" ? "English" : "French"}
            <span className="ml-2">▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <button className="flex items-center gap-2 w-full text-sm md:text-base px-4 py-2 hover:bg-gray-100" onClick={() => selectLanguage("en")}>
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                  title="English"
                />
                English
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm md:text-base hover:bg-gray-100" onClick={() => selectLanguage("fr")}>
                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                  title="French"
                />
                French
              </button>
            </div>
          )}
        </div>
      </header>
      <SidebarMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
