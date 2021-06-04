import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/outline";

function TopBar({ nav }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between my-4 mx-16 items-center">
      <h2 className="text-3xl font-bold text-[#362F78]">{nav}</h2>
      <div className="relative">
        <div
          className="flex items-center transition hover:bg-gray-100 p-2 rounded-lg cursor-pointer border shadow-sm"
          onClick={toggle}
        >
          <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
          <div className="mx-4">
            <h3 className="font-bold text-sm text-[#362f78]">Hafizul</h3>
            <p className="text-xs italic text-gray-500">Admin</p>
          </div>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        {isOpen ? null : (
          <div
            className="absolute bg-white right-0 mt-2 w-56 border shadow-sm rounded-md animate-fade-in animate-fade-in"
            onMouseLeave={() => {
              setIsOpen(true);
            }}
          >
            <div className="flex flex-col text-gray-800 text-sm">
              <Link href="/dashboard/profile">
                <a className="py-2 pl-10 hover:bg-gray-100">My profile</a>
              </Link>
              <Link href="/dashboard/users">
                <a className="py-2 pl-10 hover:bg-gray-100">Users</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
