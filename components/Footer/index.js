import Link from "next/link";
import React from "react";

import BackToTop from "react-back-to-top-button";

import {
  FaArrowUp,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import LangBtn from "../Header/LangBtn";

const MainFooter = () => {
  return (
    <footer className="relative">
      <div className="container pt-12 mb-4">
        <div className="w-full grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/main-logo.svg"
              alt="Logo"
              className="h-8 object-contain "
            />
            <p className="leading-7 mt-3">
              Lorem Ipsum Dolor Sit Amet, Tempor Consectetur Adipiscing Elit,
              Sed Do Eiusmod Tempo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <a>Terms And Condition</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Socail Media</h4>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <a className="flex items-center">
                    <FaFacebookF className="me-1" /> Facebook
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <a className="flex items-center">
                    <FaTwitter className="me-1" /> Twitter
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <a className="flex items-center">
                    <FaInstagram className="me-1" /> Instagram
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/">
                  <a className="flex items-center">
                    <FaLinkedinIn className="me-1" /> Linkedin
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Find Us</h4>
            <ul>
              <li className="mb-2">
                <div className="flex items-center">
                  <span className="me-2">Address:</span>
                  <span>8901 MARMORA RAO</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center">
                  <span className="me-2">Phone:</span>
                  <a href="tel:+143-52-9933631"> +143-52-9933631 </a>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center">
                  <span className="me-2">Email:</span>
                  <a href="mailto:academy@example.com">academy@example.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t border-gray-200 py-6 text-center text-gray-400 text-sm">
        © 2020
        <Link href="/">
          <a className="  hover:underline text-blue-900 hover:text-blue-700">
            {" "}
            BUILDERZ.{" "}
          </a>
        </Link>
        All Rights Reserved.
      </div>
      <div className="absolute bottom-5 end-5">
        <LangBtn />
      </div>

      <BackToTop
        // showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
        style={{ bottom: "30px" }}
      >
        <div className="rounded-full bg-primary text-white shadow-lg p-2 cursor-pointer">
          <FaChevronUp size={24} />
        </div>
      </BackToTop>
    </footer>
  );
};

export default MainFooter;
