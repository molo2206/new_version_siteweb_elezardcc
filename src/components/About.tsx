import aboutImag from "../../src/assets/ban3.jpg";
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { showingTranslateValue } from "../utils/heleprs";
import { useAuthContext } from "../context";
import { useTranslation } from "react-i18next";

// about page
const About = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { lang } = useAuthContext();
  const { t } = useTranslation();
  return (
    <div className="dark:bg-slate-800 dark:text-slate-200">
      {/* about text */}
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImag} alt="" />
          </div>
          <div className=" md:w-3/5 mx-auto">
            <h2 className=" text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              {t('AboutUs')}
            </h2>
            <p className=" md:w-3/4 text-neutralGray mb-8" dangerouslySetInnerHTML={{
                __html: showingTranslateValue(data?.translations, lang)
                  ?.about_us,
              }}
            >
            </p>
            {/* <button className=" btn-primary" >Contact</button> */}
          </div>
        </div>
      </div>
      {/* company stats*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver dark:bg-slate-900 dark:text-slate-200 py-16">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
          <div className=" md:w-1/2">
            <h2 className=" text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">
              {t('help')} <br />{" "}
              <span className=" text-brandPrimary">
                {t('way_contact')}
              </span>
            </h2>
            <p className="">{t('more_info')}</p>
          </div>
          {/* stats */}
          <div className=" md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className=" space-y-8">
              <div className=" flex items-center gap-4">
                <a
                  href={`https://wa.me/${data?.phones}?text=${t('message_whatsapp')}`}
                  target="blank"
                >
                  <BsWhatsapp className=" h-10 w-10 text-brandPrimary" />
                  <div className="">
                    <p className="text-neutralDGray font-semibold">Whatsapp</p>
                  </div>
                </a>
              </div>
              <div className=" flex items-center gap-4">
                <a href={JSON.parse(data?.social_links || "{}")?.facebook}>
                  <BsFacebook className=" h-10 w-10 text-brandPrimary" />
                  <div className="">
                    <p className=" text-neutralDGray font-semibold">Facebook</p>
                  </div>
                </a>
              </div>
            </div>
            <div className=" space-y-8">
              <div className=" flex items-center gap-4">
                <a
                  href={JSON.parse(data?.social_links || "{}")?.linkedin}
                  target="blank"
                >
                  <BsLinkedin className=" h-10 w-10 text-brandPrimary" />
                  <div className="">
                    <p className=" text-neutralDGray font-semibold">Linkedin</p>
                  </div>
                </a>
              </div>
              <div className=" flex items-center gap-4">
                <a
                  href={JSON.parse(data?.social_links || "{}")?.twitter}
                  target="blank"
                >
                  <BsTwitter className=" h-10 w-10 text-brandPrimary" />
                  <div className="">
                    <p className=" text-neutralDGray font-semibold">Twitter</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
