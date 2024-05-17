import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import HomePage from "../Pages/HomePage/HomePage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import ShopPage from "../Pages/ShopPage/ShopPage"


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
            element:<MenuPage></MenuPage>
        },
        {
            path:"/shop",
            element:<ShopPage></ShopPage>
        },
        {
            path:"/shop/:title",
            element:<ShopPage></ShopPage>
        }
      ]
    },
  ]);

  export default router;

