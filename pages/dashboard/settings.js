import Head from "next/head";
import SettingsDashboardContent from "../../components/dashboard/SettingsDashboardContent";
import Sidebar from "../../components/dashboard/Sidebar";

function Settings() {
  return (
    <div>
      <Head>
        <title>Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <SettingsDashboardContent />
      </main>
    </div>
  );
}

export default Settings;
