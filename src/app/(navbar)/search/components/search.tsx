"use client";

import { useState, ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

export type SearchProps = {
  onSearch: (value: string) => void;
};

export default function Search(props: SearchProps) {
  const { onSearch } = props;
  const [value, setValue] = useState("Search...");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="relative w-full text-[11px]  text-gray-600 flex flex-row aspect-[324/34] bg-white rounded-[15px]">
      <button
        className="w-[15%] h-full absolute bg-[#422291] right-0 z-10 flex justify-center items-center rounded-r-[15px] text-white text-[20px]"
        onClick={() => onSearch(value)}
      >
        <CiSearch />
      </button>
      <input
        type={"search"}
        name={"search"}
        placeholder={"Search room, open scape, or event"}
        className="bg-white flex w-full rounded-[15px] absolute aspect-[324/34] pl-[5%] focus:outline-none"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
