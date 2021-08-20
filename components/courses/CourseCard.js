import React, { useState } from "react";
import Link from "next/link";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import Reviews from "./Reviews";

const CourseCard = ({ course, ix }) => {
  const [wishList, setWishList] = useState(course.wishlist);

  const getTagColor = () => {
    if (course.tag) {
      if (course.tag == "Children") {
        return "bg-yellow-400";
      } else if (course.tag == "Parents") {
        return "bg-pink-700";
      } else if (course.tag == "Lecturer") {
        return "bg-red-600";
      }
    }
  };
  return (
    <div className="rounded-md shadow-xl border border-gray-200 relative">
      {course.tag && (
        <div
          className={
            "course__tag text-xs text-white   absolute top-2 start-2 py-1 px-2 rounded-sm shadow " +
            getTagColor()
          }
        >
          {course.tag}
        </div>
      )}
      <div
        className="course__wishlist absolute top-2 end-2 w-7 h-7 flex items-center justify-center bg-white shadow rounded-full cursor-pointer"
        onClick={() => setWishList(!wishList)}
      >
        {wishList ? (
          <FaHeart className="text-secondary" />
        ) : (
          <FaRegHeart className="text-secondary" />
        )}
      </div>
      <img
        src={`https://unsplash.it/500?random=${ix}`}
        alt="course title"
        className="w-full h-44 lg:h-48 object-cover rounded-t-md"
      />
      <div className="px-3 py-4">
        <h3 className="font-bold mb-2">{course.title}</h3>
        <p className="leading-6 mb-2">{course.description}</p>
        <div className="flex mb-2">
          <Reviews rating={course.reviews.rating} />
          <span className="ms-2 text-gray-light ">
            {" "}
            ({course.reviews.num}){" "}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-main-dark text-lg font-bold">
              {course.price.discount}
            </span>
            <i className="line-through ms-2"> {course.price.main} </i>
          </div>
          <Link href="/">
            <a
              className="uppercase py-3 px-5 rounded-md hover:shadow-lg btn--gradient text-white
            hover:text-white text-sm"
            >
              Enroll now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
