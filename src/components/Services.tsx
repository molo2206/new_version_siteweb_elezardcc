/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import PartenersServices from "../services/PartenersServices";
import useAsync from "../hooks/useAsync";
import CardPartner from "./Pages/cards/CardPartner";

const Services = () => {
  const { data } = useAsync(() => PartenersServices.getPartners());
  //Get current blog
  const { t } = useTranslation();
  return (
    <div
      className=" md:px-14 px-4 py-16 max-w-screen-2xl  mx-auto dark:bg-slate-800 dark:text-slate-200"
      id="services"
    >
      <div className=" text-center my-8 ">
        <h2 className=" text-4xl text-neutralDGray font-semibold mb-2">
          {t("Partner")}
        </h2>
        <p className=" text-neutralDGray">{t("WithPartner")}</p>
        {/* company logo*/}
        <div className=" my-12 flex flex-wrap items-center justify-center ">
          {data?.map((partner: any) => (
            <CardPartner partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
