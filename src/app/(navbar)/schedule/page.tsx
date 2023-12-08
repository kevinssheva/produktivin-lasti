import ScheduleCard from "./components/schedule-card";

const scheduleData = [
  {
    type: "Private Space",
    name: "Room A",
    date: "23 Desember 2023",
    time: "12:00 PM - 3:00PM",
  },
  {
    type: "Open Space",
    name: "Open Space A",
    date: "23 Desember 2023",
    time: "12:00 PM - 3:00PM",
  },
  {
    type: "Event",
    name: "Artificial Intelligence Seminar",
    date: "23 Desember 2023",
    time: "12:00 PM - 3:00PM",
  },
];

const Page = () => {
  return (
    <div className="w-full overflow-y-auto h-full px-[5%]">
      <h1 className="font-semibold text-lg mb-5">Your Booking Schedule</h1>
      <div className="w-full flex flex-col gap-4 pb-5">
        {scheduleData.map((data, index) => (
          <ScheduleCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Page;
