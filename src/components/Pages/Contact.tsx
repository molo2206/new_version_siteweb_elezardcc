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

const Contact = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
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
  return (
    <div className="py-20 dark:text-slate-200">
      {/* about text */}
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className=" md:w-5/5 mx-auto">
            <h2 className=" text-2xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              {t('get_in_touch')}
            </h2>
            {/* <p className=" md:w-3/4 text-neutralGray mb-8"> */}
            <form className="mt-8 space-y-6 mb-8" onSubmit={validation}>
              <div className="space-y-px rounded-md items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <Input
                    name="first_name"
                    label={t('name')}
                    placeholder=""
                    type="text"
                    errors={errors.first_name}
                    value={inputs.first_name}
                    onChange={(e: any) =>
                      handleOnChange(e.target.value, "first_name")
                    }
                  />
                  <Input
                    name="last_name"
                    label={t('prename')}
                    placeholder=""
                    type="text"
                    errors={errors.last_name}
                    value={inputs.last_name}
                    onChange={(e: any) =>
                      handleOnChange(e.target.value, "last_name")
                    }
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    name="email"
                    label={t('email')}
                    placeholder=""
                    type="text"
                    errors={errors.email}
                    value={inputs.email}
                    onChange={(e: any) =>
                      handleOnChange(e.target.value, "email")
                    }
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    name="phone"
                    label={t('phone')}
                    placeholder=""
                    type="phone"
                    errors={errors.phone}
                    value={inputs.phone}
                    onChange={(e: any) =>
                      handleOnChange(e.target.value, "phone")
                    }
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <TextArea
                    name="message"
                    placeholder={t('message')}
                    type="text"
                    value={inputs.message}
                    onChange={(e: any) =>
                      handleOnChange(e.target.value, "message")
                    }
                    label={t('message')}
                  />
                </div>
              </div>
              <Button label={t('send')} loading={loadingForm} />
              <div className="justify-center items-center">
                <div className="mb-2">
                  <p className="text-sm font-montserrat text-slate-700 dark:text-slate-600 text-justify">
                    En cliquant sur Continuer, vous acceptez notre{" "}
                    <Link
                      to="#"
                      className="text-principal font-bold"
                      target="_blank"
                    >
                      Politique de confidentialité
                    </Link>
                    . Vous recevrez peut-être des notifications par texto ou par
                    email de notre part.
                  </p>
                </div>
              </div>
            </form>
            {/* </p> */}
            {/* <button className=" btn-primary">Contact</button> */}
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
                //https://wa.me/whatsappphonenumber?text=urlencodedtext
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

export default Contact;
