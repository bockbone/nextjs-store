import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function DashboardContent() {
  const [isOpen, setIsOpen] = useState(false);
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
              className="flex items-center transition hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
              onClick={toggle}
            >
              <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
              <div className="mx-4">
                <h3 className="font-bold text-sm text-[#362f78]">Hafizul</h3>
                <p className="text-xs italic text-gray-500">Admin</p>
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            {isOpen ? null : <div className="absolute">Dropdown menu</div>}
          </div>
        </div>
        <div>center</div>
        <div>bottom</div>
      </div>
    </div>
  );
}

export default DashboardContent;
