import Head from "next/head";
import dbConnect from "../../../../utils/dbConnect";
import Product from "../../../../models/Product";
import TopBar from "../../../../components/dashboard/topBar";
import Sidebar from "../../../../components/dashboard/Sidebar";
import ProductForm from "../../../../components/ProductForm";

function EditProduct({ product }) {
  const productForm = {
    name: product.name,
    sku: product.sku,
    price: product.price,
    description: product.description,
    brand: product.brand,
    category: product.category,
    stock: product.stock,
    draft: product.published,
    image: product.image,
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
                    formId="edit-product"
                    productForm={productForm}
                    forNewProduct={false}
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

export async function getServerSideProps({ params }) {
  await dbConnect();

  const product = await Product.findById(params.id).lean();
  product._id = product._id.toString();

  return { props: { product } };
}

export default EditProduct;
