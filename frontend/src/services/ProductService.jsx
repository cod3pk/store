import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/products';

const ProductService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data.data || [];
    } catch (error) {
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addProduct: async (productData) => {
    try {
      const response = await axios.post(API_URL, productData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateProduct: async (productId, updatedProductData) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}`, updatedProductData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${API_URL}/${productId}`);
      window.location.reload();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default ProductService;
