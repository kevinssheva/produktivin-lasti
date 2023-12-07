import Navbar from "../components/navbar";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col relative">
      <div className="flex-1 bg-[#F5F6F7] overflow-y-auto">
        <div className="px-[5%] pt-10">{children}</div>
      </div>
      <Navbar />
    </div>
  );
};

export default NavbarLayout;
