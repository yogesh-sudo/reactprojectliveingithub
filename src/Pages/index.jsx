import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import Home from "./Home/Home";
import Home2 from "./Home/Home2";
import Home3 from "./Home/Home3";
import Home4 from "./Home/Home4";
import Home5 from "./Home/Home5";
import Home6 from "./Home/Home6";
import Home7 from "./Home/Home7";
import Home8 from "./Home/Home8";
import Classical_With_Sidebar from "./Listings/Grid_Layout/Classical_With_Sidebar";
import With_Sidebar from "./Listings/Grid_Layout/With_Sidebar";
const index = () => {
  return (
    <div id="main-wrapper">
      <div class="clearfix"></div>
      <Navbar />
      <Routes>
          {/* Home's */}
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/home3" element={<Home3/>}/>
        <Route path="/home4" element={<Home4/>}/>
        <Route path="/home5" element={<Home5/>}/>
        <Route path="/home6" element={<Home6/>}/>
        <Route path="/home7" element={<Home7/>}/>
        <Route path="/home8" element={<Home8/>}/>
        {/* Listings */}
        <Route path="/classical_layout_with_sidebar" element={<Classical_With_Sidebar/>}/>
        <Route path="/grid-layout-with-sidebar" element={<With_Sidebar/>}/>
        {/* Redirect index Home_1 Page */}
        <Route path="*" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default index;
