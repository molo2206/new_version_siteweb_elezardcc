/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import PartenersServices from "../services/PartenersServices";
import useAsync from "../hooks/useAsync";

const Partners = () => {
  const { data } = useAsync(() => PartenersServices.getPartners());
  //Get current blog
  const { t } = useTranslation();
  return (
    <div className=" relative ">
      <div className="dark:bg-slate-800 p-8 ">
        <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
          Nos Partenaires
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
          {data.map((partners: any) => (
            <div
              key={partners?.id}
              className="bg-white border dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partners?.image}
                alt={`Logo de ${partners.image}`}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                {partners?.full_name}
              </h2>
              <a
                href={partners?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex justify-center text-principal hover:text-hover"
              >
                Visitez leur site →
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Partners;
