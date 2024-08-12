import aboutImag from "../../src/assets/autre.png";
import presentationImage from "../../src/assets/img7.jpg";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { showingTranslateValue } from "../utils/heleprs";
import { useAuthContext } from "../context";
import { useTranslation } from "react-i18next";
const Products = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { lang } = useAuthContext();
  const { t } = useTranslation();
  return (
    <div>
      <div
        className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  dark:bg-slate-800 dark:text-slate-200"
        id="product"
      >
        <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImag} alt="" className=" h-full w-[300px]" />
          </div>
          <div className=" md:w-3/5 mx-auto">
            <h2 className=" text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              {t("Mission")}
            </h2>
            <p
              className=" md:w-3/4 text-neutralGray mb-8"
              dangerouslySetInnerHTML={{
                __html: showingTranslateValue(data?.translations, lang)
                  ?.mission,
              }}
            ></p>
            {/* <button className=" btn-primary">Learn more</button> */}
          </div>
        </div>
      </div>
      {/* company stats*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto dark:bg-slate-800 dark:text-slate-200 py-16">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
          <div className=" md:w-1/3">
            <img src={presentationImage} alt="" />
          </div>
          {/* stats */}
          <div className=" md:w-2/3 mx-auto">
            <h2 className=" text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              {t("Vision")}
            </h2>
            <div>
              <p
                className=" md:w-4/5 text-sm text-neutralDGray mb-8 leading-7"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(data?.translations, lang)
                    ?.vision,
                }}
              ></p>
              {/* <div>
                <div className=" flex items-center gap-8 flex-wrap ">
                  <BsCameraVideo className=" text-brandPrimary cursor-pointer inline-block w-6 h-6 " />
                  <GrGroup className="text-brandPrimary cursor-pointer inline-block w-6 h-6 " />
                  <BsPerson className="text-brandPrimary cursor-pointer inline-block w-6 h-6 " />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
