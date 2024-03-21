import ProductService from "../services/ProductService.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ViewProductForm = () => {
  const {id} = useParams();

  const [product, setProduct] = useState({
    Product_name: '', Category: '', Brand: '', Unit: '', Stock: '', Price: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await ProductService.getProductById(id);
        setProduct(productData.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <form
      className="w-full">
      <div className="pb-12">
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
                defaultValue={product.Product_name}
                required disabled={true}
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
                defaultValue={product.Category}
                required disabled={true}
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
                defaultValue={product.Brand}
                required disabled={true}
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
                defaultValue={product.Unit}
                required disabled={true}
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
                defaultValue={product.Stock}
                required disabled={true}
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
                defaultValue={product.Price}
                required disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ViewProductForm;
