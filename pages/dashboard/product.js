import Head from "next/head";
import ProductDashboardContent from "../../components/dashboard/ProductDashboardContent";
import Sidebar from "../../components/dashboard/Sidebar";

function Product() {
  return (
    <div>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <ProductDashboardContent />
      </main>
    </div>
  );
}

export default Product;
