import Membership from "./components/membership";

const Page = () => {
  return (
    <div className="w-full h-full">
      <h1 className="font-semibold text-lg mb-5">Membership</h1>
      <div className="w-full px-5 py-4 bg-primary-400 flex justify-between text-primary-100 font-semibold text-sm items-center rounded-xl">
        <p>Produktiv.in free</p>
        <p className="tracking-widest font-medium text-xs">CURRENT PLAN</p>
      </div>
      <Membership />
    </div>
  );
};

export default Page;
