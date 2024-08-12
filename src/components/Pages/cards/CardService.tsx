/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

interface props {
  service?: any;
}
const CardService = ({ service }: props) => {
  return (
    <div
      key={service?.id}
      className=" px-4 py-8  text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
           hover:border-indigo-700
            transition-all duration-300 flex items-center justify-center h-full"
    >
      <Link to={service?.url}>
        <div>
          <div className=" bg-[#E8F5E9] mb-4 h-14  mx-auto rounded-t-3xl rounded-br-3xl">
            <img src={service?.image} alt="" />
          </div>
          <h4 className=" text-2xl font-bold text-neutralDGray mb-2 px-2">
            {service?.full_name}
          </h4>
          {/* <p className=" text-sm text-neutralDGray">{service.description}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default CardService;
