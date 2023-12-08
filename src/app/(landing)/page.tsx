import { authOptions } from "../api/auth/[...nextauth]/route";
import Carousel from "./components/carousel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  if (session?.user) {
    redirect("/home");
  }

  return (
    <div className="w-full h-full relative">
      <Carousel />
    </div>
  );
}
