/* eslint-disable @typescript-eslint/no-explicit-any */
import InputSearch from "../../form/InputSearch";
import useValidation from "../../../hooks/useValidation";
import { useNavigate } from "react-router-dom";
import ButtonSearch from "../../form/ButtonSearch";
const SearchForm = ({ title }: any) => {
  const { inputs, handleOnChange, hanldeError } = useValidation({
    keyword: "",
  });
  const navigation = useNavigate();
  const validation = (e: any) => {
    e.preventDefault();
    let valide = true;
    if (!inputs.keyword) {
      hanldeError("keyword is required", "keyword");
      valide = false;
    }
    if (valide) {
      navigation("/search?q=" + inputs.keyword);
    }
  };
  return (
    <div>
      <nav className="flex justify-between items-center border-b border-gray-700 pb-4 py-10">
        <div className="flex space-x-6 text-sm md:text-base">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <form className="relative md:hidden block " onSubmit={validation}>
          <InputSearch
            name="keyword"
            placeholder="Rechercher"
            type="text"
            value={inputs.keyword}
            onChange={(e: any) => handleOnChange(e.target.value, "keyword")}
          />
          <ButtonSearch loading="" />
        </form>
        <form className="relative hidden md:block" onSubmit={validation}>
          <InputSearch
            name="keyword"
            placeholder="Rechercher"
            type="text"
            value={inputs.keyword}
            onChange={(e: any) => handleOnChange(e.target.value, "keyword")}
          />
          <ButtonSearch loading="" />
        </form>
      </nav>
    </div>
  );
};

export default SearchForm;
