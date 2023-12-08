export interface Membership {
  id: string;
  startDate: Date;
  endDate: Date;
  type: string;
}

const MembershipCard = ({ id, type, startDate, endDate }: Membership) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = endDate.toLocaleDateString("en-US", options);

  const subsType = type
    .split("_")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");

  return (
    <div className="w-full bg-primary-300 py-3 px-4 rounded-lg text-white">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm">Produktiv.in</p>
          <p className="font-bold mt-0.5 mb-1 leading-tight text-lg">
            {subsType}
          </p>
          <p className="text-[0.8rem]">Expired in {formattedDate}</p>
        </div>
        <p className="tracking-widest text-[0.7rem] font-medium px-2 py-1 bg-white rounded-full text-primary-100">
          CURRENT PLAN
        </p>
      </div>
    </div>
  );
};

export default MembershipCard;
