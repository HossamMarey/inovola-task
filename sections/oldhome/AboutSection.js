import React from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-main-light mt-24 py-12">
      <div className="container flex flex-wrap ">
        <div className="w-full lg:w-1/2 pe-0 lg:pe-4">
          <h2 className="font-bold text-2xl mb-10"> {t("About BuilderZ")} </h2>
          <p className="mb-5 leading-7">
            {t(
              "The most important mission we should accomplish to make the world a better place is building our kid's characters to set their minds through learning them human core values and principles that should lead them always to make the right decisions about the life's paths, it will take a huge effort and corporation work between three sectors \" the parents, teachers and the creative learning methods and tools that fit for each kid representing in BuilderZ."
            )}
          </p>
          <p className="mb-5 leading-7">
            {t(
              "So, we are here to contribute as experts and thought leaders in the educational field and raising kids to destinate this efforts correctly with found a platform include everything is needed by:"
            )}
          </p>

          <ol className="list-decimal list-inside mb-5 leading-7">
            <li>
              {t("kids, to qualify in all personal, social,scientific skills.")}
            </li>
            <li>{t("Parents, to help them in preparing their kids well.")}</li>
            <li>
              {t(
                "Teachers, to complete the missing line in the balance raising triangle for kids, though influence them positively by using multi educational tools."
              )}
            </li>
          </ol>

          <a
            href="#"
            className="px-5 py-2 rounded-md shadow-sm inline-block   border-2 border-primary  hover:bg-primary hover:shadow-md font-medium text-base me-6 text-primary hover:text-white"
          >
            {t("Read More")}
          </a>
        </div>
        <div className="w-full lg:w-1/2 relative ps-0 lg:ps-4 hidden lg:block">
          <Image
            src="/images/about.jpg"
            alt="about builderz"
            layout="fill"
            objectFit="cover"
            className="w-full rounded-md shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
