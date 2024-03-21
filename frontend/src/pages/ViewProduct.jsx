import ViewProductForm from "../components/ViewProductForm.jsx";
import {Link} from "react-router-dom";

export default function ViewProduct() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-20 justify-center items-center min-h-screen px-4 lg:px-0">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="font-semibold leading-6 text-4xl text-gray-900 py-4">Edit Product</h1>
            <p className="mt-2 text-sm text-gray-700">
              This is the single detail page of the product.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link to="/">
              <button type="button"
                      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ViewProductForm />
    </div>
  );
}