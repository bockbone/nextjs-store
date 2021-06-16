import Head from "next/head";
import TopBar from "../../../../components/dashboard/topBar";
import Sidebar from "../../../../components/dashboard/Sidebar";
import dbConnect from "../../../../utils/dbConnect";
import Product from "../../../../models/Product";

function ProductDetails({ product }) {
  return (
    <div>
      <Head>
        <title>Product Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <div className="flex-auto font-mainFont max-h-screen overflow-auto">
          <div className="flex flex-col">
            <TopBar nav="Product / Add new product" />
          </div>
          <div className="mx-16 my-10 ">
            <div>{product.name}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const product = await Product.findById(params.id).lean();
  product._id = product._id.toString();

  return { props: { product } };
}

export default ProductDetails;
