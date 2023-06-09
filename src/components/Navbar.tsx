//prettier-ignore
"use client";

import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";
import React from "react";

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();

  const themeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    return currentTheme === "dark" ? (
      <HiSun className="cursor-pointer text-xl" onClick={toggleTheme} />
    ) : (
      <HiMoon className="cursor-pointer text-xl" onClick={toggleTheme} />
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="mx-auto flex flex-wrap items-center justify-between py-8">
      <a href="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Edgar Silva
        </span>
      </a>
      {/* <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button> */}
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium ">
          <li>
            <a
              href="/"
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-base  font-medium text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="block rounded py-2 pl-3 pr-4 text-base  font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="block rounded py-2 pl-3 pr-4 text-base  font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block rounded py-2 pl-3 pr-4 text-base  font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              Contact
            </a>
          </li>
          {themeChanger()}
        </ul>
      </div>
    </nav>
  );
}
