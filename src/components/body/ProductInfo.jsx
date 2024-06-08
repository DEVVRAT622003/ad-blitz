import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fireDB } from "../../Firebase/config";
import { UserContext } from "../../Contexts/userContext";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cartSlice";

const ProductInfo = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { isLoggedIn } = useContext(UserContext);
  const [ownerDetails, setOwnerDetails] = useState(false);
  const navigate = useNavigate();

  // Get product data
  const getProductData = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct({ ...productTemp.data(), uid: id });
    } catch (error) {
      console.log(error); // Add error handling here
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]); // Added id to dependency array

  // Add to Cart function
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    dispatch(addToCart(item));
    toast.success('Product added to cart');
    console.log(cartItems);
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success('Product deleted from cart');
    console.log(cartItems);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // See owner details function
  const seeOwnerDetails = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setOwnerDetails(true);
  };

  return (
    <>
      <div className="max-w-6xl px-4 mx-auto my-3 lg:my-5">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="">
              <div className="">
                <img
                  className="w-full lg:h-[39em] rounded-lg"
                  src={product?.productImageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 flex flex-col">
                <h2 className="max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                  {product?.title}
                </h2>
                <p className="inline-block text-sm mb-6 font-semibold text-gray-700">
                  <span>{product?.city}</span>
                </p>
                <p className="inline-block text-2xl font-semibold text-gray-700">
                  <span>₹ {product?.price}</span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700"></h2>
                <p>{product?.description}</p>
              </div>
              <div className="mb-6"></div>
              <div className="flex flex-wrap gap-2 items-center mb-6">
                {cartItems.some((p) => p.uid === product.uid) // Ensure comparison is correct
                  ? <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={() => deleteCart(product)}>Delete From Cart</button>
                  : <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={() => addCart(product)}>Add to Cart</button>
                }
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={seeOwnerDetails}>Owner details</button>
                {ownerDetails &&
                  <div className="w-full text-sm text-gray-700 bg-gray-100 p-4 rounded">
                    <p><span>Mobile No :</span> {product.mobile}</p>
                    <p><span>Email id :</span> {product.email}</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;


// import { addDoc, collection, doc, getDoc } from "firebase/firestore";
// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { fireDB } from "../../Firebase/config";
// import { UserContext } from "../../Contexts/userContext";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from "../redux/cartSlice";

// const ProductInfo = () => {
//   const [product, setProduct] = useState({});
//   const { id } = useParams();
//   const { isLoggedIn } = useContext(UserContext);
//   const [ownerDetails, setOwnerDetails] = useState(false);
//   const navigate = useNavigate();

//   // Get product data
//   const getProductData = async () => {
//     try {
//       const productTemp = await getDoc(doc(fireDB, "products", id));
//       setProduct({ ...productTemp.data(), uid: id });
//     } catch (error) {
//       console.log(error); // Add error handling here
//     }
//   };

//   useEffect(() => {
//     getProductData();
//   }, [id]); // Added id to dependency array

//   // Add to Cart function
//   const cartItems = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const addCart = (item) => {
//     dispatch(addToCart(item));
//     toast.success('Product added to cart');
//     console.log(cartItems);
//   };

//   const deleteCart = (item) => {
//     dispatch(deleteFromCart(item));
//     toast.success('Product deleted from cart');
//     console.log(cartItems);
//   };

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//    // Redirect to login if not logged in
//    useEffect(() => {
//     if (!isLoggedIn) {
//       navigate("/login");
//     }
//   }, [isLoggedIn, navigate]);

//   // See owner details function
//   const seeOwnerDetails = () => {
//     isLoggedIn ? setOwnerDetails(true) : navigate("/login");
//   };

//   return (
//     <>
//       <div className="max-w-6xl px-4 mx-auto my-3 lg:my-5">
//         <div className="flex flex-wrap mb-24 -mx-4">
//           <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
//             <div className="">
//               <div className="">
//                 <img
//                   className=" w-full lg:h-[39em] rounded-lg"
//                   src={product?.productImageUrl}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="w-full px-4 md:w-1/2">
//             <div className="lg:pl-20">
//               <div className="mb-6 flex flex-col">
//                 <h2 className="max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
//                   {product?.title}
//                 </h2>
//                 <p className="inline-block text-sm mb-6 font-semibold text-gray-700">
//                   <span>{product?.city}</span>
//                 </p> 
//                 <p className="inline-block text-2xl font-semibold text-gray-700">
//                   <span>₹ {product?.price}</span>
//                 </p> 
//               </div>
//               <div className="mb-6">
//                 <h2 className="mb-2 text-lg font-bold text-gray-700"></h2>
//                 <p>{product?.description}</p>
//               </div>
//               <div className="mb-6"></div>
//               <div className="flex flex-wrap gap-2 items-center mb-6">
//                 {
//                   cartItems.some((p) => p.uid === product.uid) // Ensure comparison is correct
//                     ? <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={() => deleteCart(product)}>Delete From Cart</button>
//                     : <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={() => addCart(product)}>Add to Cart</button>
//                 }
//                 <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={seeOwnerDetails}>Owner details</button>
//                 {
//                   ownerDetails &&
//                   <div className="w-full text-sm text-gray-700 bg-gray-100 p-4 rounded">
//                     <p><span>Mobile No :</span> {product.mobile}</p>
//                     <p><span>Email id :</span> {product.email}</p>
//                   </div>
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductInfo;

