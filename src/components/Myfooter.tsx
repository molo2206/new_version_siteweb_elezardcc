import SettingsServices from "../services/SettingsServices";
import useAsync from "../hooks/useAsync";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Myfooter = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { data: address } = useAsync(() => SettingsServices.getAdresse());
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }
  const [currentDate] = useState(getDate());
  return (
    <footer className="bg-principale dark:bg-slate-800  dark:text-white  text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* En Plus Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">{data?.app_name}</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline text-sm md:text-base"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/newsletter-inscription"
                className="hover:underline text-sm md:text-base"
              >
                La newsletter
              </a>
            </li>
          </ul>
        </div>
        {/* À Propos Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">À propos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:underline text-sm md:text-base"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline text-sm md:text-base"
              >
                Nous contacter
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contactez-nous !</h3>
          <p className="mb-2">
            <span className="block text-sm md:text-base" >
              {address?.adresse +
                "/" +
                address?.city +
                "/" +
                address?.country?.name}
            </span>
          </p>

          <p className="mb-2">
            <a
              href={"tel:" + address?.phones}
              className="hover:underline text-sm md:text-base"
              
            >
              {address?.phones}
            </a>
          </p>
          <p>
            <a
              href={"mailto:" + address?.emails}
              className="hover:underline text-sm md:text-base"
              
            >
              {address?.emails}
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
          <a
            target="_blank"
            href={JSON.parse(data?.social_links || "{}")?.facebook}
            className="text-white text-xl font-light hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href={JSON.parse(data?.social_links || "{}")?.twitter}
            className="text-white text-xl font-light hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href={JSON.parse(data?.social_links || "{}")?.linkedin}
            className="text-white text-xl font-light hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className=" py-4 font-light" style={{ fontSize: 11 }}>
          {data?.app_name}. © {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Myfooter;
