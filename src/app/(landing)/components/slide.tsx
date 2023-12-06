import Image from "next/image";

const Slide = ({ index, body }: { index: number; body: React.ReactNode }) => {
  const imageUrl = () => {
    switch (index) {
      case 1:
        return "/landing/first-image.svg";
      case 2:
        return "/landing/second-image.svg";
      case 3:
        return "/landing/third-image.svg";
    }
  };
  return (
    <div className="w-full h-full relative text-center flex flex-col pb-10">
      {(index === 1 || index === 3) && (
        <Image
          src="/landing/first-blob-1.svg"
          width={100}
          height={100}
          alt="assets"
          className="w-[25%] absolute top-0 left-0 z-50"
        />
      )}
      {index === 1 && (
        <Image
          src="/landing/first-blob-2.svg"
          width={80}
          height={100}
          alt="assets"
          className="absolute top-[30%] right-0 z-50"
        />
      )}
      {index === 2 && (
        <>
          <Image
            src="/landing/second-blob-2.svg"
            width={65}
            height={100}
            alt="assets"
            className="absolute top-[40%] right-0 z-50"
          />
          <Image
            src="/landing/second-blob-1.svg"
            width={100}
            height={100}
            alt="assets"
            className="absolute top-0 left-0 z-50"
          />
        </>
      )}
      {index === 3 && (
        <>
          <Image
            src="/landing/third-blob-2.svg"
            width={70}
            height={100}
            alt="assets"
            className="absolute right-0 top-[45%] z-50"
          />
          <Image
            src="/landing/third-blob-3.svg"
            width={50}
            height={100}
            alt="assets"
            className="absolute left-0 top-[45%] z-50"
          />
        </>
      )}
      <div className="w-full h-[55%] relative mb-2">
        <Image
          src={imageUrl() ?? ""}
          fill
          alt="assets"
          className="w-full h-full object-cover object-bottom max-h-[20rem]"
        />
      </div>
      <h1 className="text-[2rem] font-bold">
        Produktiv.<span className="text-primary-100">in</span>
      </h1>
      <div className="flex flex-1 flex-col px-[5%] mt-3">{body}</div>
    </div>
  );
};

export default Slide;
