"use client";
import { useState } from "react";
import MembershipCard, { Membership } from "./membership-card";
import Modal from "@/components/barcode-modal";
import Link from "next/link";

interface MembershipPageProps {
  memberships: Membership[];
}

const MembershipPage = ({ memberships }: MembershipPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full px-[5%] overflow-hidden">
      <h1 className="font-semibold text-lg mb-5">Membership</h1>
      {memberships.length === 0 ? (
        <div className="text-center">
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
            {memberships.map((sub) => (
              <MembershipCard key={sub.id} {...sub} />
            ))}
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
