import React from "react";
import { Link, NavLink } from "react-router";
import { Utils } from "../utils/utils";

const Header = () => {
  console.log(Utils.NAV_LINKS);
  const NavLinks = Utils.NAV_LINKS.map((link) => (
    <li key={link.id}>
      <NavLink to={link.href}>{link.display}</NavLink>
    </li>
  ));

  return (
    <header className="font-outfit">
      <div className="container mx-auto navbar my-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link className="flex items-center gap-3" to={`/`}>
            <img className="size-12" src="/vite.svg" alt="Site Logo" />
            <h3 className="text-2xl">ToyTopia</h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
