import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import HomePage from "../Pages/HomePage/HomePage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/menu",
            element:<PrivateRoutes><MenuPage></MenuPage></PrivateRoutes>
        },
        {
            path:"/shop",
            element:<PrivateRoutes><ShopPage></ShopPage></PrivateRoutes>
        },
        {
            path:"/shop/:title",
            element:<PrivateRoutes><ShopPage></ShopPage></PrivateRoutes>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
      ]
    },
  ]);

  export default router;

