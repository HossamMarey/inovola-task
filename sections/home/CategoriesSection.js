import React, { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const catgs = [
  { title: "English", count: "2 Courses" },
  { title: "Graphic Design", count: "4 Courses" },
  { title: "Coding", count: "3 Courses" },
  { title: "Development", count: "2 Courses" },
  { title: "Art", count: "5 Courses" },
  { title: "Education", count: "1 Course" },
];
const CategoriesSection = () => {
  const [filter, setFilter] = useState("Kids");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    // loop: true,
    // rtl: true,
    slidesPerView: 1,
    spacing: 10,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 4,
        mode: "free-snap",
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <section className="pb-24">
      <div className="container">
        <h2 className="my-6 text-2xl text-center font-bold"> Categories </h2>
        <div className="catg__filter flex justify-center my-4">
          <ul className="flex items-center rounded-full border border-gray-200">
            <li
              className={`cursor-pointer rounded-full py-2 md:py-3 px-4 md:px-6 ${
                filter == "Kids" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setFilter("Kids")}
            >
              Kids
            </li>
            <li
              className={`cursor-pointer rounded-full py-2 md:py-3 px-4 md:px-6 ${
                filter == "Teen" ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setFilter("Teen")}
            >
              Teen
            </li>
            <li
              className={`cursor-pointer rounded-full py-2 md:py-3 px-4 md:px-6 ${
                filter == "Parents"
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setFilter("Parents")}
            >
              Parents
            </li>
            <li
              className={`cursor-pointer rounded-full py-2 md:py-3 px-4 md:px-6 ${
                filter == "lecturer"
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setFilter("lecturer")}
            >
              lecturer
            </li>
          </ul>
        </div>
      </div>
      <div className="catg__slider bg-gray-main-light mt-4">
        <div className="container">
          <div className="w-full " dir="ltr">
            <div className="navigation-wrapper relative">
              <div ref={sliderRef} className="keen-slider">
                {catgs.map((course, i) => (
                  <div
                    className={`keen-slider__slide number-slide${i + 1}`}
                    key={i}
                  >
                    <div
                      className="w-full flex  rounded-lg bg-cover cursor-pointer "
                      style={{
                        backgroundImage: `url('https://unsplash.it/500?random=${i}')`,
                      }}
                    >
                      <div className="w-full flex flex-col justify-center px-4 py-16 text-center bg-gray-800 bg-opacity-40 rounded-lg">
                        <h3 className="font-bold text-white mb-2 text-lg ">
                          {course?.title}
                        </h3>
                        <p className="text-white text-base">{course?.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {slider && (
                <>
                  <div
                    className={`absolute top-1/2 left-3 transform -translate-y-1/2  text-primary bg-white  opacity-75 hover:opacity-100   rounded-full cursor-pointer p-1 ${
                      currentSlide === 0 && "hidden"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      slider.prev();
                    }}
                    disabled={currentSlide === 0}
                  >
                    <FiChevronLeft size={30} />
                  </div>
                  <div
                    className={`absolute top-1/2 right-3 transform -translate-y-1/2 text-primary bg-white opacity-75 hover:opacity-100 hover:text-white hover:bg-primary rounded-full cursor-pointer p-1 ${
                      currentSlide ===
                        slider.details().size -
                          slider.details().slidesPerView && "hidden"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();

                      slider.next();
                    }}
                    disabled={
                      currentSlide ===
                      slider.details().size - slider.details().slidesPerView
                    }
                  >
                    <FiChevronRight size={30} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
