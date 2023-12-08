"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import Button from "./button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`
          absolute bg-black/40 z-[70] w-full h-full overflow-hidden top-0 left-0
          flex justify-center items-center transition
          ${showModal ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`
            w-4/5
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
            flex justify-center items-center
          `}
        >
          <div className="bg-white w-full py-7 px-6 text-center rounded-xl relative">
            <div
              className="absolute top-3 right-3 cursor-pointer hover:bg-gray-300 rounded-full p-1 transition"
              onClick={handleClose}
            >
              <IoMdClose size={22} />
            </div>
            <h1 className="text-2xl font-bold">Scan Barcode</h1>
            <p className="font-semibold">for enter the room</p>
            <div className="my-3 w-full bg-primary-100 rounded-xl p-3 flex flex-col justify-center items-center text-white gap-3">
              <p className="font-semibold text-center">
                SUBSCRIPTION ID: ASD34FDSS234
              </p>
              <Image
                src="/barcode.svg"
                width={200}
                height={200}
                alt="barcode"
                className="w-4/5 rounded-md aspect-square"
              />
              <p className="text-xl font-bold ">Produktiv.in</p>
            </div>
            <p className="font-semibold text-xl">Enjoy Your Work!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
