import React, { useState } from "react";

function Navbar() {
  const [toggle, settoggle] = useState(true);
  return (
    <>
      <nav className=" px-2 sm:px-4 py-1">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="./logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-black-500 rounded-lg md:hidden font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => settoggle(!toggle)}
          >
            <ion-icon name="menu" size="large"></ion-icon>
          </button>
          {toggle ? (
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 md:mt-0  md:border-0 md:bg-white   dark:border-black-700">
                <li>
                  <a
                    href="/"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 md:mt-0  md:border-0 md:bg-white   dark:border-black-700">
                <li>
                  <a
                    href="/"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y "
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="font-bold hover:underline underline-offset-4 decoration-primary decoration-2 y"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
