import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const MembershipCard = ({ monthly }: { monthly?: boolean }) => {
  return (
    <div className="w-full bg-pink-300 aspect-[320/443] max-w-[18rem] relative rounded-xl overflow-hidden text-white z-10 flex flex-col px-[5%] py-6">
      <Image
        src="/membership/background.svg"
        fill
        alt="assets"
        className="w-[120%] object-none object-center -z-10"
      />
      {!monthly && (
        <div className="absolute px-2 py-1 text-[0.7rem] text-white/90 tracking-wider bg-primary-100 right-4 top-4 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h1 className="text-2xl font-bold">
        {monthly ? "$20" : "$50"}
        <span className="text-base font-normal">
          /{monthly ? "month" : "year"}
        </span>
      </h1>
      <h1 className="text-3xl font-bold my-2">
        {monthly ? "Starter Pro" : "Exclusive"}
      </h1>
      <p className="text-sm">
        For most businesses that want to otpimize web queries
      </p>
      <div className="flex flex-col gap-3 my-4">
        <div className="flex gap-2 items-center">
          <div className="w-5 aspect-square bg-white/30 rounded-full flex justify-center items-center">
            <FaCheck size={14} />
          </div>
          <p className="text-sm">All limited links</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 aspect-square bg-white/30 rounded-full flex justify-center items-center">
            <FaCheck size={14} />
          </div>
          <p className="text-sm">Own analytics platform</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 aspect-square bg-white/30 rounded-full flex justify-center items-center">
            <FaCheck size={14} />
          </div>
          <p className="text-sm">Chat support</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 aspect-square bg-white/30 rounded-full flex justify-center items-center">
            <FaCheck size={14} />
          </div>
          <p className="text-sm">Optimize hashtags</p>
        </div>
        {!monthly && (
          <div className="flex gap-2 items-center">
            <div className="w-5 aspect-square bg-white/30 rounded-full flex justify-center items-center">
              <FaCheck size={14} />
            </div>
            <p className="text-sm">Unlimited users</p>
          </div>
        )}
      </div>
      <button className="w-full bg-[#D8CAFF] text-primary-100 rounded-full py-2 mt-auto text-sm font-semibold">
        Choose Plan
      </button>
    </div>
  );
};

export default MembershipCard;
