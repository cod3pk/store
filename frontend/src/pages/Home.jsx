import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await ProductService.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-20 justify-center items-center min-h-screen px-4 lg:px-0">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="font-semibold leading-6 text-4xl text-gray-900 py-4">
              Products
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the products in your Inventory.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link to="add">
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </div>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No available products</p>
      )}
    </div>
  );
};

export default Home;
