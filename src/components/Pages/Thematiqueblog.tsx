/* eslint-disable @typescript-eslint/no-explicit-any */
import CategoryServices from "../../services/CategoryServices";
import useAsync from "../../hooks/useAsync";
import { useParams } from "react-router-dom";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import BlogThematiqueCard from "./cards/BlogThematiqueCard";

const Thematiqueblog = () => {
  const { id } = useParams();
  const { lang } = useAuthContext();
  const { data } = useAsync(() => CategoryServices.getblogCat(id), id);
  const { data: cat } = useAsync(() => CategoryServices.getOneCategory(id), id);
  console.log(cat);
  return (
    <div
      className="py-12 px-4 lg:px-14 max-w-screen-2xl
   mx-auto my-12  dark:bg-slate-800 dark:text-slate-200"
      id="testimonial"
    >
      <section className="mb-10 ">
        {/* <SimpleBannerBlog img={Img1} /> */}
        <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          {showingTranslateValue(cat?.translations, lang)?.name}
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data.map((item: any, index: number) => (
            <BlogThematiqueCard cat={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Thematiqueblog;
