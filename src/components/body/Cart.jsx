import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success('Product deleted from cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="min-h-screen">
            {cartItems.length === 0 
                ? (<h1 className="text-center h-screen pt-3 lg:pt-8 text-lg lg:text-2xl font-bold">
                    Your Cart is Empty
                   </h1>)
                : (
                    <div className="m-1 lg:m-2 p-1 lg:p-2">
                        <div className="w-full flex justify-between">
                            <span className="bg-yellow-500 text-white my-2 px-2 text-sm md:text-lg lg:px-4 py-1 rounded-lg">
                                Cart Products
                            </span>
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
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
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
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => deleteCart(item)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;
