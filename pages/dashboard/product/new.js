import Head from "next/head";
import NewProductDashboardContent from "../../../components/dashboard/NewProductDashboardContent";
import Sidebar from "../../../components/dashboard/Sidebar";

function NewProduct() {
  return (
    <div>
      <Head>
        <title>Product - New</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <NewProductDashboardContent />
      </main>
    </div>
  );
}

export default NewProduct;
