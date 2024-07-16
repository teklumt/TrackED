"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Swip = ({ slides, wid, hei }) => {
  return (
    <div className="relative max-h-[650px] mt-10 w-full">
      <Swiper
        slidesPerView={
          window.innerWidth > 1024
            ? 4
            : window.innerWidth > 768
            ? 3
            : window.innerWidth > 640
            ? 2
            : 1
        }
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper max-h-[600px]  transition-all duration-500 ease-in-out "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative max-h-[400px]">
            <div className="w-[272px] h-[238px] bg-primeGray flex flex-col justify-center items-center rounded-md">
              <Image
                src={slide.image}
                alt="Picture of the author"
                width={wid ? wid : 50}
                height={hei ? hei : 50}
              />

              <h3 className="text-[18px] font-bold">{slide.name}</h3>
              <p className="text-[14px]">{slide.testi}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;
