import Image from "next/image";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { HiMiniArrowLeftCircle } from "react-icons/hi2";

const Page = () => {
  return (
    <div className="text-center h-full w-full flex justify-center items-center flex-col px-[5%] gap-5">
      <h1 className="text-5xl font-bold text-primary-200">oops!</h1>
      <Image
        src={"/404.svg"}
        width={500}
        height={500}
        alt="404"
        className="w-4/5"
      />
      <p className="text-4xl font-bold text-primary-200">Page not Found</p>
      <button className="bg-primary-100 text-white px-5 py-2 rounded-xl font-semibold flex gap-2 items-center">
        <HiMiniArrowLeftCircle size={20} />
        Back to Home
      </button>
    </div>
  );
};

export default Page;
