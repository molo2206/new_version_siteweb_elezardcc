import { Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import DetailBlogs from "./components/Pages/DetailBlogs";
import Thematiqueblog from "./components/Pages/Thematiqueblog";
import Partners from "./components/Partners";
import DetailVideo from "./components/Pages/DetailVideo";
import VideoListCategory from "./components/Pages/VideoListCategory";
import "react-loading-skeleton/dist/skeleton.css";
import EditorialTeam from "./components/Pages/EditorialTeam";
import PressPage from "./components/Pages/PressPage";
import NewsletterPage from "./components/Pages/NewsletterPage";
import ResearchPage from "./components/Pages/ResearchPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className=" dark:bg-slate-900 ">
      <ScrollToTop />
      <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/detail/:slug" element={<DetailBlogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/financement" element={<Finance />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/press-page" element={<PressPage />} />
            <Route
              path="/newsletter-inscription"
              element={<NewsletterPage />}
            />
            <Route
              path="/blog/category/:id"
              element={<Thematiqueblog />}
            ></Route>
            <Route path="/video/:id" element={<DetailVideo />} />
            <Route
              path="/video-category/:id"
              element={<VideoListCategory />}
            ></Route>
            <Route
              path="/equipe-editoriale"
              element={<EditorialTeam />}
            ></Route>
            <Route path="/search" element={<ResearchPage />}></Route>
          </Route>
        </Routes>
      </ToastProvider>
    </div>
  );
}

export default App;
