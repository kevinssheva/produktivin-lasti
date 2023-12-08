import { HiTicket } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import Image from "next/image";
import SignOut from "./components/sign-out";
import getSession from "@/actions/get-session";
import Link from "next/link";

const Page = async () => {
  const session = await getSession();
  return (
    <div className="w-full h-full flex flex-col pb-10 px-[5%]">
      <h1 className="font-semibold text-lg mb-5">Profile</h1>
      <div className="w-full flex items-center gap-4">
        <div className="bg-gray-300 w-20 aspect-square rounded-full relative overflow-hidden">
          <Image
            src={"profile/face.svg"}
            fill={true}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-semibold text-lg">{session?.user?.name}</h1>
          <p className="text-primary-100">Edit Profile</p>
        </div>
      </div>
      <div className="w-full flex flex-col mt-4 gap-3 flex-1">
        <Link
          href="/profile/my-membership"
          className="w-full bg-gradient-to-b from-primary-100 to-primary-200 flex text-white items-center rounded-xl py-3 px-4 gap-2"
        >
          <HiTicket />
          <p>My Membership</p>
        </Link>
        <div className="w-full bg-gradient-to-b from-primary-100 to-primary-200 flex text-white items-center rounded-xl py-3 px-4 gap-2">
          <FaBell />
          <p>Notification</p>
        </div>
        <div className="w-full bg-gradient-to-b from-primary-100 to-primary-200 flex text-white items-center rounded-xl py-3 px-4 gap-2">
          <HiInformationCircle />
          <p>About</p>
        </div>
        <SignOut />
      </div>
    </div>
  );
};

export default Page;
