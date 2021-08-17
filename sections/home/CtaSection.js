import React from "react";
import { useTranslation } from "next-i18next";

const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container bg-gray-main-light  py-20 px-6 flex items-center justify-center">
        <div className="w-full text-center">
          <a
            href="#"
            className="px-5 py-2 rounded-md shadow-sm block md:inline-block   border-2 border-primary bg-primary  hover:bg-primary-dark hover:shadow-md font-medium text-base    text-white md:me-4 mb-4 md:mb-0"
          >
            {t("Register Now")}
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-md shadow-sm block md:inline-block   border-2 border-primary  hover:bg-primary hover:shadow-md font-medium text-base  text-primary hover:text-white"
          >
            {t("Teach With Us")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
