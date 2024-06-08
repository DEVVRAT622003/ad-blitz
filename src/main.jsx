import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/header/Login.jsx";
import Signup from "./components/header/Signup.jsx";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/body/Body.jsx";
import { UserProvider } from "./Contexts/userContext.jsx";
import Dashboard from "./components/Pages/Dashboard.jsx";
import AddProduct from "./components/Pages/AddProduct.jsx";
import UpdateProduct from "./components/Pages/UpdateProduct.jsx";
import ProductInfo from "./components/body/ProductInfo.jsx";
import CategoryPage from "./components/body/CategoryPage.jsx";
import Cart from "./components/body/Cart.jsx";
import AboutUs from "./components/Pages/AboutUs.jsx";
import Team from "./components/Pages/Team.jsx";
import SearchItem from "./components/body/SearchItem.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Opps Something went wrong</h1>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product-info/:id",
        element: <ProductInfo />,
      },
      {
        path: "/category/:categoryNo",
        element: <CategoryPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/search/:item",
        element: <SearchItem />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/update-product/:id",
    element: <UpdateProduct />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <RouterProvider router={myRouter}>
          <App />
        </RouterProvider>
      </Provider>
      <Toaster />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
