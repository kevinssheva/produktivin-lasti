import { useState } from "react";
import { BiSolidMedal } from "react-icons/bi";
import CategoryCard from "./components/category-card";
import Carousel from "./components/carousel";
import getCurrentUser from "@/actions/get-current-user";
import prisma from "@/lib/prismadb";
import { redirect } from "next/navigation";
const getMembership = async (userId: string) => {
  const membership = await prisma.userSubscription.findFirst({
    where: {
      userId,
      isActive: true,
      subscription: {
        endDate: {
          gte: new Date(),
        },
      },
    },
    select: {
      subscription: {
        select: {
          type: true,
        },
      },
    },
  });
  return membership;
};

export function formatSubscriptionType(type: string) {
  // Split the enum value by underscore, capitalize each part, and join them with a space
  return type
    .split("_")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}

export default async function Home() {
  const user = await getCurrentUser();
  if (!user) redirect("/account");
  const isMembership = await getMembership(user?.id);
  return (
    <div className="w-full pb-20 relative">
      <div className="mx-[5%] bg-[#7F7FDE] w-[90%] h-auto aspect-[356/71] rounded-[20px] flex items-center justify-center">
        <div className="flex flex-row pl-4 pr-3 w-full text-white justify-between items-center">
          <div className="flex flex-col">
            <p className="font-medium text-lg">
              Hello,{" "}
              <span className="font-bold">{user.name.split(" ")[0]}!</span>
            </p>
            {isMembership ? (
              <div className="flex flex-row text-[17px]">
                <BiSolidMedal />
                <p className="font-medium text-[12px] ml-[3px]">
                  {formatSubscriptionType(isMembership.subscription.type)}{" "}
                  Membership
                </p>
              </div>
            ) : (
              <div className="text-[#E0DBDB] font-medium text-[12px]">
                Non-membership
              </div>
            )}
          </div>
          {!isMembership ? (
            <button className="px-3 py-1 bg-[#422291] rounded-[10px]">
              <p className="text-white font-bold text-[0.6rem]">
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

      <p className="text-black ml-[8%] font-semibold mt-7">Recommend For You</p>

      <div className="mt-3">
        <Carousel category="for you" />
      </div>

      <p className="text-black ml-[8%] font-semibold mt-7">
        Recommend Event You
      </p>

      <div className="mt-3">
        <Carousel category="event" />
      </div>
    </div>
  );
}
