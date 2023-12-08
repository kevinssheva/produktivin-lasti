import AuthForm from "./components/auth-form";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-full relative flex flex-col">
      <Image
        src="/login/blob-1.svg"
        width={100}
        height={100}
        alt="assets"
        className="absolute top-0 left-0"
      />
      <Image
        src="/login/blob-2.svg"
        width={70}
        height={100}
        alt="assets"
        className="absolute top-20 right-0"
      />
      <div className="flex flex-col px-[7%] text-center py-7 z-10">
        <h1 className="text-[1.25rem] font-semibold">
          Unlock Your Potential with Seamless Registration at Produktiv.in
        </h1>
        <Image
          src="/login/illustration.svg"
          width={70}
          height={100}
          alt="assets"
          className="w-1/2 mx-auto mt-4"
        />
      </div>
      <AuthForm />
    </div>
  );
};

export default Page;
