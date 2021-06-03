import Head from "next/head";
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
        <div className="flex-auto bg-yellow-200">right</div>
      </main>
    </div>
  );
}

export default Product;
