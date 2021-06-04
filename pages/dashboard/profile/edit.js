import Head from "next/head";
import EditProfileDashboardContent from "../../../components/dashboard/EditProfileDashboardContent";
import Sidebar from "../../../components/dashboard/Sidebar";

function EditProfile() {
  return (
    <div>
      <Head>
        <title>Edit Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <EditProfileDashboardContent />
      </main>
    </div>
  );
}

export default EditProfile;
