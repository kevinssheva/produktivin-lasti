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
    <div className="w-full h-auto aspect-[309/70] rounded-[13px] border-[1px] border-[#6448AD] bg-white mt-6 flex flex-row items-center pl-[5%]">
      <div className="text-[#422291] text-[20px]">
        {choose ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
      </div>
      <div className="flex flex-col ml-[3%] items-start">
        <p className="text-[#422291] font-medium text-[13px] mb-1">
          {category}
        </p>
        <Image width={60} height={100} src={gambar} alt={category} />
      </div>
    </div>
  );
}
