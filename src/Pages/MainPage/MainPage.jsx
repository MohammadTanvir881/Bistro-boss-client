import { Outlet } from "react-router-dom";
import Footer from "../../SharedComponents/Footer/Footer";
import Nav from "../../SharedComponents/Nav/Nav";

const MainPage = () => {
  return (
    <div className="">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
