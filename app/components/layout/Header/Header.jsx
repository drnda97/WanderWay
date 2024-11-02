import React from "react";
import logo from "@/app/assets/images/homepage/logo.png";
import Link from "next/link";
import { Burger } from "@/app/assets/icons/Burger";

const Header = () => {
  const burgerClickHandler = () => {
    const navbar = document.querySelector("#navbar-default");
    navbar.classList.toggle("hidden");
  };

  return (
    <header className="px-4 py-2 bg-teal-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo.src} alt="Logo" className="w-20 py-4" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => burgerClickHandler()}
        >
          <Burger />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                Pocetna
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                O nama
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Galerija
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
