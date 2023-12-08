"use client";
import { useState } from "react";
import MembershipCard, { Membership } from "./membership-card";
import Modal from "@/components/barcode-modal";
import Link from "next/link";
import Image from "next/image";

interface MembershipPageProps {
  membership: {
    subscription: Membership;
    id: string;
  } | null;
}

const MembershipPage = ({ membership }: MembershipPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full px-[5%] overflow-hidden">
      <h1 className="font-semibold text-lg mb-5">Membership</h1>
      {membership === null ? (
        <div className="text-center flex flex-col items-center h-full justify-center gap-3 my-20">
          <Image
            src="/membership/sad.svg"
            width={200}
            height={200}
            alt="Membership"
          />
          <p className="font-bold text-xl">
            It seems like you don{"'"}t have any membership yet.
          </p>
          <Link
            href="/profile/membership"
            className="font-semibold underline text-primary-100"
          >
            Why not try a new one?
          </Link>
        </div>
      ) : (
        <>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <div className="flex flex-col gap-3">
            <MembershipCard {...membership.subscription} />
            <div className="flex justify-between">
              <p
                className="underline text-primary-100 text-sm font-semibold cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                Show Barcode
              </p>
              <p className="underline text-primary-100 text-sm font-semibold cursor-pointer">
                Change Plan
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MembershipPage;
