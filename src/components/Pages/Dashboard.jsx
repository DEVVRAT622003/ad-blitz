import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="py-1 lg:py-2 min-h-screen">
      <div className="w-full">
        <h3 className="w-full text-center font-bold text-lg lg:text-2xl">
          Dashboard
        </h3>
      </div>
      <div className=" my-1 lg:my-2 flex flex-col">
        <img
          className="w-[8%] mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png"
          alt="profile-image"
        />
        <span className="text-center text-sm md:text-lg">
          <span className="font-bold">Name : </span>
          {user.name}
        </span>
        <span className="text-center text-sm md:text-lg">
          <span className="font-bold">Email : </span>
          {user.email}
        </span>
      </div>
      <div className="w-full flex justify-center ">
        <Link to="/add-product">
          <button className="bg-blue-600 text-white hover:bg-blue-500 hover:cursor-pointer my-2 px-2 text-sm md:text-lg  lg:px-4 py-1 rounded-lg">
            Sell Now
          </button>
        </Link>
      </div>

      <ProductDetails />
    </div>
  );
};
export default Dashboard;
