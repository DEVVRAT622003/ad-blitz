import React from "react"; 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
 
function App() {
  return (
    <div className="bg-[#F1F2F4]">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default App;