import Head from "next/head";
import OrderDashboardContent from "../../components/dashboard/OrderDashboardContent";
import Sidebar from "../../components/dashboard/Sidebar";

function Order() {
  return (
    <div>
      <Head>
        <title>Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <OrderDashboardContent />
      </main>
    </div>
  );
}

export default Order;
