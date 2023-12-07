"use client";

import { useState } from "react";
import { BiSolidMedal } from "react-icons/bi";
import CategoryCard from "./components/category-card";
import Carousel from "./components/carousel";

export default function Home() {
  const [isMembership, setIsMembership] = useState(false);

  return (
    <div className="w-full h-full relative">
      <div className="mx-[5%] bg-[#7F7FDE] w-[90%] h-auto aspect-[356/71] rounded-[20px] flex items-center justify-center">
        <div className="flex flex-row w-[87%] text-white justify-between items-center">
          <div className="flex flex-col">
            <p className="font-medium text-[19px]">Hello, Kevin!</p>
            {isMembership ? (
              <div className="flex flex-row text-[17px]">
                <BiSolidMedal />
                <p className="font-medium text-[12px] ml-[3px]">
                  Starter Pro Membership
                </p>
              </div>
            ) : (
              <div className="text-[#E0DBDB] font-medium text-[12px]">
                Non-membership
              </div>
            )}
          </div>
          {!isMembership ? (
            <button className="w-[37%] h-[20px] bg-[#422291] rounded-[10px]">
              <p className="text-white font-bold text-[9px]">
                Join Member Now!
              </p>
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-7 mx-[12%] flex flex-row w-[76%] h-auto aspect-[304/74] rounded-[13px] justify-between">
        <CategoryCard category="Room" />
        <CategoryCard category="Open Space" />
        <CategoryCard category="Event" />
      </div>

      <p className="text-black ml-[8%] text-[13px] font-medium mt-7">
        Recommend For You
      </p>

      <div className="mt-3">
        <Carousel category="for you" />
      </div>

      <p className="text-black ml-[8%] text-[13px] font-medium mt-7">
        Recommend Event You
      </p>

      <div className="mt-3">
        <Carousel category="event" />
      </div>
    </div>
  );
}
