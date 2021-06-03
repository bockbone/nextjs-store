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
    <div className="flex-auto font-mainFont max-h-screen overflow-auto">
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
        <div className="mx-16 my-10 ">
          <p className="text-base font-bold mb-4 text-gray-400">
            Latest Purchase
          </p>
          <div className="">
            <div className="flex font-bold my-4 p-2">
              <p className="w-1/5">
                Name{" "}
                <span className="italic text-sm text-gray-400">Total - 78</span>
              </p>
              <p className="w-1/5">Product</p>
              <p className="w-1/5">Purchase Date</p>
              <p className="w-1/5">Status</p>
              <p className="w-1/5">Shipping Status</p>
            </div>
            <div className="flex text-gray-500 hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition h-12 items-center">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <div className="w-1/5">
                <p className="text-white text-xs bg-red-600 w-min py-1 px-3 rounded-full">
                  Unpaid
                </p>
              </div>
              <div className="w-1/5">
                <p className="text-white text-xs bg-yellow-600 w-max py-1 px-3 rounded-full">
                  In-progress
                </p>
              </div>
            </div>
            <div className="flex text-gray-700 hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition h-12 items-center">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <div className="w-1/5">
                <p className="text-white text-xs bg-green-500 w-min py-1 px-3 rounded-full">
                  Paid
                </p>
              </div>
              <div className="w-1/5">
                <p className="text-white text-xs bg-green-500 w-max py-1 px-3 rounded-full">
                  Shipped
                </p>
              </div>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>

            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
            <div className="flex hover:bg-gray-200 cursor-pointer py-3 px-2 rounded-md transition">
              <p className="w-1/5">Hafizul Hassan</p>
              <p className="w-1/5">Hoodie,cap</p>
              <p className="w-1/5">11 Oct 2021</p>
              <p className="w-1/5">Unpaid</p>
              <p className="w-1/5">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
