"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import ChoosePayment from "./components/choose-payment";

import axios from "axios";
import toast from "react-hot-toast";

export default function Payment() {
  //   const router = useRouter();
  //   const { monthly } = router.query;
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const [chooseFlow, setChooseFlow] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...");
    } else {
      toast.dismiss();
    }
  }, [isLoading]);

  const handleSubmit = () => {
    try {
      setIsLoading(true);
      if (chooseFlow === 0) throw new Error("Please choose payment method");
      if (type !== "monthly" && type !== "yearly")
        throw new Error("Invalid type");

      const paymentMethod = () => {
        switch (chooseFlow) {
          case 1:
            return "DANA";
          case 2:
            return "GOPAY";
          case 3:
            return "OVO";
          case 4:
            return "SHOPEE_PAY";
        }
      };

      const subscriptionType = () => {
        switch (type) {
          case "monthly":
            return "STARTER_PRO";
          case "yearly":
            return "EXCLUSIVE";
        }
      };

      axios
        .post(
          "/api/subscribe?payment=" +
            paymentMethod() +
            "&type=" +
            subscriptionType()
        )
        .then((res) => {
          if (res.status === 201) {
            setTimeout(() => {
              toast.success("Payment success");
            }, 500);
            router.push("/profile/my-membership");
            router.refresh();
          } else {
            setTimeout(() => {
              toast.error("Payment Failed");
            }, 500);
          }
        });
    } catch (error) {
      setTimeout(() => {
        toast.error("Something went wrong");
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative px-[5%] pb-10">
      <h1 className="font-semibold text-lg mb-5">Your Plan</h1>

      <div className="w-full bg-[#6448AD] rounded-[13px] relative">
        <div className="w-full py-4 bg-[#D8CAFF] rounded-t-[13px] flex flex-col text-[#422291] font-medium justify-center pl-[5%]">
          <p className="text-xl font-semibold">
            {type === "monthly" ? "Starter Pro" : "Exclusive"}
          </p>
          <p className="mt-1">
            1 Account {type === "monthly" ? "Starter Pro" : "Exclusive"}
          </p>
        </div>
        <div className="w-full flex flex-col text-white font-medium justify-between px-[5%] py-4">
          <p className="font-semibold text-sm">Start from today</p>
          <div className="flex flex-row justify-between my-2">
            <p className="text-sm">One payment amount</p>
            <p className="text-sm">
              {type === "monthly" ? "$20 during 1 month" : "$50 during 1 year"}
            </p>
          </div>
          <p className="text-xs">Terms and Condition Apply</p>
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
        onClick={() => setChooseFlow(4)}
      >
        <ChoosePayment category={"shopee"} flow={chooseFlow} />
      </button>

      <button
        onClick={handleSubmit}
        className="w-full h-auto py-2 bg-[#422291] rounded-[14px] flex items-center justify-center text-white font-semibold mt-5"
      >
        Continue Payment
      </button>
    </div>
  );
}
