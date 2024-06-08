import React, { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { fireDB } from "../../Firebase/config";
import { UserContext } from "../../Contexts/userContext";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAllProduct } = useContext(UserContext);
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

  const cityList = [
    {
      name: "Jaipur",
    },
    {
      name: "Delhi",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Chennai",
    },
    {
      name: "Hyderabad",
    },
  ];

  //Product state
  const [product, setProduct] = useState({
    title: "",
    owner: JSON.parse(localStorage.getItem("users")).email,
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    mobile: "",
    email: "",
    city: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single product function
  const getSingleProduct = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      const productData = productTemp.data();
      setProduct({
        ...productData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update Product Function
  const updateProduct = async () => {
    try {
      await setDoc(doc(fireDB, "products", id), product);
      toast.success("Product Updated Successfully");
      getAllProduct();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Update Product</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Title"
          value={product.title}
          onChange={(e) =>
            setProduct({ ...product, title: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Price"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Image URL"
          value={product.productImageUrl}
          onChange={(e) =>
            setProduct({ ...product, productImageUrl: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <select
          value={product.category}
          onChange={(e) =>
            setProduct({ ...product, category: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option disabled>Select Product Category</option>
          {categoryList.map((value, index) => (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <select
          value={product.city}
          onChange={(e) =>
            setProduct({ ...product, city: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option disabled>Select Product City</option>
          {cityList.map((value, index) => (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Product Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Mobile No."
          value={product.mobile}
          onChange={(e) =>
            setProduct({ ...product, mobile: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Email Id"
          value={product.email}
          onChange={(e) =>
            setProduct({ ...product, email: e.target.value })
          }
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <button
          onClick={updateProduct}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;

