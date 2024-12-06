import aboutImag from "../../assets/ban3.jpg";
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import SettingsServices from "../../services/SettingsServices";
import useAsync from "../../hooks/useAsync";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import { useTranslation } from "react-i18next";

const About = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { lang } = useAuthContext();
  const { t } = useTranslation();
  return (
    <div className="dark:bg-slate-800 dark:text-slate-200 px-4 lg:px-14 
    max-w-screen-2xl  my-8 mt-20 py-20">
      {/* about text */}
      <div className=" ">
        <section className="mb-10">
          <header className="bg-principal dark:bg-slate-800 w-full dark:text-white rounded-lg text-white py-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{t("AboutUs")}</h1>
            </div>
          </header>
          <section className="bg-white dark:bg-slate-800 border p-6 rounded-lg shadow-md mb-10 mt-10">
            <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">
              {t("AboutUs")}
            </h2>
            <p
              className="text-gray-600 leading-relaxed dark:text-white"
              dangerouslySetInnerHTML={{
                __html: showingTranslateValue(data?.translations, lang)
                  ?.about_us,
              }}
            ></p>
          </section>

          {/* Mission, Vision, Values */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Mission */}
            <div className="bg-white border dark:bg-slate-800  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                {t("Mission")}
              </h3>
              <p
                className="text-gray-600 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(data?.translations, lang)
                    ?.mission,
                }}
              ></p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 border rounded-lg shadow-md dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                {t("Vision")}
              </h3>
              <p
                className="text-gray-600 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(data?.translations, lang)
                    ?.vision,
                }}
              ></p>
            </div>
            {/* Values */}
            <div className="bg-white border dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                {t("Our_Values")}
              </h3>
              <ul className="text-gray-600 list-disc ml-5 space-y-2 dark:text-white">
                <li>{t("Professionalism")}</li>
                <li>{t("Responsibility")}</li>
                <li>{t("Mutual_respect")}</li>
                <li>{t("Gender_sensitivity")}</li>
                <li>{t("Excellence")}</li>
                <li>{t("Equity")}</li>
                <li>{t("Inclusion")}</li>
                <li>{t("Innovation")}</li>
              </ul>
            </div>
          </section>
          {/* Image Gallery */}
          <section className="bg-white p-6  border rounded-lg shadow-md dark:bg-slate-800 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
              {t("Our_achievements")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
