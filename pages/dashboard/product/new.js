import Head from "next/head";
import TopBar from "../../../components/dashboard/topBar";
import Sidebar from "../../../components/dashboard/Sidebar";
import ProductForm from "../../../components/ProductForm";

function NewProduct() {
  const productForm = {
    name: "",
    sku: "",
    price: "",
    description: "",
    brand: "",
    category: "",
    stock: "",
    draft: false,
    image: [],
  };
  return (
    <div>
      <Head>
        <title>Product - New</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen font-mainFont">
        <Sidebar />
        <div className="flex-auto font-mainFont max-h-screen overflow-auto">
          <div className="flex flex-col">
            <TopBar nav="Product / Add new product" />
          </div>
          <div className="mx-16 my-10 ">
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <ProductForm
                    formId="add-new-product"
                    productForm={productForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewProduct;
