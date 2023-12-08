"use client";

import { useRouter } from "next/router";
import { useState } from "react";

import ChoosePayment from "./components/choose-payment";

export default function Payment() {
  //   const router = useRouter();
  //   const { monthly } = router.query;
  const [isMonthly, setIsMonthly] = useState(false);
  const [chooseFlow, setChooseFlow] = useState(0);

  return (
    <div className="w-full h-full relative px-[10%]">
      <p className="text-black font-medium text-[21px]">Your Plan</p>

      <div className="w-full h-auto aspect-[309/158] bg-[#6448AD] rounded-[13px] relative">
        <div className="w-full h-[40%] bg-[#D8CAFF] rounded-t-[13px] flex flex-col text-[#422291] font-medium justify-center pl-[5%]">
          <p className="text-[15px]">
            {isMonthly ? "Starter Pro" : "Exclusive"}
          </p>
          <p className="text-[8px] mt-1">
            1 Account {isMonthly ? "Starter Pro" : "Exclusive"}
          </p>
        </div>
        <div className="w-full h-[60%] flex flex-col text-white font-medium justify-between px-[5%] py-[5%]">
          <p className="text-[12px]">Start from today</p>
          <div className="flex flex-row justify-between">
            <p className="text-[13px]">One payment amount</p>
            <p className="text-[13px]">
              {isMonthly ? "$20 during 1 month" : "$50 during 1 year"}
            </p>
          </div>
          <p className="text-[8px]">Terms and Condition Apply</p>
        </div>
      </div>

      <button
        className="w-full h-auto aspect-[309/70]"
        onClick={() => setChooseFlow(1)}
      >
        <ChoosePayment category={"DANA"} flow={chooseFlow} />
      </button>
      <button
        className="w-full h-auto aspect-[309/70]"
        onClick={() => setChooseFlow(2)}
      >
        <ChoosePayment category={"gopay"} flow={chooseFlow} />
      </button>
      <button
        className="w-full h-auto aspect-[309/70]"
        onClick={() => setChooseFlow(3)}
      >
        <ChoosePayment category={"ovo"} flow={chooseFlow} />
      </button>
      <button
        className="w-full h-auto aspect-[309/70]"
        onClick={() => setChooseFlow(3)}
      >
        <ChoosePayment category={"shopee"} flow={chooseFlow} />
      </button>

      <button className="w-full h-auto aspect-[309/37] bg-[#422291] rounded-[14px] flex items-center justify-center text-white text-[12px] font-medium mt-6">
        Continue Payment
      </button>
    </div>
  );
}
