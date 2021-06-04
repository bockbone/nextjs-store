import SidebarNav from "./sidebarNav";

function Sidebar() {
  return (
    <div className="flex flex-col sm:w-max md:w-1/6  bg-[#43379D] text-[#97A2E4] px-2 justify-between">
      <div>
        <div className="text-center text-xl font-black tracking-wider my-6">
          FUNCLOTHING
        </div>
        <SidebarNav />
      </div>
      <button className="inline-flex mb-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
