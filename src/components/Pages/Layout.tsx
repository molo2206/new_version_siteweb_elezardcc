import Navbar from "../Navbar";
import Myfooter from "../Myfooter";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-slate-200">
      <Navbar />
      <Outlet />
      <Myfooter />
    </div>
  );
};

export default Layout;
