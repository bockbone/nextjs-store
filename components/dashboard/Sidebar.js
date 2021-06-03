import SidebarNav from "./sidebarNav";

function Sidebar() {
  return (
    <div className="flex flex-col w-1/6 bg-[#43379D] text-[#97A2E4] px-2 justify-between">
      <div>
        <div className="text-center text-xl font-black tracking-wider my-6">
          FUNCLOTHING
        </div>
        <SidebarNav />
      </div>
      <div className="text-[#43379D] text-center font-bold uppercase bg-[#d1d7f7] py-2 mx-10 mb-4 cursor-pointer rounded-lg transition hover:text-[#d1d7f7] hover:bg-[#97A2E4]">
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
