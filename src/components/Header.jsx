import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { Utils } from "../utils/utils";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = async () => {
    try {
      signOutUser();
      console.log("sing out successful! 👾");
      alert("Sign Out Successful! 👾");
    } catch (error) {
      console.error(error);
    }
  };

  const NavLinks = Utils.NAV_LINKS.filter((link) => !link.hidden).map(
    (link) => (
      <li className="text-xl" key={link.id}>
        <NavLink to={link.href}>{link.display}</NavLink>
      </li>
    )
  );

  return (
    <header className="font-outfit">
      <div className="container mx-auto navbar my-2 px-4">
        <div className="navbar-start flex items-center gap-1.5 md:gap-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-violet-500 font-semibold"
            >
              {NavLinks}
            </ul>
          </div>
          <Link className="flex items-center gap-2" to={`/`}>
            <img
              className="size-9 lg:size-12"
              src="/vite.svg"
              alt="Site Logo"
            />
            <h3 className="hidden md:block text-2xl lg:text-3xl">ToyTopia</h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{NavLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button
              onClick={() => handleSignOut()}
              className="my-btn rounded-full! bg-red-700! border-red-700! hover:ring-red-300"
            >
              Logout
            </button>
          ) : (
            <Link to={`/login`} className="my-btn hover:ring-violet-400">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
