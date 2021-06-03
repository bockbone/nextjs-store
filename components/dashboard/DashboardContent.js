import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";

function DashboardContent() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="flex-auto font-mainFont">
      <div className="flex flex-col">
        <div className="flex justify-between my-4 mx-16 items-center">
          <h2 className="text-3xl font-bold text-[#362F78]">Dashboard</h2>
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
              <div className="absolute bg-white right-0 mt-2 w-56 border shadow-sm rounded-md animate-fade-in animate-fade-in">
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
        <div className="flex justify-between mx-16 text-white my-4">
          <div className="flex bg-[#662BE3] p-6 space-x-12 items-center rounded-md cursor-pointer transition hover:bg-[#413a80] ">
            <div>
              <p className="text-xm">Today sales</p>
              <p className="text-5xl">5465</p>
            </div>
            <div className="flex items-center text-sm">
              31% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex bg-[#d1a95a] p-6 space-x-16 items-center rounded-md cursor-pointer transition hover:bg-[#d89e2a] ">
            <div>
              <p className="text-xm">Today orders</p>
              <p className="text-5xl">156</p>
            </div>
            <div className="flex items-center text-sm">
              20% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex bg-[#2B8BE3] p-6 space-x-16 items-center rounded-md cursor-pointer transition hover:bg-[#1D6EBA] ">
            <div>
              <p className="text-xm">Total revenue</p>
              <p className="text-5xl">10000</p>
            </div>
            <div className="flex items-center text-sm">
              21% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex bg-[#662BE3] p-6 space-x-16 items-center rounded-md cursor-pointer transition hover:bg-[#413a80]">
            <div>
              <p className="text-xm">Total order</p>
              <p className="text-5xl">200</p>
            </div>
            <div className="flex items-center text-sm">
              21% <ArrowSmUpIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>bottom</div>
      </div>
    </div>
  );
}

export default DashboardContent;
