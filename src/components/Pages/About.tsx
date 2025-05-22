import aboutImag from "../../assets/ban3.jpg";
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../context";
import SettingsServices from "../../services/SettingsServices";
import useAsync from "../../hooks/useAsync";
import { showingTranslateValue } from "../../utils/heleprs";

const About = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { lang } = useAuthContext();
  const { t } = useTranslation();
  return (
    <div className="bg-white text-gray-900 mt-20">
      {/* About text section */}
      <div className="px-8 lg:px-14 py-8 bg-gray-50 my-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-screen-xl mx-auto">
          <div className="mt-10">
            <img
              src={aboutImag}
              alt="About us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-3/5 mx-auto text-center md:text-left">
            <h2 className="text-4xl font-semibold text-neutral-800 mb-4">
              {t('AboutUs')}
            </h2>
            <p
              className="text-slate-800 dark:text-white mb-8"
              dangerouslySetInnerHTML={{
                __html: showingTranslateValue(data?.translations, lang)?.about_us,
              }}
            />
          </div>
        </div>
      </div>

      {/* Company stats and social media */}
      <div className="bg-neutral-200 dark:bg-slate-900 text-gray-900 dark:text-slate-200 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-screen-xl mx-auto">
          {/* Help and contact section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-neutral-800 dark:text-white mb-4">
              {t('help')}
              <br />
              <span className="text-brandPrimary">{t('way_contact')}</span>
            </h2>
            <p className="text-neutral-600 dark:text-slate-200">{t('more_info')}</p>
          </div>

          {/* Social media links */}
          <div className="md:w-1/2 flex flex-col sm:flex-row items-center justify-around gap-12 mt-8 md:mt-0">
            <div className="space-y-8">
              {/* Whatsapp */}
              <div className="flex items-center gap-4">
                <a
                  href={`https://wa.me/${data?.phones}?text=${t('message_whatsapp')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <BsWhatsapp className="h-10 w-10 text-brandPrimary" />
                  <p className="text-neutral-800 dark:text-white font-semibold">Whatsapp</p>
                </a>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-4">
                <a
                  href={JSON.parse(data?.social_links || "{}")?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <BsFacebook className="h-10 w-10 text-brandPrimary" />
                  <p className="text-neutral-800 dark:text-white font-semibold">Facebook</p>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <a
                  href={JSON.parse(data?.social_links || "{}")?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <BsLinkedin className="h-10 w-10 text-brandPrimary" />
                  <p className="text-neutral-800 dark:text-white font-semibold">Linkedin</p>
                </a>
              </div>

              {/* Twitter */}
              <div className="flex items-center gap-4">
                <a
                  href={JSON.parse(data?.social_links || "{}")?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <BsTwitter className="h-10 w-10 text-brandPrimary" />
                  <p className="text-neutral-800 dark:text-white font-semibold">Twitter</p>
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