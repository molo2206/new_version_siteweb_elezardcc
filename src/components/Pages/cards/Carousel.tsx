/* eslint-disable @typescript-eslint/no-explicit-any */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Video from "../../../services/VideosServices";
import useAsync from "../../../hooks/useAsync";

const Carousel = () => {
  const { data: home } = useAsync(() => Video.getVideoHome());
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {home.map((video: any, index: any) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-96">
              <img
                src={video?.cover}
                alt={video?.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-lg">
                <h2 className="text-lg font-bold">{video?.title}</h2>
                {video.subtitle && (
                  <p className="text-sm mt-1">{video.subtitle}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
