import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="w-[100%] h-auto aspect-[321/173] bg-white rounded-[13px] overflow-hidden flex flex-col relative">
      <div className="relative top-0 z-50 rounded-t-[13px] w-[100%] h-[59%]">
        <Image src={props.src} alt="Gambar" objectFit="cover" fill={true} />
      </div>
      <div className="w-[100%] h-[41%] flex flex-row justify-between bg-white rounded-b-[13px] py-3 px-4 relative">
        <div className="flex flex-col h-full items-start justify-between">
          <p className="text-[11px] text-black font-bold">{props.nama}</p>
          <div className="flex flex-col items-start">
            <p className="text-[8px] text-[#484C52]">{props.alamat}</p>
            <p className="text-[8px] text-[#484C52]">{props.waktu}</p>
          </div>
        </div>
        <div className="w-[35%] h-full relative">
          <button className="bg-[#422291] text-[9px] text-white font-bold bottom-0 w-full absolute right-0 rounded-[10px] h-[20px]">
            {props.category === "fyp" ? "View Availability" : "Register Event"}
          </button>
        </div>
      </div>
    </div>
  );
}
