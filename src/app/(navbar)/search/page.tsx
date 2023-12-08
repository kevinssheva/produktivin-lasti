"use client";

import Search from "./components/search";
import { useState } from "react";
import Card from "./components/card";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const fyp = [
    {
      src: "/dummy/open-1.jpg",
      nama: "Open Space A",
      alamat: "Produktiv.in 1st Floor",
      waktu: "Available 24 hours",
      category: "Room"
    },
    {
      src: "/dummy/open-2.jpg",
      nama: "Open Space B",
      alamat: "Produktiv.in 3rd Floor",
      waktu: "Available 24 hours",
      category: "Room"
    },
    {
      src: "/dummy/room-1.jpg",
      nama: "Room A",
      alamat: "Produktiv.in 2nd Floor",
      waktu: "Available 18 hours",
      category: "Room"
    },
    {
      src: "/dummy/room-2.jpg",
      nama: "Room B",
      alamat: "Produktiv.in 3rd Floor",
      waktu: "Available 18 hours",
      category: "Room"
    },
    {
      src: "/dummy/room-3.jpg",
      nama: "Room C",
      alamat: "Produktiv.in 2nd Floor",
      waktu: "Available 18 hours",
      category: "Room"
    },
  ];

  const event = [
    {
      src: "/dummy/event-1.jpg",
      nama: "High Tech & Hip Hop",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 7, 7:00 AM - 9:00 AM",
      category: "Event"
    },
    {
      src: "/dummy/event-2.jpg",
      nama: "Seminar About Startup",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 9, 9:00 AM - 12:00 AM",
      category: "Event"
    },
    {
      src: "/dummy/event-3.jpg",
      nama: "Talkshow with CEO of Gojek",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 10, 7:00 AM - 9:00 AM",
      category: "Event"
    },
  ];

  const [searched, setSearched] = useState(fyp.concat(event));

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const fypFiltered = fyp.filter((item: any) =>
      item.nama.toLowerCase().includes(value.toLowerCase())
    );
    const eventFiltered = event.filter((item: any) =>
      item.nama.toLowerCase().includes(value.toLowerCase())
    );
    setSearched(fypFiltered.concat(eventFiltered));
  };
  return (
    <div className="w-full relative px-[5%] pb-10">
      <h1 className="font-semibold text-lg mb-5">Search</h1>
      <Search onSearch={handleSearch} />
      {searched.length > 0 ? (
        <div className="mt-2">
          {searched.map((data: any, index: any) => (
            <div key={index} className="mt-4">
              <Card
                category={data.category}
                src={data.src}
                nama={data.nama}
                alamat={data.alamat}
                waktu={data.waktu}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
