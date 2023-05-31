"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SideBar from "./sidebar";

const Navbar = () => {
  const router: any = useRouter();
  useEffect(() => {
    router && router.query && router.query.id;
    setActive(router.query.id);
  }, [router]);

  const [active, setActive] = useState("");
  const handleClick = (event: any) => {
    setActive(event.target.id);
  };
  return (
    <>

<header className="sticky top-0 z-10 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-8xl mx-auto flex w-full items-center justify-between px-3 py-2 md:py-3 lg:px-4">
            <div className="flex items-center">
              <button
                data-drawer-target="drawer-example"
                data-drawer-show="drawer-example"
                aria-controls="drawer-example"
                className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
              >
                <svg
                  className="threeDotMenu w-7 h-7"
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
              </button>
              <div className="flex items-center justify-between">
                <Link href="/" className="items-center flex">
                <svg width="35" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                  <span className="pl-1">NewsHub</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <ul
                id="flowbiteMenu"
                className="hidden flex-col pt-6 lg:flex lg:flex-row lg:self-center lg:py-0"
              >
                <li className="mb-3 lg:mb-0 lg:px-2 xl:px-2">
                  <Link
                    id={"1"}
                    onClick={handleClick}
                    href={"/general?id=1"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
                    General
                  </Link>
                </li>
                <li className="mb-3 lg:mb-0 lg:px-2 xl:px-2">
                  <Link
                    id={"2"}
                    onClick={handleClick}
                    href={"/business?id=2"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
              Business
                  </Link>
                </li>
                <li className="mb-3 lg:mb-0 lg:px-2 xl:px-2">
                  <Link
                     id={"3"}
                     onClick={handleClick}
                     href={"/entertainment?id=3"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="mb-3 lg:mb-0 lg:px-2 xl:px-2">
                  <Link
                    id={"4"}
                    onClick={handleClick}
                    href={"/health?id=4"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
                    Health
                  </Link>
                </li>
                <li className="mb-3 lg:mb-0 lg:px-2 xl:px-2">
                  <Link
                    id={"5"}
                    onClick={handleClick}
                    href={"/sports?id=5"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
                    Sports
                  </Link>
                </li>
                <li className="mb-3 hidden lg:mb-0 lg:px-2 xl:block xl:px-2">
                  <Link
                    id={"6"}
                    onClick={handleClick}
                    href={"/science?id=5"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
                    Science
                  </Link>
                </li>
                <li className="mb-3 hidden lg:mb-0 lg:px-2 xl:block xl:px-2">
                  <Link
                     id={"7"}
                     onClick={handleClick}
                     href={"/technology?id=5"}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <SideBar/>
    </>
  );
};
export default Navbar;
