import React from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { Button } from "antd";
import { FiPlay } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-main-light py-12">
      <div className="container flex flex-wrap ">
        <div className="w-full md:w-1/2 pe-0 md:pe-4  ">
          <h2 className="font-bold text-2xl mb-10">{t("About Our Academy")}</h2>
          <p className="mb-5 leading-7">
            {t(
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
            )}
          </p>
          <p className="mb-5 leading-7">
            {t(
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
            )}
          </p>

          <Button
            type="primary"
            ghost
            size="large"
            className="border-2 rounded-md"
          >
            {t("Read More")}
          </Button>
        </div>
        <div className="w-full md:w-1/2 relative ps-0 md:ps-4 block   h-60 md:h-auto mt-6 md:mt-0  ">
          <Image
            src="/images/about.jpg"
            alt="about builderz"
            layout="fill"
            objectFit="cover"
            className="w-full rounded-md shadow-sm     "
          />
          <div className="absolute top-1/2 left-1/2 bg-white rounded-full w-14  h-14 flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:shadow-xl">
            <FaPlay size={24} className="text-primary " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
