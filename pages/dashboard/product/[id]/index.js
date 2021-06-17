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
            <TopBar nav="Product" />
          </div>
          <div className="mx-16 my-10 ">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-7xl">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Product Details
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Product Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.name}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">SKU</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.sku}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.description}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Brand</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.brand}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Category
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.category}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Price</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.price}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Stock</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.stock}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Publish Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {product.draft ? "Draft" : "Publish"}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Images
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Image list
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
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
