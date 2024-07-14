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
    <div className="relative h-[450px]  w-full">
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
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper h-[400px]  transition-all duration-500 ease-in-out"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-[400px]">
            <div className="flex flex-col items-center p-6 bg-background text-foreground">
              <div className="relative flex flex-col items-center max-w-2xl mx-auto">
                <Image
                  undefinedhidden="true"
                  alt="left-quote"
                  src="/assets/icons/quote.png"
                  className="absolute left-0 top-0 transform -translate-y-1/2"
                  width={24}
                  height={24}
                />
                <Image
                  undefinedhidden="true"
                  alt="right-quote"
                  src="/assets/icons/quote.png"
                  className="absolute right-0 bottom-0 transform -translate-y-1/2"
                  width={24}
                  height={24}
                />
                <Image
                  src={slide.image}
                  alt="User's photo"
                  className=" rounded-full mb-4"
                  width={104}
                  height={104}
                />
                <p className="text-center text-gray-500 mb-4">{slide.testi}</p>
                <p className="font-bold text-xl">{slide.name}</p>
                <p className="text-muted-foreground">
                  Doctor at Addis Ababa University
                </p>
              </div>
              {/* <div className="flex mt-6 space-x-2">
                <span className="block w-2 h-2 bg-muted rounded-full"></span>
                <span className="block w-2 h-2 bg-primary rounded-full"></span>
                <span className="block w-2 h-2 bg-muted rounded-full"></span>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;
