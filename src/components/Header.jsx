import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { SITE_DATA } from "../constants";

const Header = () => {
  const linksElement = SITE_DATA.navlinks.map((lnk) => (
    <li key={lnk.id}>
      <NavLink to={lnk.href}>{lnk.text}</NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-white shadow px-4 lg:px-20 py-4 select-none">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
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
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {linksElement}
          </ul>
        </div>
        <Link to={`/`} className="flex items-center justify-center gap-1">
          <img src="/images/logo.png" alt="logo" className="size-10" />
          <span className="font-bold leading-7 bg-gradient-to-br from-dark-purple to-light-purple text-transparent bg-clip-text">
            HERO.IO
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="text-base font-semibold flex items-center justify-center gap-8">
          {linksElement}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          target="_blank"
          href={SITE_DATA.githubAddress}
          className="btn hidden xs:flex bg-gradient-to-br from-dark-purple to-light-purple text-white px-4 py-3 font-semibold text-base border-0 items-center justify-center gap-2.5"
        >
          <FaGithub className="size-5" />
          <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
