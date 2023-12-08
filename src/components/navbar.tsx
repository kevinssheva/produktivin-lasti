"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const NavbarElement = ({ name }: { name: string }) => {
    const imageUrl = useMemo(() => {
      return `/navbar/${name.toLowerCase()}-${
        pathName.startsWith("/" + name.toLowerCase()) ? "filled" : "outline"
      }.svg`;
    }, [name]);
    return (
      <Link
        href={`/${name.toLowerCase()}`}
        className="h-full flex flex-col items-center justify-center gap-1"
      >
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Home"
          className="h-[35%] aspect-square"
        />
        <p className="text-xs text-[#484C52] font-medium">{name}</p>
      </Link>
    );
  };
  return (
    <div className="h-[4.2rem] bg-white flex justify-arround">
      <NavbarElement name="Home" />
      <NavbarElement name="Search" />
      <div className="flex-1 aspect-square relative">
        <div className="w-[80%] aspect-square rounded-full bg-primary-100 absolute bottom-[40%] left-1/2 -translate-x-1/2 flex justify-center items-center">
          <Image
            src={`/navbar/scan.svg`}
            width={100}
            height={100}
            alt="Home"
            className="w-3/5"
          />
        </div>
      </div>
      <NavbarElement name="Schedule" />
      <NavbarElement name="Profile" />
    </div>
  );
};

export default Navbar;
