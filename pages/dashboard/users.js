import Head from "next/head";
import UsersDashboardContent from "../../components/dashboard/UsersDashboardContent";
import Sidebar from "../../components/dashboard/Sidebar";

function Users() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <UsersDashboardContent />
      </main>
    </div>
  );
}

export default Users;
