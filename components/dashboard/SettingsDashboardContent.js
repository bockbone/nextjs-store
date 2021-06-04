import TopBar from "./topBar";

function SettingsDashboardContent() {
  return (
    <div className="flex-auto font-mainFont max-h-screen overflow-auto">
      <div className="flex flex-col">
        <TopBar nav="Dashboard / Settings" />
      </div>
      <div className="mx-16 my-10 "></div>
    </div>
  );
}

export default SettingsDashboardContent;
