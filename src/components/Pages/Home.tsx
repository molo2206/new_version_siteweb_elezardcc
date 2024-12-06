
import About from "../About";
import Newsletter from "../Newsletter";
import HeroSection from "../HeroSection/HeroSection";
import Partners from "../Partners";


const Home = () => {
  // const { data: cat } = useAsync(() => CategoryServices.getCategory());
  // const { lang } = useAuthContext();
  // const { t } = useTranslation();
  // const navigation = useNavigate();

  // const { inputs, handleOnChange, hanldeError } = useValidation({
  //   keyword: "",
  // });

  // const validation = (e: any) => {
  //   e.preventDefault();

  //   let valide = true;
  //   if (!inputs.keyword) {
  //     hanldeError("keyword is required", "keyword");
  //     valide = false;
  //   }

  //   if (valide) {
  //     navigation("/search?q=" + inputs.keyword);
  //   }
  // };

  return (
    <div className="">
      <HeroSection />
      <About />
      <Partners />
      <Newsletter />
      <br />
      <br />
    </div>
  );
};

export default Home;
