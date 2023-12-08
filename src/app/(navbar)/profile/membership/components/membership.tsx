"use client";

import MembershipCard from "./membership-card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectFlip } from "swiper/modules";
import { useRef, useState } from "react";

const Membership = () => {
  const swiperRef = useRef<SwiperType>();
  const [isMonthly, setIsMonthly] = useState(false);

  const handleMonth = () => {
    if (isMonthly) return;
    setIsMonthly(true);
    swiperRef.current?.slideNext();
  };

  const handleYear = () => {
    if (!isMonthly) return;
    setIsMonthly(false);
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full">
      <div className="mx-auto text-xs tracking-widest items-center flex justify-center my-4 text-black">
        <div
          className={`px-4 py-3 cursor-pointer ${
            isMonthly && "bg-primary-100 text-white/90"
          } rounded-full`}
          onClick={handleMonth}
        >
          MONTHLY
        </div>
        <div
          className={`px-4 py-3 cursor-pointer ${
            !isMonthly && "bg-primary-100 text-white/90"
          } rounded-full `}
          onClick={handleYear}
        >
          YEARLY
        </div>
      </div>
      <Swiper
        effect={"flip"}
        modules={[EffectFlip]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <MembershipCard />
        </SwiperSlide>
        <SwiperSlide>
          <MembershipCard monthly />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Membership;
