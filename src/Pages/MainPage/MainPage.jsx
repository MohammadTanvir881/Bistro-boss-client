import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../SharedComponents/Footer/Footer";
import Nav from "../../SharedComponents/Nav/Nav";

const MainPage = () => {
  const location = useLocation();
  // console.log(location)
  const isLogin = location.pathname.includes("login") || location.pathname.includes("register") ;
  return (
    <div className="">
      {isLogin || <Nav></Nav>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default MainPage;
