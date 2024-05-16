import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import HomePage from "../Pages/HomePage/HomePage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        }
      ]
    },
  ]);

  export default router;

