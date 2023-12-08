"use client";

import Search from "./components/search";
import { useState } from "react";
import Card from "./components/card";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");

  const fyp = [
    {
      src: "/landing/first.svg",
      nama: "Open Space A",
      alamat: "Produktiv.in 3rd Floor",
      waktu: "Available 24 hours",
      category: "fyp",
    },
    {
      src: "/landing/first.svg",
      nama: "Open Space B",
      alamat: "Tamansari",
      waktu: "Available 12 hours",
      category: "fyp",
    },
    {
      src: "/landing/first.svg",
      nama: "Open Space C",
      alamat: "Dipatiukur",
      waktu: "Available 17 hours",
      category: "fyp",
    },
  ];

  const event = [
    {
      src: "/landing/first.svg",
      nama: "High Tech & Hip Hop",
      alamat: "Produktiv.in 4th Floor",
      waktu: "December 7, 7:00 AM - 9:00 AM",
      category: "event",
    },
    {
      src: "/landing/first.svg",
      nama: "Disko Pantera",
      alamat: "GBK",
      waktu: "Now",
      category: "event",
    },
    {
      src: "/landing/first.svg",
      nama: "Apa kek",
      alamat: "Sokin",
      waktu: "bsk jam 9 pagi",
      category: "event",
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
    <div className="w-full h-full relative px-[5%]">
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
