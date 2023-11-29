import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./homepage/Homepage";
import Buy from "./buy/Buy";
import Admin from "./admin/Admin";
import Protected from "./admin/Protected";
import Catalogo from "./admin/Catalogo";
import Product from './buy/Product';

import { createContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const AdminContext = createContext();

function App() {
  const [validadmin, setValidadmin] = useState(true);
  return (
    <>
      <Navbar />
      <AdminContext.Provider value={{ validadmin, setValidadmin }}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/product' element={<Product />} />
          <Route
            path="/admincontrol"
            element={
              <Protected>
                <Catalogo />
              </Protected>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AdminContext.Provider>
      <Footer />
    </>
  );
}

export default App;
