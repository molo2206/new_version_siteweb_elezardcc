/* eslint-disable @typescript-eslint/no-explicit-any */
import Spinner from "react-bootstrap/Spinner";
import { FaSearch } from "react-icons/fa";
interface props {
  onClick?: any;
  label?: any;
  type?: any;
  loading?: boolean | any;
}

const ButtonSearch = ({ onClick, label, type, loading }: props) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      type={type || "submit"}
      className={`px-3 ${
        loading ? "cursor-not-allowed opacity-50" : ""
      } absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 fa fa-search`}
    >
      <FaSearch />
      {label}

      <Spinner color="red" variant="primary" animation="border" />
    </button>
  );
};

export default ButtonSearch;
