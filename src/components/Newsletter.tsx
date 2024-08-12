
import { useTranslation } from "react-i18next";
const Newsletter = () => {

  const { t } = useTranslation();
  return (
    <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto py-16  dark:bg-slate-800 dark:text-slate-200">
      <div className=" flex items-center justify-center lg:w-2/5 mx-auto">
        <div className=" text-center">
          <h2 className=" lg:text-5xl text-3xl font-semibold mb-6 lg:leading-snug">
            {t('HowVideo')}
          </h2>
          <div className=" flex items-center justify-center gap-8">
            <a href="/videos" className="btn-primary text-white" >{t('Learn_more')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
