/* eslint-disable @typescript-eslint/no-explicit-any */
import Services from "../Services";
import About from "../About";
import Products from "../Products";
import Blog from "../Blog";
import Newsletter from "../Newsletter";
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import Input from "../form/Input";
import { FaSearch } from "react-icons/fa";
import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";
import useValidation from "../../hooks/useValidation";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { data: cat } = useAsync(() => CategoryServices.getCategory());
  const { lang } = useAuthContext();
  const { t } = useTranslation();

  const { inputs, errors, handleOnChange } =
    useValidation({
      first_name: "",
      last_name: "",
    });
  // const validation = (e: any) => {
  //   e.preventDefault();

  //   let valide = true;
  //   if (!inputs.first_name) {
  //     hanldeError("First name us is required", "first_name");
  //     valide = false;
  //   }
  //   if (!inputs.last_name) {
  //     hanldeError("Last name is required", "last_name");
  //     valide = false;
  //   }
  //   if (!inputs.email) {
  //     hanldeError("Email is required", "email");
  //     valide = false;
  //   }

  //   if (!inputs.phone) {
  //     hanldeError("Phone is required", "phone");
  //     valide = false;
  //   }

  //   if (!inputs.message) {
  //     hanldeError("Message is required", "message");
  //     valide = false;
  //   }

  //   if (valide) {
  //     alert("Ume ponda");
  //   }
  // };
  return (
    <div className=" py-20   ">
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
          <source src="/src/assets/video/media.mp4" type="video/mp4" />
        </video>
        <div className=" flex flex-col items-center justify-center relative z-10 lg:h-full h-screen max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto">
          <p className=" text-3xl text-orange-500 ">{t("Lets_begin")}</p>
          <h4 className=" lg:text-[52px] text-3xl text-brandPrimary  dark:text-slate-200">
            {t('What_do_you')}
          </h4>
          <p className=" text-brandPrimary dark:text-slate-200 text-2xl my-8">
          {t('Select')}
          </p>
          <div className=" bg-slate-100 dark:bg-slate-800 dark:text-slate-200 grid lg:grid-cols-3 grid-cols-1 rounded-lg w-full">

            <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
              <MdOutlineParagliding className=" text-4xl text-orange-500" />
              <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
                <Input
                  required
                  label="Select Thematique"
                  type="select"
                  errors={errors.thematique}
                  value={inputs.thematique}
                  onChange={(e: any) =>
                    handleOnChange(e.target.value, "thematique")
                  }
                  options={cat?.map((item: any) => ({
                    label: showingTranslateValue(item?.translations, lang)
                      ?.value,
                    value: item.id,
                  }))}
                  placeholder={"Entrez votre thematique"}
                />
              </span>
            </span>
            <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
              <FaSearch className=" text-2xl text-orange-500 inline-block" />
              <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
                <Input
                  required
                  name="name"
                  label="Recherche"
                  placeholder=""
                  type="text"
                  errors=""
                  value=""
                  // onChange={(e: any) => handleOnChange(e.target.value, "name")}
                />
              </span>
            </span>
            <button className=" bg-orange-500 text-white flex items-center gap-4 py-6 outline-none border-none rounded-r-lg font-semibold text-sm">
              <MdSearch
                size={20}
                className=" text-4xl text-orange-500 inline-block"
              />{" "}
              SEARCH
            </button>
          </div>
          <img src="/src/assets/images" alt="" className=" my-4" />
          <p className="text-brandPrimary dark:text-slate-200 font-semibold text-[18px]">
            {t('browse')}
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
