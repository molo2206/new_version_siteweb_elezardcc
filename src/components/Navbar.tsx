/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { FaXmark, FaBars } from "react-icons/fa6";
import SidebarMenu from "./SidebarMenu";
import ReactCountryFlag from "react-country-flag";
import { useAuthContext } from "../context";
const Navbar = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { handleLanguageChange } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const selectLanguage = (language: any) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
    handleLanguageChange(language);
  };
  const [showMenu, setShowMenu] = useState(false);
  //set toggle menu
  const toggleMe = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="font-sans text-gray-800">
      <header
        className="flex justify-between items-center px-8 h-20
      py-4 w-full fixed top-0 left-0 right-0 text-sm  bg-white dark:bg-slate-800 shadow-md"
      >
        <div
          className="text-principale font-bold md:text-xl dark:text-white 
         dark:hover:text-principale  "
        >
          {" "}
          <a href="/">
            <img
              src={data?.logo1}
              alt=""
              className="w-12 inline-block items-center"
            />
            <p className="" style={{ fontSize: 11 }}>
              Eleza RDC
            </p>
          </a>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <div className="group relative">
            <button
              className="hover:text-blue-600 text-sm md:text-base  text-slate-900
             dark:text-white dark:hover:text-principale "
            >
              Ressources
            </button>
            <div
              className="absolute hidden group-hover:block bg-white
             dark:bg-slate-800 shadow-lg rounded-md py-2 w-48"
            >
              <a
                href="/videos"
                className="
                 block px-4 py-2 font-semibold text-sm md:text-base
                 text-slate-900
                 hover:bg-principale
                 hover:text-white 
                 dark:hover:bg-slate-900
                 dark:bg-slate-800
                 dark:hover:text-principale
                 dark:text-white"
              >
                Vidéos
              </a>
              {/* <a
                href="#"
                className="
                block px-4 py-2 font-semibold text-sm md:text-base
                 text-slate-900
                 hover:bg-principale
                 hover:text-white 
                 dark:hover:bg-slate-900
                 dark:bg-slate-800
                 dark:hover:text-principale
                 dark:text-white
                "
              >
                Galerie
              </a> */}
              <a
                href="/blogs"
                className="block px-4 py-2 font-semibold text-sm md:text-base
                 text-slate-900
                 hover:bg-principale
                 hover:text-white 
                 dark:hover:bg-slate-900
                 dark:bg-slate-800
                 dark:hover:text-principale
                 dark:text-white"
              >
                Articles
              </a>
              {/* <a
                href="#"
                className="
                block px-4 py-2 font-semibold text-sm md:text-base
                 text-slate-900
                 hover:bg-principale
                 hover:text-white 
                 dark:hover:bg-slate-900
                 dark:bg-slate-800
                 dark:hover:text-principale
                 dark:text-white"
              >
                Podcast
              </a> */}
            </div>
          </div>
          <a
            href="/partners"
            className="hover:text-blue-600
             text-slate-900 
             text-sm md:text-base
             dark:hover:text-principale 
            dark:text-white
            "
          >
            Partenariat
          </a>
          <a
            target="_blank"
            href="https://elezafact.cd/"
            className="hover:text-blue-600 text-slate-900 text-sm md:text-base dark:hover:text-principale 
            dark:text-white"
          >
            Eleza Fact
          </a>
          <a
            href="/about"
            className="hover:text-blue-600 text-slate-900 text-sm md:text-base dark:hover:text-principale  
             dark:text-white"
          >
            À propos
          </a>
        </nav>

        {/* Mobile menu header */}
        <div className="md:hidden flex items gap-4 ">
          <button
            onClick={toggleMe}
            className=" focus:outline-none  focus:text-principale"
          >
            {showMenu ? (
              <FaXmark className=" h-6 w-6  dark:text-white" />
            ) : (
              <FaBars className=" h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>
        {/* <div className="relative inline-block">
          
          <button
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded"
            onClick={toggleDropdown}
          >
            <span className="inline-block">
              {selectedLanguage === "English" ? "🇬🇧" : "🇫🇷"}
            </span>
            {selectedLanguage}
            <span className="ml-2">▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <button
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => selectLanguage("English")}
              >
                🇬🇧 English
              </button>
              <button
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => selectLanguage("French")}
              >
                🇫🇷 French
              </button>
            </div>
          )}
        </div> */}
        <div className="relative hidden md:block">
          {/* Bouton principal */}
          <button
            className="flex items-center gap-2 bg-principale text-sm md:text-base text-white px-4 py-2 rounded"
            onClick={toggleDropdown}
          >
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

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <button
                className="flex items-center gap-2 w-full text-sm md:text-base px-4 py-2 hover:bg-gray-100"
                onClick={() => selectLanguage("en")}
              >
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
              <button
                className="flex items-center gap-2 w-full px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                onClick={() => selectLanguage("fr")}
              >
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
        {/* <div className="hidden md:block">
          <div className=" flex space-x-2 ">
            {theme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="flex items-center gap-2 bg-principale text-white px-4 py-2 rounded  hover:bg-slate-500"
              >
                <BiSolidSun size={12} className="text-xl cursor-pointer " />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="flex items-center gap-2 bg-principale text-white px-4 py-2 rounded hover:bg-slate-500"
              >
                <BiSolidMoon
                  size={12}
                  className="text-xl rounded-full cursor-pointer "
                />
              </button>
            )}
          </div>
        </div> */}
      </header>
      <SidebarMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
