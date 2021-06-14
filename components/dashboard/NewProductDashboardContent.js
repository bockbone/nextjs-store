import TopBar from "./topBar";
import ProductForm from "../ProductForm";

function NewProfileDashboardContent() {
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
    <div className="flex-auto font-mainFont max-h-screen overflow-auto">
      <div className="flex flex-col">
        <TopBar nav="Product / Add new product" />
      </div>
      <div className="mx-16 my-10 ">
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <ProductForm productForm={productForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProfileDashboardContent;
