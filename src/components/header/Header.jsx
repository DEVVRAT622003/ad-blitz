import React, { useState , useEffect} from "react";
import logo from "../../../public/assets/Logo.png";
import location from "../../../public/assets/Location.png";
import cart from "../../../public/assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {  FaSearch, FaShoppingCart ,FaUser} from "react-icons/fa"; // Importing Font Awesome icon from react-icons
import { UserContext } from "../../Contexts/userContext";
import toast from "react-hot-toast";
import { HiUserCircle } from "react-icons/hi";
import CityPopup from "../body/CityPopup";

const Header = () => {

  const [isCityPopupOpen , setIsCityPopupOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, location , setLocation } = useContext(UserContext);  
  const [search, setSearch] = useState("");

  // LogOut handler
  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('./')
    toast.success("Logged Out Successfully");
  };

  // Cart click Handler
  const cartClick = () => {
    isLoggedIn ? navigate("/cart") : navigate("/login");
  };

  // Handling the location thing
  const locationHandler = () => {
    setIsCityPopupOpen(true);
  };
  useEffect(() => {
    if (location) {
        localStorage.setItem('selectedCity', location);
        setIsCityPopupOpen(false);
    }
}, [location]);
  
  

   return (
    <div>
      {isCityPopupOpen && <CityPopup setCity={setLocation} />}
      <div className="bg-white shadow-lg w-full flex flex-col md:flex-row justify-center items-center lg:justify-between lg:h-18">
        <div className="h-10 lg:h-16 w-full md:w-[23%] flex justify-between items-center px-5">
          <div onClick={() => navigate("/")} className="h-full hover:cursor-pointer p-2">
            <img src={logo} alt="logo" className="h-full w-1/10" />
          </div>
          <div onClick={locationHandler} className="h-3/4 flex justify-start items-center gap-2 hover:cursor-pointer">
            <p className="text-[#151516] text-xs lg:text-lg  rounded-sm lg:rounded-xl px-2 lg:px-5 py-1  hover:bg-blue-500 hover:text-white font-bold">
              {location}
            </p>
          </div>
        </div>
        <div className="h-10 lg:h-16 w-full md:w-[73%] flex justify-between items-center px-5">
          <div className="  w-3/5 lg:w-1/2 m-2 lg:m-4   flex items-center  ">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search on AdBlitz"
              className="h-4/5 lg:h-full w-5/6 lg:w-5/6 p-1 md:px-3 lg:px-5 outline-none text-xs lg:text-lg md:text-sm py-2 border border-[#151516]  rounded-full placeholder:text-gray-400 mx-3"
            />
           <FaSearch  className="text-[#151516] text-xl lg:text-2xl cursor-pointer hover:text-blue-500" onClick={() => navigate(`/search/${search}`)} />
          </div>
          <div className="h-16 flex justify-around items-center w-2/5">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                <FaUser className="text-[#151516] cursor-pointer hover:text-blue-500 text-xl lg:text-2xl" />                </Link>
                <button
                  className="text-[#151516] text-xs lg:text-lg  rounded-sm lg:rounded-xl px-2 lg:px-5 py-1  hover:bg-blue-500 hover:text-white font-bold"
                  onClick={logOutHandler}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className=" text-[#151516]  text-xs lg:text-lg  rounded-sm lg:rounded-xl px-2 lg:px-5 py-1  hover:bg-blue-500 hover:text-white font-bold">
                  Login
                </button>
              </Link>
            )}
             <FaShoppingCart className="text-[#151516] text-xl lg:text-2xl cursor-pointer hover:text-blue-500" onClick={cartClick} />
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default Header;
