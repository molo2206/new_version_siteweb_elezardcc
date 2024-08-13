import { Route, Routes } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastProvider } from "react-toast-notifications";
import Home from "./components/Pages/Home";
import Layout from "./components/Pages/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Videos from "./components/Pages/Videos";
import Contact from "./components/Pages/Contact";

import Mission from "./components/Pages/Mission";
import Blogs from "./components/Pages/Blogs";
import About from "./components/Pages/About";
import Vision from "./components/Pages/Vision";
import Finance from "./components/Pages/Finance";
import Team from "./components/Pages/Team";
import Partners from "./components/Pages/Partners";
import DetailBlogs from "./components/Pages/DetailBlogs";
import Thematiqueblog from "./components/Pages/Thematiqueblog";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className=" dark:bg-slate-900 ">
      <ScrollToTop />
      <ToastProvider >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/detail/:slug" element={<DetailBlogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission/>} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/financement" element={<Finance />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog/category/:id" element={<Thematiqueblog />}></Route>
        </Route>
      </Routes>
      </ToastProvider>
     
    </div>
  );
}

export default App;
