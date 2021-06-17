import Head from "next/head";
import Link from "next/link";
import dbConnect from "../../utils/dbConnect";
import Product from "../../models/Product";
import TopBar from "../../components/dashboard/topBar";
import Sidebar from "../../components/dashboard/Sidebar";
import CustomButton from "../../components/CustomButton";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";

function ProductDashboard({ products }) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      router.push("/dashboard/product");
    } catch (error) {
      setMessage("Failed to delete product");
    }
  };

  return (
    <div>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <div className="flex-auto font-mainFont max-h-screen overflow-auto">
          <div className="flex flex-col">
            <TopBar nav="Dashboard / Product" />
          </div>
          <div className="mx-16 my-10 ">
            <div className="flex items-center space-x-6">
              <p className="text-base font-bold text-gray-400">
                Product List (Total = {products.length})
              </p>
              <Link href="/dashboard/product/new">
                <a>
                  <CustomButton
                    insideText="Add Product"
                    Icon={PlusCircleIcon}
                  />
                </a>
              </Link>
            </div>
            <div className="flex flex-col my-6">
              {/* <div className="text-red-500 text-xs">{message}</div> */}
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Stock
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Price
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                          <tr key={product._id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {product.name}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {product.description}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {product.stock}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {product.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-1">
                              <Link href={`/dashboard/product/${product._id}`}>
                                <a className="text-white  bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded-full text-xs">
                                  Details
                                </a>
                              </Link>
                              <Link
                                href={`/dashboard/product/${product._id}/edit`}
                              >
                                <a className="text-white  bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded-full text-xs">
                                  Edit
                                </a>
                              </Link>

                              <a
                                className="cursor-pointer text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded-full text-xs"
                                onClick={() => handleDelete(product._id)}
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const result = await Product.find();
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });

  return { props: { products: products } };
}

export default ProductDashboard;
