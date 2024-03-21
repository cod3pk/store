import ProductService from "../services/ProductService.jsx";
import {useNavigate, Link} from "react-router-dom";

const AddProductForm = () => {
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const productData = {
      Product_name: formData.get("name"),
      Category: formData.get("category"),
      Brand: formData.get("brand"),
      Unit: formData.get("unit"),
      Stock: formData.get("stock"),
      Price: formData.get("price")
    };

    try {
      await ProductService.addProduct(productData);
      alert("Product added successfully!");
      e.target.reset();

      navigate('/');
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };


  return (
    <form
      onSubmit={createProduct}
      className="w-full">
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="Name"
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="col-span-3">
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Category
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="category"
                id="category"
                autoComplete="Category"
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="col-span-3">
            <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
              Brand
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="brand"
                id="brand"
                autoComplete="Brand"
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="col-span-3">
            <label htmlFor="unit" className="block text-sm font-medium leading-6 text-gray-900">
              Unit
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="unit"
                id="unit"
                autoComplete="Unit"
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="col-span-3">
            <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
              Stock
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="stock"
                id="stock"
                autoComplete="Stock"
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="col-span-3">
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="price"
                id="price"
                autoComplete="Price"
                className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
