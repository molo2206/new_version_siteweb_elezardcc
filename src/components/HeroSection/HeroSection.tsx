import "react-multi-carousel/lib/styles.css";
import { GiDeer, GiFishingBoat, GiHangGlider } from "react-icons/gi";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlineParagliding } from "react-icons/md";
import Carousel from "react-multi-carousel";
import SettingsServices from "../../services/SettingsServices";
import useAsync from "../../hooks/useAsync";
import { showingTranslateValue } from "../../utils/heleprs";
import { useAuthContext } from "../../context";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { data } = useAsync(() => SettingsServices.getSettings());
  const { lang } = useAuthContext();
  const { t } = useTranslation();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className=" relative  lg:mt-20 lg:py-20"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="300"
    >
      <video
        autoPlay
        muted
        loop
        className=" absolute z-10 w-full h-full lg:top-0 -top-[12vh]  object-cover opacity-55"
      >
        <source src="/src/assets/video/media.mp4" type="video/mp4" />
      </video>
      <div
        className=" flex flex-col items-center justify-center relative z-10 lg:h-full h-screen 
      max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto"
      >
        <h2 className="text-4xl flex justify-center font-bold text-brandPrimary dark:text-white">
          Bienvenue sur la plateforme {data?.app_name}
        </h2>

        <p className=" text-white text-2xl my-8  dark:text-slate-800">Filmer,Humaniser, Aider</p>
        <div className=" bg-transparent h-[400px] rounded-lg w-full justify-center ">
          <div className="py-2  z-10 max-w-[1200px] px-6 mx-auto lg:mt-20 sm:mt-20 ">
            <Carousel
              partialVisbile={false}
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite
              autoPlay={true}
              arrows={true}
              keyBoardControl={true}
              itemClass="carouselItem"
            >
              <div className="  p-8 rounded-lg flex flex-col justify-center items-center gap-4">
                <GiDeer className=" rounded-full w-20 h-20 p-4   hover:text-white" />
                <p className=" font-bold">Wildlife</p>
              </div>
              <div className=" p-8 rounded-lg flex flex-col justify-center items-center gap-4">
                <MdOutlineParagliding className=" rounded-full w-20 h-20 p-4 bg-[#26B2EC24] text-[#06aff6] hover:bg-orange-500 hover:text-white" />
                <p className=" font-bold">Paragliding</p>
              </div>
              <div className=" p-8 rounded-lg flex flex-col justify-center items-center gap-4">
                <CiFlag1 className="rounded-full w-20 h-20 p-4 bg-[#f5ecfd] text-[#9e60e5] hover:bg-orange-500 hover:text-white" />
                <p className=" font-bold">Adventure</p>
              </div>
              <div className="  p-8 rounded-lg flex flex-col justify-center items-center gap-4">
                <GiHangGlider className=" rounded-full w-20 h-20 p-4  bg-[#fff4de] text-[#f6b23b] hover:bg-orange-500 hover:text-white" />
                <p className=" font-bold">Hang Gliding</p>
              </div>
              <div className="  p-8 rounded-lg flex flex-col justify-center items-center gap-4">
                <GiFishingBoat className=" rounded-full w-20 h-20 p-4  bg-[#D036321C] text-[#d03632] hover:bg-orange-500 hover:text-white" />
                <p className=" font-bold">Sight</p>
              </div>
            </Carousel>
          </div>
        </div>
        <img src="/src/assets/images" alt="" className=" my-4" />
        <p className=" text-white font-semibold text-[28px]"></p>
      </div>
    </div>
  );
};

export default HeroSection;
