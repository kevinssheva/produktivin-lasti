"use client";

import Card from "../../search/components/card";

import "swiper/css";

import "./styles.css";

import { FreeMode } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

export default function Carousel(props: any) {
  const fyp = [
    {
      src: "/landing/first.svg",
      nama: "Open Space A",
      alamat: "Produktiv.in 3rd Floor",
      waktu: "Available 24 hours",
    },
    {
      src: "/landing/first.svg",
      nama: "Open Space B",
      alamat: "Tamansari",
      waktu: "Available 12 hours",
    },
    {
      src: "/landing/first.svg",
      nama: "Open Space C",
      alamat: "Dipatiukur",
      waktu: "Available 17 hours",
    },
  ];

  const event = [
    {
      src: "/landing/first.svg",
      nama: "High Tech & Hip Hop",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 7, 7:00 AM - 9:00 AM",
    },
    {
      src: "/landing/first.svg",
      nama: "Disko Pantera",
      alamat: "GBK",
      waktu: "Now",
    },
    {
      src: "/landing/first.svg",
      nama: "Apa kek",
      alamat: "Sokin",
      waktu: "bsk jam 9 pagi",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {props.category === "for you" ? (
          <>
            {fyp.map((data, index) => (
              <div key={index}>
                <SwiperSlide>
                  <Card
                    category="fyp"
                    src={data.src}
                    nama={data.nama}
                    alamat={data.alamat}
                    waktu={data.waktu}
                  />
                </SwiperSlide>
              </div>
            ))}
          </>
        ) : props.category === "event" ? (
          <>
            {event.map((data, index) => (
              <div key={index}>
                <SwiperSlide>
                  <Card
                    category="event"
                    src={data.src}
                    nama={data.nama}
                    alamat={data.alamat}
                    waktu={data.waktu}
                  />
                </SwiperSlide>
              </div>
            ))}
          </>
        ) : null}
      </Swiper>
    </>
  );
}
