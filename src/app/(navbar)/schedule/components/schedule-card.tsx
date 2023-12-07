import Image from "next/image";
import { FaCalendar, FaClock } from "react-icons/fa6";

const ScheduleCard = ({
  type,
  name,
  date,
  time,
}: {
  type: string;
  name: string;
  date: string;
  time: string;
}) => {
  return (
    <div className="w-full bg-white py-4 rounded-xl shadow-lg px-3">
      <p className="text-xs text-gray-500 leading-none">{type}</p>
      <h1 className="font-semibold mb-2 my-1 leading-snug">{name}</h1>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <FaCalendar className="text-primary-100" />
            <p className="text-[0.7rem] font-light">{date}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaClock className="text-primary-100" />
            <p className="text-[0.7rem] font-light">{time}</p>
          </div>
        </div>
        <div className="text-[0.7rem] py-1 px-2 rounded-md bg-green-200 text-green-500">
          Payment Successful
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
