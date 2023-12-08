"use client";
import { IoLogOut } from "react-icons/io5";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <div
      className="cursor-pointer mt-auto w-full bg-gradient-to-b from-red-600 to-red-500 flex text-white items-center rounded-xl py-3 px-4 gap-2"
      onClick={() => signOut()}
    >
      <IoLogOut />
      <p>Log Out</p>
    </div>
  );
};

export default SignOut;
