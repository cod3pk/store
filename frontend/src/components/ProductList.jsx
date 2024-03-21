import React from 'react';
import {useNavigate} from "react-router-dom";
import ProductService from "../services/ProductService.jsx";

const ProductList = ({products}) => {
  const navigate = useNavigate();

  // Edit Product Caller
  const handleEdit = (productId) => {
    navigate(`edit/${productId}`);
  };

  // View Product Caller
  const handleView = (productId) => {
    navigate(`view/${productId}`);
  };

  // Delete Product Caller
  const handleDelete = (productId) => {
    ProductService.deleteProduct(productId);
  };


  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-block min-w-full py-2 align-middle">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
          <tr>
            <th
              scope="col"
              className="whitespace-nowrap text-left pr-3 text-sm font-medium text-gray-900"
            >
              Name
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Category
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Brand
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Unit
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Stock
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Price
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Actions
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="whitespace-nowrap pr-3 text-sm font-medium text-gray-900">
                {product.Product_name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.Category}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.Brand}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.Unit}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.Stock}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.Price}</td>
              <td className="relative whitespace-nowrap py-4 pl-3 flex flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleView(product.id)}
                  className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                  View
                </button>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
