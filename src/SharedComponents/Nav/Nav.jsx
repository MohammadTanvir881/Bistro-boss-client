import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const Nav = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout Successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch()
  }
  const navOptions = (
    <>
      <NavLink to="/" className={({isActive})=> isActive ? "text-green-500 font-bold" : "text-black lg:text-white"}>
        {" "}
        <li>
          <a>HOME</a>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li>
          <a>CONTACT US</a>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li>
          <a>DASHBOARD</a>
        </li>
      </NavLink>
      <NavLink to="/menu" className={({isActive})=> isActive ? "text-green-500 font-bold" : "text-black lg:text-white"}>
        {" "}
        <li>
          <a>OUR MENU</a>
        </li>
      </NavLink>
      <NavLink to="/shop" className={({isActive})=> isActive ? "text-green-500 font-bold" : "text-black lg:text-white"}>
        {" "}
        <li>
          <a>OUR SHOP</a>
        </li>
      </NavLink>
    <>
       {
        user? <button onClick={handleLogout} className="btn btn-ghost btn-sm text-lg">Logout</button> :   <NavLink to="/login" className={({isActive})=> isActive ? "text-green-500 font-bold" : "text-black lg:text-white"}>
        {" "}
        <li>
          <a>LOGIN</a>
        </li>
      </NavLink>
       }
    </>
    </>
  );
  return (
    <div className="navbar fixed z-10 container bg-black bg-opacity-50 justify-between  text-black md:text-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn pl-0 text-white btn-ghost text-xl">
          BISTRO BOSS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{navOptions}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Nav;
