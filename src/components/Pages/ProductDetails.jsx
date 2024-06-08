import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/userContext";
import { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../Firebase/config";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { allProduct, getAllProduct } = useContext(UserContext);

  const navigate = useNavigate();
  // Get users products
  const userProducts = allProduct.filter(
    (item) => item.owner == JSON.parse(localStorage.getItem("users")).email
  );

  //Delete product function
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Deleted Successfully");
      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userProducts.length === 0 ? null : (
        <div className=" m-1 lg:m-2 p-1 lg:p-2">
          <div className="w-full flex justify-between ">
            <span className="bg-yellow-500 text-white my-2 px-2 text-sm md:text-lg  lg:px-4 py-1 rounded-lg">
              All Products
            </span>
            <Link to="/add-product">
              <button className="bg-blue-600 text-white hover:bg-blue-500 hover:cursor-pointer my-2 px-2 text-sm md:text-lg  lg:px-4 py-1 rounded-lg">
                Add Product
              </button>
            </Link>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3">#</th>
                <th className="border p-3">Image</th>
                <th className="border p-3">Title</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Action</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {userProducts.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-3">{index + 1}.</td>
                  <td className="border p-3">
                    <img
                      src={item.productImageUrl}
                      alt="prod-img"
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="border p-3">{item.title}</td>
                  <td className="border p-3">₹{item.price}</td>
                  <td className="border p-3">{item.category}</td>
                  <td className="border p-3">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        navigate(`/update-product/${item.id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border p-3">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        
        </div>
      )}
    </>
  );
};

export default ProductDetails;
