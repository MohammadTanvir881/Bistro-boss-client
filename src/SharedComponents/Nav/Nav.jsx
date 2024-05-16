import { NavLink } from "react-router-dom";

const Nav = () => {
  const navOptions = (
    <>
      <NavLink>
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
      <NavLink>
        {" "}
        <li>
          <a>OUR MENU</a>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li>
          <a>OUR SHOP</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar fixed z-10 container bg-black bg-opacity-50  text-black md:text-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn pl-0 btn-ghost text-xl">
          BISTRO BOSS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nav;
