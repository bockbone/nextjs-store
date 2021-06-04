import Head from "next/head";
import ProfileDashboardContent from "../../components/dashboard/ProfileDashboardContent";
import Sidebar from "../../components/dashboard/Sidebar";

function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <ProfileDashboardContent />
      </main>
    </div>
  );
}

export default Profile;
