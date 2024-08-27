/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import {
  FaBars,
  FaCaretDown,
  FaLayerGroup,
  FaVideo,
  FaXmark,
} from "react-icons/fa6";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ReactCountryFlag from "react-country-flag";
import { useAuthContext } from "../context";
import { FaBlog, FaHome, FaQuestionCircle } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import CategoryServices from "../services/CategoryServices";
import CategoryCard from "./Pages/cards/CategoryCard";
const Navbar = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { data: cat } = useAsync(() => CategoryServices.getCategory());

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const element = document.documentElement;
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { handleLanguageChange, lang } = useAuthContext();
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //nav items array
  const navItems = [
    { path: t("Home"), link: "/" },
    { path: t("Videos"), link: "/videos" },
    { path: t("Blog"), link: "/blogs" },
    { path: t("AboutUs"), link: "about" },
    { path: "Contact", link: "/contact" },
    { path: t(""), link: "faq" },
  ];

  return (
    <header className=" w-full   fixed top-0 left-0 right-0  ">
      <nav
        className={`py-4 lg:px-14 px-4 bg-white dark:bg-slate-900 dark:text-slate-200 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className=" flex justify-between items-center text-base gap-8 ">
          <a
            href=" "
            className=" text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={data?.logo1}
              alt=""
              className="w-10 inline-block items-center "
            />
            <span className="text-[#263238] dark:text-slate-200">
              {data?.app_name}
            </span>
          </a>
          <ul className="top-12 left-0 right-0 md:flex space-x-12 hidden  items-center font-montserrat">
            <li className="">
              <a
                href="/"
                className="flex items-center gap-1 first:font-medium "
              >
                <FaHome className="" />
                {t("Home")}
              </a>
            </li>
            <li className="group cursor-pointer ">
              <a className="flex items-center gap-2 first:font-medium ">
                <FaLayerGroup className=" " /> {t("Category")}
                <span>
                  <FaCaretDown
                    className="transition-all 
                        duration-200 group-hover:rotate-180"
                  />
                </span>
              </a>
              {/* dropdown full width section */}
              <div
                className="dropdown icon absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white text-black
                 dark:bg-gray-800 dark:text-white p-2 t ext-black shadow-md group-hover:block"
              >
                <div className="grid grid-cols-2 gap-5 px-40 ">
                  <div className="col-span-2">
                    <p className=" text-xs">
                      <div className=" grid grid-cols-6 mt-6">
                        {cat.map((item: any, index: number) => (
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-md font-semibold ">
                              <CategoryCard cat={item} key={index} />
                            </h1>
                          </div>
                        ))}
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="">
              <a
                href="/videos"
                className=" flex items-center gap-2 first:font-medium"
              >
                <FaVideo />
                {t("Videos")}
              </a>
            </li>
            {/* <li>
              <a href="" className=" flex items-center gap-2 first:font-medium">
                <FaPodcast />
                Podcast
              </a>
            </li> */}
            <li>
              <a
                href="/blogs"
                className=" flex items-center gap-2 first:font-medium"
              >
                <FaBlog />
                {t("Blog")}
              </a>
            </li>
            <li className="group cursor-pointer ">
              <a className="flex items-center gap-2 first:font-medium ">
                <FaQuestionCircle className=" " /> {t("AboutUs")}
                <span>
                  <FaCaretDown
                    className="transition-all 
                        duration-200 group-hover:rotate-680"
                  />
                </span>
              </a>
              {/* dropdown full width section */}
              <div
                className="dropdown icon absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white text-black
                 dark:bg-gray-800 dark:text-white p-2 t ext-black shadow-md group-hover:block"
              >
                <div className="grid grid-cols-2 gap-5 px-40 ">
                  <div className="col-span-2">
                    <p className=" text-xs">
                      <div className=" grid grid-cols-6 mt-6">
                        <div>
                          <a
                            href="/about"
                            className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
                          >
                            {t("AboutUs")}
                          </a>
                        </div>
                        <div>
                          <a
                            href="/team"
                            className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
                          >
                            {t("Team")}
                          </a>
                        </div>
                        <div>
                          <a
                            href="/financement"
                            className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
                          >
                            Financement
                          </a>
                        </div>
                        <div>
                          <a
                            href="/partners"
                            className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
                          >
                            Partenaire
                          </a>
                        </div>
                        <div>
                          <a
                            href="/mission"
                            className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
                          >
                            Mission
                          </a>
                        </div>
                        <div>
                          <a
                            href="/vision"
                            className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
                          >
                            Vision
                          </a>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="">
              <a
                href="/contact"
                className=" flex gap-2 items-center first:font-medium"
              >
                <GrContact />
                Contact
              </a>
            </li>
          </ul>

          {/* <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                href={link}
                className=" block cursor-pointer text-base text-gray900 dark:text-slate-200 hover:text-brandPrimary first:font-medium"
              >
                {path}
              </a>
            ))}
          </ul> */}

          <div className=" space-x-12 hidden lg:flex items-center">
            <ul>
              <li className=" group relative cursor-pointer ">
                <a className="flex items-center gap-[20px] h-[50px]  dark:text-slate-300 text-gray900  font-bold ">
                  {lang === "en" ? "Anglais" : "Français"}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                      duration-200 "
                    />
                  </span>
                </a>
                {/* dropdown section */}
                <div className="dropdown-lg absolute -center-9 z-[99999] hidden w-[120px] rounded-lg bg-white p-2 shadow-md text-black  group-hover:block">
                  <ul className="">
                    <li
                      role="button"
                      onClick={() => handleLanguageChange("fr")}
                      className="p-2  hover:text-principal cursor-pointer"
                    >
                      <a className="">
                        <ReactCountryFlag
                          className="emojiFlag mr-2"
                          countryCode="FR"
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title="FR"
                        />
                        Français
                      </a>
                    </li>
                    <li
                      role="button"
                      onClick={() => handleLanguageChange("en")}
                      className="p-2  hover:text-principal cursor-pointer"
                    >
                      <a>
                        <ReactCountryFlag
                          className="emojiFlag mr-2"
                          countryCode="US"
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title="US"
                        />
                        Anglais
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {theme === "dark" ? (
              <BiSolidSun
                className="text-xl cursor-pointer "
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-xl cursor-pointer "
                onClick={() => setTheme("dark")}
              />
            )}
            <a
              href="https://admin.elezardc.org/auth/login"
              className=" hidden lg:flex items-center text-brandPrimary  hover:text-slate-400"
            >
              Login
            </a>
            {/* 
            <button className=" bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
              Signup
            </button>
            <button className=" bg-brandSecondary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
              Donation
            </button> */}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGray focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className=" h-6 w-6 " />
              ) : (
                <FaBars className=" h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <div
          className={` space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? " block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              href={link}
              className=" block text-base text-white hover:text-slate-400 first:font-medium"
            >
              {path}
            </a>
          ))}

          {theme === "dark" ? (
            <BiSolidSun
              className="text-xl cursor-pointer text-stone-200 "
              onClick={() => setTheme("light")}
            />
          ) : (
            <BiSolidMoon
              className="text-xl cursor-pointer text-stone-200 "
              onClick={() => setTheme("dark")}
            />
          )}
          <a
            href="https://admin.elezardc.org/auth/login"
            className="  text-base text-white hover:text-slate-400 first:font-medium"
          >
            Login
          </a>
          <ul>
            <li className=" group relative cursor-pointer ">
              <a className="flex items-center gap-[20px] h-[50px]  dark:text-slate-300 text-gray-200  font-bold ">
                {lang === "en" ? "Anglais" : "Français"}
                <span>
                  <FaCaretDown
                    className=" transition-all 
                      duration-200 "
                  />
                </span>
              </a>
              {/* dropdown section */}
              <div className="dropdown-lg absolute -center-9 z-[99999] hidden w-[120px] rounded-lg bg-white p-2 shadow-md text-black  group-hover:block">
                <ul className="">
                  <li
                    role="button"
                    onClick={() => handleLanguageChange("fr")}
                    className="p-2  hover:text-principal cursor-pointer"
                  >
                    <a className="">
                      <ReactCountryFlag
                        className="emojiFlag mr-2"
                        countryCode="FR"
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title="FR"
                      />
                      Français
                    </a>
                  </li>
                  <li
                    role="button"
                    onClick={() => handleLanguageChange("en")}
                    className="p-2  hover:text-principal cursor-pointer"
                  >
                    <a>
                      <ReactCountryFlag
                        className="emojiFlag mr-2"
                        countryCode="US"
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title="US"
                      />
                      Anglais
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
