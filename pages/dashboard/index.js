import Head from "next/head";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardContent from "../../components/dashboard/DashboardContent";

function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <DashboardContent />
      </main>
    </div>
  );
}

export default Dashboard;
