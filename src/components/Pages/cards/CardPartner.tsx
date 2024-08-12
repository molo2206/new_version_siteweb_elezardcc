/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
interface props {
  partner?: any;
}
const CardPartner = ({ partner }: props) => {
  return (
    <div>
      <Link to={partner?.url}>
        <img
          src={partner?.image}
          alt="company logo"
          className="inline-block w-20 h-20 rounded-full mx-4"
        />
        <h1 className=" font-medium items-center justify-center">{partner?.full_name}</h1>
      </Link>
    </div>
  );
};

export default CardPartner;
