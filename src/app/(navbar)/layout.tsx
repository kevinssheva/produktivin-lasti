import Navbar from "../../components/navbar";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col relative">
      <div className="flex-1 bg-[#F5F6F7] overflow-y-auto h-full">
        <div className="pt-10 h-full">{children}</div>
      </div>
      <Navbar />
    </div>
  );
};

export default NavbarLayout;
