import { Footer } from "flowbite-react";
import { useTranslation } from "react-i18next";
import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo_.jpg";
import { useState } from "react";
const Myfooter = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { t } = useTranslation();
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }
  const [currentDate] = useState(getDate());
  return (
    <Footer
      container
      className="dark:bg-slate-800 dark:text-slate-200 bg-neutralSilver"
    >
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 dark:text-slate-200 ">
          <div className=" space-y-4 mb-8">
            <a
              href=" "
              className=" text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center "
              />
              <span className="text-[#263238] dark:text-slate-200 ">
                Eleza RDC
              </span>
            </a>
            <div>
              <p className=" mb-1">
                {" "}
                Copyright © {parseInt(currentDate)} Eleza RDC ltd.
              </p>
              <p> All right reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title={t("AboutUs")} />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">{t("AboutUs")}</Footer.Link>
                <Footer.Link href="/mission">{t("Mission")}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t("follows")} />
              <Footer.LinkGroup col>
                <Footer.Link
                  href={JSON.parse(data?.social_links || "{}")?.facebook}
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href={JSON.parse(data?.social_links || "{}")?.linkedin}
                >
                  Linkdin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Flowbite™"
            year={parseInt(currentDate)}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href={JSON.parse(data?.social_links || "{}")?.facebook}
              icon={BsFacebook}
            />
            <Footer.Icon
              href={JSON.parse(data?.social_links || "{}")?.twitter}
              icon={BsTwitter}
            />
            <Footer.Icon
              href={JSON.parse(data?.social_links || "{}")?.linkedin}
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Myfooter;
