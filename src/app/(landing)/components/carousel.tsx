"use client";

import { FaWifi, FaRegCalendar, FaCouch, FaArrowRight } from "react-icons/fa6";
import Slide from "./slide";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Carousel = () => {
  const router = useRouter();
  const FirstBody = (
    <>
      <h2 className="text-[1.25rem] font-semibold">
        A new way to revolutionise your workspace to yourself
      </h2>
      <div className="mt-auto">
        <h3>Book a Room & Workspace</h3>
        <p className="text-sm text-primary-100 font-semibold">
          Find Co-Working Space and Event near you
        </p>
      </div>
    </>
  );

  const SecondBody = (
    <>
      <p className="text-xs text-primary-200 font-semibold tracking-wider">
        WHY CHOOSE US?
      </p>
      <h2 className="text-[1.25rem] font-semibold">
        The benefits that will make you comfort
      </h2>
      <div className="flex justify-around text-xs gap-5 mt-auto">
        <div className="flex flex-col gap-3 items-center">
          <FaRegCalendar size={24} className="text-primary-100" />
          <p>Community Events</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <FaWifi size={24} className="text-primary-100" />
          <p>High-Speed Wireless</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <FaCouch size={24} className="text-primary-100" />
          <p>Comfort Lounges</p>
        </div>
      </div>
    </>
  );
  const ThirdBody = (
    <>
      <p className="text-xs text-primary-200 font-semibold tracking-wider">
        BECOME A MEMBER
      </p>
      <h2 className="text-[1.25rem] font-semibold">
        Ready to try different work environment now?
      </h2>
      <p className="text-[0.6rem] font-light mt-auto">
        Coworking is an arrangement in which workers of different companies
        share an office space, allowing cost savings and convenience through the
        use of common infrastructures, such as equipment, utilities, and
        receptionist and custodial services, and in some cases refreshments and
        parcel acceptance services.
      </p>
    </>
  );

  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    if (activeIndex === 2) {
      return router.push("/account");
    }
    swiperRef.current?.slideNext();
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className="h-[80%]">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <Slide index={1} body={FirstBody} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide index={2} body={SecondBody} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide index={3} body={ThirdBody} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute bottom-0 w-full aspect-[100/35] flex justify-center items-center">
        <div
          className={`w-[40%] aspect-[100/24] rounded-full border-2 border-white z-10 cursor-pointer flex ${
            activeIndex === 2 ? "justify-between pl-4" : "justify-center"
          } items-center`}
          onClick={handleNext}
        >
          {activeIndex === 2 ? (
            <>
              <p className="text-sm font-semibold text-white">Join Member</p>
              <div className="h-full aspect-square rounded-full bg-primary-100 flex items-center justify-center">
                <FaArrowRight className="text-white" />
              </div>
            </>
          ) : (
            <Image
              src="/landing/arrow.svg"
              width={100}
              height={100}
              alt="assets"
              className="w-[80%]"
            />
          )}
        </div>
        <Image
          src="/landing/bottom.svg"
          fill
          alt="assets"
          className="absolute w-full h-full object-cover object-top"
        />
      </div>
    </>
  );
};

export default Carousel;
