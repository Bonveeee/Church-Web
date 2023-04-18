import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  text-center bg-dark-purple p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-bold text-xl">
          ST PAUL'S LANGATA
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center justify-center lg:w-auto">
        <div className="text-sm lg:flex-grow items-center">
          <NavLink
            exact
            to="/"
            activeClassName="text-pale-purple"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-metallic-gold mr-5"
          >
            Home
          </NavLink>
          <NavLink
            to="/staff"
            activeClassName="text-pale-purple"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-pale-purple mr-5"
          >
            Staff
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-pale-purple"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-pale-purple mr-5"
          >
            About
          </NavLink>
          <NavLink
            to="/kids"
            activeClassName="text-pale-purple"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-pale-purple mr-5"
          >
            Kids
          </NavLink>
          <NavLink
            to="/sermon"
            activeClassName="text-pale-purple"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-pale-purple mr-5"
          >
            Sermon
          </NavLink>
          <NavLink
            to="/gallery"
            activeClassName="text-pale-purple"
            className="block mt-4 lg:inline-block lg:mt-0 text-white font-semibold hover:text-pale-purple"
          >
            Gallery
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
