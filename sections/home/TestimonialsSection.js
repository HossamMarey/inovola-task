import React, { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Reviews from "@/components/courses/Reviews";

const catgs = [
  { title: "English", count: "2 Courses" },
  { title: "Graphic Design", count: "4 Courses" },
  { title: "Coding", count: "3 Courses" },
  { title: "Development", count: "2 Courses" },
  { title: "Art", count: "5 Courses" },
  { title: "Education", count: "1 Course" },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    // loop: true,
    // rtl: true,
    slidesPerView: 1,
    spacing: 20,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <section className="py-14 bg-gray-main-light">
      <div className="container ">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h2 className=" text-2xl text-center font-bold">
            What Our Client Saying
          </h2>
          <p className="leading-6 mb-8 mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>

        <div className="w-full " dir="ltr">
          <div className="navigation-wrapper relative">
            <div ref={sliderRef} className="keen-slider">
              {catgs.map((course, i) => (
                <div
                  className={`keen-slider__slide number-slide${i + 1}`}
                  key={i}
                >
                  <div className="bg-white rounded-md shadow-sm border-2 border-white hover:border-primary hover:shadow-lg p-4 md:p-8 flex flex-col items-center text-center">
                    <FaQuoteRight className="text-primary mb-3" size={33} />
                    <p className="leading-7 mb-3">
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      nibh Phasellus. Pellentesque aliquet nec urna. In nisi
                      neque."
                    </p>
                    <Reviews rating={5} />

                    <img
                      src={"https://i.pravatar.cc/150?img" + i}
                      alt="user"
                      className="mt-8 rounded-full w-24 h-24 object-cover mb-4 shadow-sm"
                    />
                    <h4 className="font-semibold mb-2 text-lg">Julie Bailey</h4>
                    <p> Germany, Berlin </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center mt-4">
              {slider && (
                <div className="dots  ">
                  {[...Array(slider.details().size).keys()].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          slider.moveToSlideRelative(idx);
                        }}
                        className={
                          "dot w-3 h-3 rounded-full bg-primary  me-2 " +
                          (currentSlide === idx ? " active" : "opacity-40")
                        }
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
