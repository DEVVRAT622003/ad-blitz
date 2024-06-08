import React, { useContext , useEffect } from "react";
import { UserContext } from "../../Contexts/userContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const HomePageCards = () => {
  const { allProduct, location , getAllProduct} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getAllProduct();
  }, [location]);

  // Get products according to location
  const locProd = allProduct.filter((item) => item.city === location);

  return (
    <div className="">
      <div className="px-1 lg:px-[5vw] container flex flex-wrap justify-between items-center mx-auto">
        {locProd.slice(0, 8).map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HomePageCards;


