import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="w-[100%] h-auto aspect-[321/173] bg-white rounded-[13px] overflow-hidden flex flex-col relative">
      <div className="relative top-0 z-50 rounded-t-[13px] w-[100%] h-[59%]">
        <Image
          src={props.src}
          alt="Gambar"
          className="w-full h-full object-cover object-center"
          fill={true}
        />
      </div>
      <div className="w-[100%] h-[41%] flex flex-row justify-between bg-white rounded-b-[13px] py-3 px-4 relative">
        <div className="flex flex-col h-full items-start justify-between">
          <p className="text-black font-bold">{props.nama}</p>
          <div className="flex flex-col items-start text-[0.6rem] leading-tight text-[#484C52]">
            <p>{props.alamat}</p>
            <p>{props.waktu}</p>
          </div>
        </div>
        <button className="bg-[#422291] text-[0.7rem] text-white font-bold bottom-2 px-4 absolute right-2 rounded-[10px] py-1">
          {props.category === "Room"
            ? "View Availability"
            : props.category === "Event"
            ? "Register Event"
            : null}
        </button>
      </div>
    </div>
  );
}
