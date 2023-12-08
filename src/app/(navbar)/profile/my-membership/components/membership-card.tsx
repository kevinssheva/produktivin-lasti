export interface Membership {
  id: string;
  startDate: Date;
  endDate: Date;
  type: string;
}

const MembershipCard = ({ id, type, startDate, endDate }: Membership) => {
  return (
    <div className="w-full bg-primary-300 py-3 px-4 rounded-lg text-primary-100">
      <div className="flex justify-between">
        <div>
          <p className="text-sm">Produktiv.in</p>
          <p className="font-bold mt-0.5 mb-1 leading-tight">{type}</p>
          <p className="text-[0.8rem]">
            Expired in {endDate.toLocaleDateString()}
          </p>
        </div>
        <p className="tracking-widest text-[0.7rem] font-medium">
          CURRENT PLAN
        </p>
      </div>
    </div>
  );
};

export default MembershipCard;
