import Navbar from "../Navbar";
import Cookies from "../Cookies";
import Myfooter from "../Myfooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-slate-200">
      <Cookies />
      <Navbar />
      <Outlet />
      <Myfooter />
    </div>
  );
};

export default Layout;
