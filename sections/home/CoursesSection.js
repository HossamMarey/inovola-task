import CourseCard from "@/components/courses/CourseCard";
import { Button } from "antd";
import React from "react";

const courses = [
  {
    title: "Sewing 101",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    reviews: {
      rating: 3,
      num: 286,
    },
    price: {
      discount: "$16.00",
      main: "$35.00",
    },
    tag: "Children",
    wishlist: false,
  },
  {
    title: "Adobe Illustrator CC - Essentials..",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    reviews: {
      rating: 4,
      num: 320,
    },
    price: {
      discount: "$150.00",
      main: "$200.00",
    },
    tag: "Parents",
    wishlist: false,
  },
  {
    title: "How To Use Color Like A Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    reviews: {
      rating: 4.5,
      num: 450,
    },
    price: {
      discount: "$79.00",
      main: "$100.00",
    },
    tag: "Lecturer",
    wishlist: false,
  },
  {
    title: "Sewing 101",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    reviews: {
      rating: 3,
      num: 286,
    },
    price: {
      discount: "$16.00",
      main: "$35.00",
    },
    tag: "Children",
    wishlist: false,
  },
  {
    title: "Adobe Illustrator CC - Essentials..",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    reviews: {
      rating: 4,
      num: 320,
    },
    price: {
      discount: "$150.00",
      main: "$200.00",
    },
    tag: "Parents",
    wishlist: true,
  },
  {
    title: "How To Use Color Like A Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    reviews: {
      rating: 4.5,
      num: 450,
    },
    price: {
      discount: "$79.00",
      main: "$100.00",
    },
    tag: "Lecturer",
    wishlist: false,
  },
];

const CoursesSection = ({ title }) => {
  return (
    <section className="py-14">
      <div className="container ">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h2 className=" text-2xl text-center font-bold"> {title} </h2>
          <p className="leading-6 mb-8 mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard course={course} key={i} ix={i} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Button
            type="primary"
            ghost
            size="large"
            className="border-2 rounded-md hover:shadow-lg  font-semibold"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
