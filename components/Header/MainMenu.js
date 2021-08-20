import Link from "next/link";
import React from "react";

const MainMenu = ({ opened }) => {
  return (
    <nav className="main-menu lg:me-6">
      <ul className="flex flex-col lg:flex-row ">
        <li className="font-medium lg:me-3 mb-4 lg:mb-0 hover:text-secondary flex">
          <Link href="/">
            <a className="hover:text-secondary w-full"> Home </a>
          </Link>
        </li>
        <li className="font-medium lg:me-3 mb-4 lg:mb-0 hover:text-secondary flex">
          <Link href="/courses">
            <a className="hover:text-secondary w-full"> Courses </a>
          </Link>
        </li>
        <li className="font-medium lg:me-3 mb-4 lg:mb-0 hover:text-secondary flex">
          <Link href="/courses">
            <a className="hover:text-secondary w-full"> Activites </a>
          </Link>
        </li>
        <li className="font-medium lg:me-3 mb-4 lg:mb-0 hover:text-secondary flex">
          <Link href="/courses">
            <a className="hover:text-secondary w-full"> Testimonials </a>
          </Link>
        </li>
        <li className="font-medium lg:me-3 mb-4 lg:mb-0 hover:text-secondary flex">
          <Link href="/blog">
            <a className="hover:text-secondary w-full"> Blog </a>
          </Link>
        </li>
        <li className="font-medium lg:me-3 mb-4 lg:mb-0 hover:text-secondary flex">
          <Link href="/contact">
            <a className="hover:text-secondary w-full"> Contact </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
