"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a
              href={"/"}
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              CodingHub
            </a>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  id={"1"}
                  onClick={handleClick}
                  href={"/general?id=1"}
                  aria-current="page"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  id={"2"}
                  onClick={handleClick}
                  href={"/business?id=2"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  id={"3"}
                  onClick={handleClick}
                  href={"/entertainment?id=3"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  id={"4"}
                  onClick={handleClick}
                  href={"/health?id=4"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  id={"5"}
                  onClick={handleClick}
                  href={"/sports?id=5"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  id={"6"}
                  onClick={handleClick}
                  href={"/science?id=5"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  id={"7"}
                  onClick={handleClick}
                  href={"/technology?id=5"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:order-2"></div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
