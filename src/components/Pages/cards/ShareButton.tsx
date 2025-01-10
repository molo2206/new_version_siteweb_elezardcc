import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/sharer/sharer.php?u=URL_TO_SHARE",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/intent/tweet?url=URL_TO_SHARE&text=TEXT_TO_SHARE",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/shareArticle?mini=true&url=URL_TO_SHARE",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://api.whatsapp.com/send?text=URL_TO_SHARE",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:?subject=SUBJECT&body=URL_TO_SHARE",
    },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="flex items-center bg-principale text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
      >
        Partager
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            {shareLinks.map((link, index) => (
              <li key={index} className="border-b last:border-none">
                <a
                  href={link.url.replace("URL_TO_SHARE", window.location.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <span className="text-blue-600 mr-2">{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
