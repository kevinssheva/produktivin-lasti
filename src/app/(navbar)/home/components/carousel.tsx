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
      src: "/dummy/open-1.jpg",
      nama: "Open Space A",
      alamat: "Produktiv.in 1st Floor",
      waktu: "Available 24 hours",
    },
    {
      src: "/dummy/open-2.jpg",
      nama: "Open Space B",
      alamat: "Produktiv.in 3rd Floor",
      waktu: "Available 24 hours",
    },
    {
      src: "/dummy/room-1.jpg",
      nama: "Room A",
      alamat: "Produktiv.in 2nd Floor",
      waktu: "Available 18 hours",
    },
    {
      src: "/dummy/room-2.jpg",
      nama: "Room B",
      alamat: "Produktiv.in 3rd Floor",
      waktu: "Available 18 hours",
    },
    {
      src: "/dummy/room-3.jpg",
      nama: "Room C",
      alamat: "Produktiv.in 2nd Floor",
      waktu: "Available 18 hours",
    },
  ];

  const event = [
    {
      src: "/dummy/event-1.jpg",
      nama: "High Tech & Hip Hop",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 7, 7:00 AM - 9:00 AM",
    },
    {
      src: "/dummy/event-2.jpg",
      nama: "Seminar About Startup",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 9, 9:00 AM - 12:00 AM",
    },
    {
      src: "/dummy/event-3.jpg",
      nama: "Talkshow with CEO of Gojek",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 10, 7:00 AM - 9:00 AM",
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
