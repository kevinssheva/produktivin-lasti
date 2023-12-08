import getSession from "@/actions/get-session";
import MembershipPage from "./components/membership-page";
import prisma from "@/lib/prismadb";
const getMembership = async () => {
  const session = await getSession();
  const email = session?.user?.email;
  if (!email) return null;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (!user) return null;
  const subscription = await prisma.userSubscription.findFirst({
    where: {
      userId: user.id,
      isActive: true,
      subscription: {
        endDate: {
          gte: new Date(),
        },
      },
    },
    select: {
      id: true,
      subscription: {
        select: {
          id: true,
          type: true,
          startDate: true,
          endDate: true,
        },
      },
    },
  });
  return subscription;
};
const Page = async () => {
  const activeMembership = await getMembership();
  return (
    <div className="w-full">
      <MembershipPage membership={activeMembership} />
    </div>
  );
};

export default Page;
