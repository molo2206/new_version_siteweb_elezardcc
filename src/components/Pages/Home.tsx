/* eslint-disable @typescript-eslint/no-explicit-any */
import Services from "../Services";
import About from "../About";
import Products from "../Products";
import Blog from "../Blog";
import Newsletter from "../Newsletter";
import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";
import useValidation from "../../hooks/useValidation";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import { useTranslation } from "react-i18next";
import InputSearch from "../form/InputSearch";
import ButtonSearch from "../form/ButtonSearch";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { data: cat } = useAsync(() => CategoryServices.getCategory());
  const { lang } = useAuthContext();
  const { t } = useTranslation();
  const navigation = useNavigate();

  const { inputs, handleOnChange, hanldeError } = useValidation({
    keyword: "",
  });

  const validation = (e: any) => {
    e.preventDefault();

    let valide = true;
    if (!inputs.keyword) {
      hanldeError("keyword is required", "keyword");
      valide = false;
    }

    if (valide) {
      navigation("/search?q=" + inputs.keyword);
    }
  };

  return (
    <div className="">
      <div
        className=" relative  lg:h-[80vh] dark:bg-slate-800 dark:text-slate-200 "
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="300"
      >
        <video
          autoPlay
          muted
          loop
          className=" absolute z-10 w-full h-full lg:top-0 -top-[12vh] object-cover opacity-55"
        >
          <source
            src="https://apisiteweb.elezardc.org/uploads/video/media.mp4"
            type="video/mp4"
          />
        </video>
        <div className=" flex flex-col items-center justify-center relative z-10 lg:h-full h-screen max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto">
          <p className=" text-3xl text-orange-500 ">{t("Lets_begin")}</p>
          <h4 className=" lg:text-[52px] text-3xl text-brandPrimary  dark:text-slate-200">
            {t("What_do_you")}
          </h4>
          <p className=" text-brandPrimary dark:text-slate-200 text-2xl my-8">
            {t("Select")}
          </p>
          <form onSubmit={validation} className=" bg-slate-100 dark:bg-slate-800 dark:text-slate-200 grid lg:grid-cols-3 grid-cols-1 rounded-lg w-full sm:h-64 md:h-20">
            <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
              {/* <MdOutlineParagliding className=" text-4xl text-brandPrimary dark:text-white" /> */}
              <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
                
                <InputSearch
                  name="keyword"
                  placeholder="Rechercher sur le site!"
                  required
                  type="select"
                  value={inputs.thematique}
                  onChange={(e: any) =>
                    handleOnChange(e.target.value, "thematique")
                  }
                  options={cat?.map((item: any) => ({
                    label: showingTranslateValue(item?.translations, lang)
                      ?.name,
                    value: item.id,
                  }))}
                />
              </span>
            </span>
            <span className=" flex items-center py-7  relative pl-4">
              {/* <FaSearch className=" text-2xl text-brandPrimary dark:text-white inline-block" /> */}
              <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
                <InputSearch
                  name="keyword"
                  placeholder="Rechercher sur le site!"
                  type="text"
                  value={inputs.keyword}
                  onChange={(e: any) =>
                    handleOnChange(e.target.value, "keyword")
                  }
                />
              </span>
            </span>
            <ButtonSearch label="Recherche" />
          </form>
          <img src="/src/assets/images" alt="" className=" my-4" />
          <p className="text-brandPrimary dark:text-slate-200 font-semibold text-[18px]">
            {t("browse")}
          </p>
        </div>
      </div>
      <About />
      <Products />
      <Services />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
