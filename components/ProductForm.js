import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

const ProductForm = ({ productForm, forNewProduct = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: productForm.name,
    sku: productForm.sku,
    price: productForm.price,
    description: productForm.description,
    brand: productForm.brand,
    category: productForm.category,
    stock: productForm.stock,
    draft: productForm.published,
    image: productForm.image,
  });

  const createProduct = async (form) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/dashboard/product");
    } catch (error) {
      setMessage("Failed to add product");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.name === "draft" ? target.checked : target.value;
    const name = target.name;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewProduct ? createProduct(form) : "";
    } else {
      setErrors({ errs });
    }
    // createData(form);
  };

  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    return err;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="sku"
              className="block text-sm font-medium text-gray-700"
            >
              Product SKU
            </label>
            <input
              type="text"
              name="sku"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description
            </label>
            <div className="mt-1">
              <textarea
                name="description"
                rows={3}
                onChange={handleChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-1"
                placeholder="you@example.com"
                defaultValue={""}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Brief description for your product.
            </p>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Product brand
            </label>
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              List of brands : Puma, Adidas, Nike
            </p>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Product category
            </label>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              List of categories : Shoes, T-shirt, Shirt, Pants
            </p>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Product price
            </label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Product stock
            </label>
            <input
              type="text"
              name="stock"
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                name="draft"
                type="checkbox"
                checked={form.draft}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="draft" className="font-medium text-gray-700">
                Draft
              </label>
              <p className="text-gray-500">Save the product as a draft.</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
