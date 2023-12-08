import { IoMdRadioButtonOff } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";
import { Image } from "next/dist/client/image-component";

export default function ChoosePayment(props: any) {
  let gambar = "/payment/dana.svg";
  let category = "DANA";
  let choose;

  if (props.category === "DANA") {
    category = "DANA";
    gambar = "/payment/dana.svg";

    if (props.flow === 1) {
      choose = true;
    }
  } else if (props.category === "gopay") {
    category = "GoPay";
    gambar = "/payment/gopay.svg";

    if (props.flow === 2) {
      choose = true;
    }
  } else if (props.category === "ovo") {
    category = "OVO";
    gambar = "/payment/ovo.svg";

    if (props.flow === 3) {
      choose = true;
    }
  } else if (props.category === "shopee") {
    category = "Shopee Pay";
    gambar = "/payment/shopee.svg";

    if (props.flow === 4) {
      choose = true;
    }
  }

  return (
    <div
      className={`transition w-full h-auto py-4 rounded-[13px] border-[1px] border-[#6448AD] bg-white mt-6 flex flex-row items-center pl-[5%] ${
        choose ? "shadow-xl scale-[103%]" : "scale-100"
      }`}
    >
      <div className="w-4 aspect-square border-[1px] border-primary-100 rounded-full overflow-hidden flex justify-center items-center">
        <div
          className={`w-full h-full bg-primary-100 rounded-full ${
            choose ? "scale-100" : "scale-0"
          } transition`}
        ></div>
      </div>
      <div className="flex flex-col ml-[3%] items-start">
        <p className="text-[#422291] font-semibold text-lg mb-1">{category}</p>
        <Image width={60} height={100} src={gambar} alt={category} />
      </div>
    </div>
  );
}
