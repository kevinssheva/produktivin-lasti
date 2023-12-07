import Navbar from "../components/navbar";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full w-full flex flex-col relative">
      <div className="flex-1 bg-[#F5F6F7] pb-[4.2rem]">{children}</div>
      <Navbar />
    </div>
  );
};

export default NavbarLayout;
