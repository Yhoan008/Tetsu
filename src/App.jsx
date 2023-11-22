import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./homepage/Homepage";
import Buy from "./buy/Buy";
import Admin from "./admin/Admin";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/buy" element={<Buy/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
