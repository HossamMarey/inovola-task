import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { useTranslation } from "next-i18next";

import LangBtn from "./LangBtn";

const MainHeader = (props) => {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <div className="header__brand">
          <Link href="/">
            <a className="header__brand--logo">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-11 object-contain "
              />
            </a>
          </Link>
        </div>
        <div className="header__nav flex items-center">
          <ul className="header__nav--social  items-center hidden lg:flex">
            <li className="me-3 pe-3 border-e border-gray-main">
              <a href="/" target="_blank" className="hover:text-primary">
                <FaFacebookF />
              </a>
            </li>
            <li className="me-3 pe-3 border-e border-gray-main">
              <a href="/" target="_blank" className="hover:text-primary">
                <FaTwitter />
              </a>
            </li>
            <li className="me-3 pe-3 border-e border-gray-main">
              <a href="/" target="_blank" className="hover:text-primary">
                <FaInstagram />
              </a>
            </li>
            <li className="me-3 pe-3  ">
              <a href="/" target="_blank" className="hover:text-primary">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <div className="header__nav--lang">
            <LangBtn {...props} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
