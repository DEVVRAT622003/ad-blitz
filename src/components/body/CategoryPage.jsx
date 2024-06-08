import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { UserContext } from "../../Contexts/userContext";

const CategoryPage = () => {
  const categoryList = [
    {
      name: "Property",
    },
    {
      name: "Furnitures",
    },
    {
      name: "Cars",
    },
    {
      name: "Mobile and Laptop",
    },
    {
      name: "Home Appliances",
    },
    {
      name: "Two Wheelers",
    },
    {
      name: "Services",
    },
    {
      name: "Pets",
    },
    {
      name: "Fashion",
    },
    {
      name: "Books,Sports",
    },
  ];
  
  const { categoryNo } = useParams();
  const category = categoryList[categoryNo].name;
  const { allProduct, location } = useContext(UserContext);
  //Filter Location
  const a = allProduct.filter((item) => item.city == location);
  //Filter Category
  const arr = a.filter((item) => item.category==category);
  console.log(category);

  return (
    <div className="min-h-screen">
      {arr.length === 0 ? (
        <div className="">
          <h2 className="text-center mt-2 mb-2 md:mb-4 md:mt-4 text-lg lg:text-2xl font-bold">No product available</h2>
        </div>
      ) : (
        <>
          <div className="">
            <h2 className="text-center mt-2 mb-2 md:mb-4 md:mt-4 text-lg lg:text-2xl font-bold">{category}</h2>
          </div>
          <div className="px-1 lg:px-[5vw] container flex flex-wrap justify-start items-center">
            {arr.map((item) => (
              <Card key={item.id} item={item} /> 
            ))}
          </div>
        </>
      )}
    </div>
  );
  
};
export default CategoryPage;
