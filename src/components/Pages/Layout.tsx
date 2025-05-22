import Navbar from "../Navbar";
import Cookies from "../Cookies";
import Myfooter from "../Myfooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-black dark:bg-[#15202b] dark:text-white transition-colors duration-300">
      <Cookies />
      <Navbar />

      <Outlet />

      <Myfooter />
    </div>
  );
};

export default Layout;
