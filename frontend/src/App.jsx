import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import ViewProduct from './pages/ViewProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';
import AddProduct from './pages/AddProduct.jsx';

export default function App() {
  return (<BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="/view/:id" element={<ViewProduct/>}/>
      </Routes>
    </BrowserRouter>);
}
