"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Swip = ({ slides }) => {
  return (
    <div className="relative max-h-[450px]  w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // navigation={true}

        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper max-h-[400px]  transition-all duration-500 ease-in-out"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative max-h-[400px]">
            <div className="w-[272px] h-[238px]">
              <Image
                src={slide.image}
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;
