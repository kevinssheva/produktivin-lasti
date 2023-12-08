import getSession from "@/actions/get-session";
import MembershipPage from "./components/membership-page";
import prisma from "@/lib/prismadb";
const getMembership = async () => {
  return [];
};
const Page = async () => {
  const activeMembership = await getMembership();
  return (
    <div className="w-full">
      <MembershipPage memberships={activeMembership} />
    </div>
  );
};

export default Page;
