/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import SettingsServices from "../../services/SettingsServices";
import useAsync from "../../hooks/useAsync";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import TextArea from "../../components/form/TextArea";
import useValidation from "../../hooks/useValidation";
import Contacts from "../../hooks/Contact";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Contact = () => {
  const { data, loading: loadingSettings } = useAsync(() => SettingsServices.getSettings());
  const { createContact, loading: loadingForm } = Contacts();
  const { t } = useTranslation();

  const { inputs, errors, handleOnChange, hanldeError, setInputs } =
    useValidation({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });

  const validation = (e: any) => {
    e.preventDefault();

    let valide = true;
    if (!inputs.first_name) {
      hanldeError("First name us is required", "first_name");
      valide = false;
    }
    if (!inputs.last_name) {
      hanldeError("Last name is required", "last_name");
      valide = false;
    }
    if (!inputs.email) {
      hanldeError("Email is required", "email");
      valide = false;
    }
    if (!inputs.phone) {
      hanldeError("Phone is required", "phone");
      valide = false;
    }
    if (!inputs.message) {
      hanldeError("Message is required", "message");
      valide = false;
    }

    if (valide) {
      createContact(inputs, setInputs);
    }
  };

  // Squelette pour les champs du formulaire
  const FormSkeleton = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><Skeleton height={56} /></div>
        <div><Skeleton height={56} /></div>
      </div>
      <div><Skeleton height={56} /></div>
      <div><Skeleton height={56} /></div>
      <div><Skeleton height={100} /></div>
      <div><Skeleton height={48} width={120} /></div>
      <div><Skeleton count={2} /></div>
    </div>
  );

  // Squelette pour les liens sociaux
  const SocialSkeleton = () => (
    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={80} height={20} />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={80} height={20} />
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={80} height={20} />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={80} height={20} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="dark:text-slate-200 mt-20">
      {/* Hero section améliorée : image + overlay */}
      <div
        className="relative bg-gray-900 bg-cover bg-center py-20"
        style={{ backgroundImage: "url(https://apisiteweb.elezardc.org/uploads/ban4.png)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t("get_in_touch")}</h1>
          <p className="text-lg opacity-90">Nous sommes à votre écoute – remplissez le formulaire ci-dessous.</p>
        </div>
      </div>

      {/* Section formulaire de contact - carte moderne */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            {t("get_in_touch")}
          </h2>
          {loadingSettings ? (
            <FormSkeleton />
          ) : (
            <form className="space-y-6" onSubmit={validation}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  name="first_name"
                  label={t("name")}
                  placeholder=""
                  type="text"
                  errors={errors.first_name}
                  value={inputs.first_name}
                  onChange={(e: any) => handleOnChange(e.target.value, "first_name")}
                />
                <Input
                  name="last_name"
                  label={t("prename")}
                  placeholder=""
                  type="text"
                  errors={errors.last_name}
                  value={inputs.last_name}
                  onChange={(e: any) => handleOnChange(e.target.value, "last_name")}
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <Input
                  name="email"
                  label={t("email")}
                  placeholder=""
                  type="email"
                  errors={errors.email}
                  value={inputs.email}
                  onChange={(e: any) => handleOnChange(e.target.value, "email")}
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <Input
                  name="phone"
                  label={t("phone")}
                  placeholder=""
                  type="tel"
                  errors={errors.phone}
                  value={inputs.phone}
                  onChange={(e: any) => handleOnChange(e.target.value, "phone")}
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <TextArea
                  name="message"
                  placeholder={t("message")}
                  type="text"
                  value={inputs.message}
                  onChange={(e: any) => handleOnChange(e.target.value, "message")}
                  label={t("message")}
                />
              </div>
              <div className="flex justify-center">
                <Button label={t("send")} loading={loadingForm} />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  En cliquant sur "Envoyer", vous acceptez notre{" "}
                  <Link to="#" className="text-principale font-bold hover:underline" target="_blank">
                    Politique de confidentialité
                  </Link>
                  . Vous recevrez peut-être des notifications par texto ou email.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Section d'aide et réseaux sociaux - cartes améliorées */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-gradient-to-r from-neutralSilver to-gray-100 dark:from-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              {t("help")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              <span className="text-principale font-semibold">{t("way_contact")}</span> – {t("more_info")}
            </p>
          </div>

          {loadingSettings ? (
            <SocialSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href={`https://wa.me/${data?.phones}?text=${encodeURIComponent(t("message_whatsapp"))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition group"
              >
                <BsWhatsapp className="h-12 w-12 text-green-500 mb-3 group-hover:scale-110 transition" />
                <span className="text-gray-700 dark:text-gray-200 font-semibold">WhatsApp</span>
              </a>
              <a
                href={JSON.parse(data?.social_links || "{}")?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition group"
              >
                <BsFacebook className="h-12 w-12 text-blue-600 mb-3 group-hover:scale-110 transition" />
                <span className="text-gray-700 dark:text-gray-200 font-semibold">Facebook</span>
              </a>
              <a
                href={JSON.parse(data?.social_links || "{}")?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition group"
              >
                <BsLinkedin className="h-12 w-12 text-blue-700 mb-3 group-hover:scale-110 transition" />
                <span className="text-gray-700 dark:text-gray-200 font-semibold">LinkedIn</span>
              </a>
              <a
                href={JSON.parse(data?.social_links || "{}")?.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition group"
              >
                <BsTwitter className="h-12 w-12 text-sky-500 mb-3 group-hover:scale-110 transition" />
                <span className="text-gray-700 dark:text-gray-200 font-semibold">Twitter</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;