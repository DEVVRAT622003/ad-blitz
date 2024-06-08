import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { fireDB } from "../Firebase/config";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users")) || {};
  const [isLoggedIn, setIsLoggedIn] = useState(Object.keys(user).length > 0);
  // Initialize location and setLocation with useState
  const [location, setLocation] = useState(localStorage.getItem('selectedCity') || null)
  console.log(location);
 //** All Product **
  const [allProduct, setAllProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setAllProduct(productArray);
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAllProduct();
  }, []);


  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        // getCartProduct,
        allProduct,
        getAllProduct,
        location,
        setLocation,
        // cart,
      }}
    >
      {children};
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
