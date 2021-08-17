import React from "react";

import { useTranslation } from "next-i18next";

const Hero = (props) => {
  const { t } = useTranslation();

  return (
    <section
      style={{ backgroundImage: "url('/images/hero.jpg')", height: "760px" }}
      className="hero max-h-screen flex  bg-cover  "
    >
      <div className="flex w-full bg-primary   bg-opacity-25">
        <div className="container  flex justify-center items-center px-2 text-center text-white">
          <div className="w-full md:w-4/5 lg:w-3/5">
            <h1 className="font-bold text-3xl mb-2">
              {t("Ready to be one of BUILDERZ?!")}
            </h1>
            <p className="px-4 md:px-16 lg:px-24 leading-7">
              {t(
                "Build a better world need to a man, build a man needs a huge effort"
              )}
            </p>
            <div className="hero__cta mt-6">
              <a
                href="#"
                className="px-6 py-3 rounded-md shadow-sm block md:inline-block bg-primary hover:bg-primary-dark hover:shadow-md font-medium text-base md:me-6 mb-4 md:mb-0"
              >
                {t("Register Now")}
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-md shadow-sm block md:inline-block bg-white text-gray-main font-medium text-base hover:bg-gray-100 hover:shadow-md"
              >
                {t("Teach With Us")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
