/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CategoryServices from "../services/CategoryServices";
import useAsync from "../hooks/useAsync";
import { showingTranslateValue } from "../utils/heleprs";
import { useAuthContext } from "../context";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ReactCountryFlag from "react-country-flag";
interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showMenu?: any;
}

const SidebarMenu = ({ showMenu }: props) => {
  // const { data } = useAsync(() => SettingsServices.getSettings());
  const [openMenu, setOpenMenu] = useState(null);
  const { data: category } = useAsync(() => CategoryServices.getCategory());
  const { lang } = useAuthContext();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleMenu = (menu: any) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const { handleLanguageChange } = useAuthContext();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const selectLanguage = (language: any) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
    handleLanguageChange(language);
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-full w-80  py-10
        flex-col justify-between bg-principal dark:bg-slate-800 
         transition-all
        duration-200 md:hidden rounded-r-xl shadow-md  
    `}
    >
      <div className="relative mt-5  text-sm dark:bg-slate-800 bg-principale h-full">
        {/* Menu Items */}
        <ul className="space-y-4 p-8 ">
          <li>
            <a
              href="#"
              className="block text-white  dark:bg-slate-800
              dark:text-white  font-medium"
            >
              Accueil
            </a>
          </li>
          <li>
            <div>
              <button
                onClick={() => toggleMenu("services")}
                className="flex justify-between items-center w-full 
                 text-white dark:bg-slate-800
                 dark:text-white  font-medium"
              >
                Catégories
                <span>{openMenu === "services" ? "−" : "+"}</span>
              </button>
              {openMenu === "services" && (
                <ul
                  className="mt-2 pl-4 space-y-2 text-white dark:bg-slate-800
                 dark:text-white"
                >
                  {category?.map((item: any) => (
                    <li>
                      <a href={`/video-category/` + item?.id}>
                        {showingTranslateValue(item?.translations, lang)?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>

          <li>
            <div>
              <button
                onClick={() => toggleMenu("ressources")}
                className="flex justify-between items-center w-full 
                text-white dark:bg-slate-800
                 dark:text-white font-medium"
              >
                Ressources
                <span>{openMenu === "ressources" ? "−" : "+"}</span>
              </button>
              {openMenu === "ressources" && (
                <ul
                  className="mt-2 pl-4 space-y-2 dark:bg-slate-800
                 dark:text-white  text-white"
                >
                  <li>
                    <a href="/videos">Vidéos</a>
                  </li>
                  <li>
                    <a href="#">Galerie</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <a
              href="/partners"
              className="block  
                 dark:text-white  text-white font-medium"
            >
              Partenariat
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://elezafact.cd/"
              className="block 
                 dark:text-white  text-white font-medium"
            >
              Eleza Fact
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block 
                 dark:text-white  text-white font-medium"
            >
              À propos
            </a>
          </li>
          <li>
            <div className=" flex justify-between space-x-2 px-4 ">
              {theme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-principale dark:bg-slate-800 text-white px-4 py-2 rounded-lg border hover:bg-slate-500"
                >
                  <BiSolidSun size={12} className="text-xl cursor-pointer " />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-principale dark:bg-slate-800 text-white px-4 py-2 rounded-lg border hover:bg-slate-500"
                >
                  <BiSolidMoon
                    size={12}
                    className="text-xl rounded-full cursor-pointer "
                  />
                </button>
              )}
            </div>
          </li>
          <li>
            <div className="relative ">
              {/* Bouton principal */}
              <button
                className="flex items-center gap-2 bg-principale dark:bg-slate-800 rounded-lg border text-white px-4 py-2 "
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
                <div className="absolute right-0 mt-2 w-40 bg-white  border dark:border-slate-600 rounded shadow-lg">
                  <button
                    className="flex items-center gap-2 w-full px-4 py-2 dark:bg-slate-800 text-white hover:bg-gray-100"
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
                    className="flex items-center gap-2 w-full px-4 py-2 dark:bg-slate-800 text-white hover:bg-gray-100"
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
