import Link from "next/link";
import React from "react";
import { FiClock } from "react-icons/fi";

const BlogSection = () => {
  return (
    <section className="py-14 ">
      <div className="container ">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h2 className=" text-2xl text-center font-bold">Latest Blog</h2>
          <p className="leading-6 mb-8 mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((el) => (
            <div>
              <img
                src={"https://unsplash.it/500?random=" + el}
                alt="blog title"
                className="rounded-md w-full h-60 lg:h-64   object-cover mb-2"
              />
              <h3 className="font-semibold mb-2">
                Lorem Ipsum Dolor Sit Amet,
              </h3>
              <p className="text-xs flex items-center text-gray-light mb-2">
                <FiClock className="me-1" /> Nov 12, 2020
              </p>
              <p>
                Lorem ipsum dolor sit amet, tempor consectetur adipiscing elit,
                sed do eiusmod tempo...{" "}
                <Link href="/">
                  <a className="text-primary hover:underline"> Read More </a>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
