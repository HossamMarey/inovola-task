import React, { useState } from "react";

import { Input, AutoComplete } from "antd";

import { useTranslation } from "next-i18next";
import { FiSearch } from "react-icons/fi";

const courses = [
  {
    image: "https://unsplash.it/300?random=1",
    value: "Adobe Illustrator CC - essentionals.",
  },
  {
    image: "https://unsplash.it/300?random=2",
    value: "How to use color like as a pro",
  },
  { image: "https://unsplash.it/300?random=3", value: "Html Crash Course" },
  {
    image: "https://unsplash.it/300?random=4",
    value: "React and Redux Course",
  },
  { image: "https://unsplash.it/300?random=5", value: "Adobe Photoshop 101" },
];

const Hero = (props) => {
  const { t } = useTranslation();
  const renderItem = (item) => ({
    value: item.value,
    label: (
      <div className="flex items-center">
        <img
          src={item.image}
          alt="course image"
          className="me-3 w-8 h-8 object-cover"
        />
        <span> {item.value} </span>
      </div>
    ),
  });

  return (
    <section
      style={{ minHeight: "calc(100vh - 4rem)" }}
      className="flex flex-col"
    >
      <div
        style={{
          backgroundImage: "url('./images/classroom.jpg')",
          minHeight: "400px",
        }}
        className="hero  flex  bg-cover flex-1 "
      >
        <div className="flex w-full bg-primary-25">
          <div className="container  flex  items-center px-2   text-white">
            <div className="w-full md:w-2/3 lg:w-1/3 text-center md:text-start">
              <h1 className="hero__title font-bold text-3xl 2xl:text-4xl mb-6 text-white flex flex-col items-center md:items-start">
                {t("Welcome To")}
                <span className="hero__title--underline">{t("Acadamy")}</span>
              </h1>
              <p className=" leading-7 text-base 2xl:text-xl text-white">
                {t(
                  "Study any topic, anytime. Explore thousands of courses for the lowest price ever!"
                )}
              </p>
              <div className="hero__cta mt-6">
                <AutoComplete
                  options={courses.map((c) => renderItem(c))}
                  filterOption={(inputValue, option) =>
                    option?.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                  className="w-full"
                >
                  <Input
                    size="large"
                    placeholder="What do you want to learn?"
                    addonAfter={
                      <FiSearch size={20} className="text-gray-main" />
                    }
                  />
                </AutoComplete>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary">
        <div className="container flex items-center flex-wrap py-8 text-white">
          <div className="w-full md:w-1/3 flex flex-col lg:flex-row mb-6 md:mb-0">
            <img
              src="/images/h1.png"
              alt="icon"
              className="h-12 object-contain mb-4 lg:mb-0 lg:me-4"
            />
            <div className="lg:pe-4 px-2 lg:px-0 text-center lg:text-start">
              <h3 className="font-bold text-lg text-white">
                13 Online Courses
              </h3>
              <p className="text-white"> Explore a variety of fresh topics </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col lg:flex-row mb-6 md:mb-0">
            <img
              src="/images/h2.png"
              alt="icon"
              className="h-12 object-contain mb-4 lg:mb-0 lg:me-4"
            />
            <div className="lg:pe-4 px-2 lg:px-0 text-center lg:text-start">
              <h3 className="font-bold text-lg text-white">
                Expert Instruction
              </h3>
              <p className="text-white"> Find the right course for you </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col lg:flex-row mb-6 md:mb-0">
            <img
              src="/images/h3.png"
              alt="icon"
              className="h-12 object-contain mb-4 lg:mb-0 lg:me-4"
            />
            <div className="lg:pe-4 px-2 lg:px-0 text-center lg:text-start">
              <h3 className="font-bold text-lg text-white">Lifetime Access</h3>
              <p className="text-white"> Learn on your schedule </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
