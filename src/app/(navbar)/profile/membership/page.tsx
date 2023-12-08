import getCurrentUser from "@/actions/get-current-user";
import Membership from "./components/membership";
import { getMembership } from "../../home/page";

const Page = async () => {
  const user = await getCurrentUser();
  const membership = await getMembership(user?.id ?? "");
  const membershipType = membership?.subscription.type
    .toLowerCase()
    .split("_")
    .join(" ");

  return (
    <div className="w-full h-full px-[5%]">
      <h1 className="font-semibold text-lg mb-5">Membership</h1>
      <div className="w-full px-5 py-4 bg-primary-400 flex justify-between text-primary-100 font-semibold text-sm items-center rounded-xl">
        <p>Produktiv.in {membershipType ? membershipType : "free"}</p>
        <p className="tracking-widest font-medium text-xs">CURRENT PLAN</p>
      </div>
      <Membership />
    </div>
  );
};

export default Page;
