import { MdMeetingRoom, MdDesk } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";

export default function CategoryCard(props: any) {
  return (
    <button className="h-full w-auto aspect-[80/74] bg-white rounded-[13px] border-[0.7px] border-[#422291] flex flex-col items-center justify-center">
      {props.category === "Room" ? (
        <div className="text-[#422291] text-[35px]">
          <MdMeetingRoom />
        </div>
      ) : props.category === "Open Space" ? (
        <div className="text-[#422291] text-[35px]">
          <MdDesk />
        </div>
      ) : (
        <div className="text-[#422291] text-[35px]">
          <BiCalendarEvent />
        </div>
      )}
      {props.category === "Room" ? (
        <p className="text-[#422291] text-[11px] font-medium">Room</p>
      ) : props.category === "Open Space" ? (
        <p className="text-[#422291] text-[11px] font-medium">Open Space</p>
      ) : (
        <p className="text-[#422291] text-[11px] font-medium">Event</p>
      )}
    </button>
  );
}
