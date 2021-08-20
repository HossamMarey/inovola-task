import React from "react";
import { useTranslation } from "next-i18next";

const AdvSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32">
      <div className="container">
        <h2 className=" text-center font-bold text-3xl mb-12">
          {t("Why BuilderZ?")}
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* start col  */}
          <div className="border border-gray-300 rounded-md p-4 text-center hover:shadow-xl">
            <img
              src="/images/adva-1.svg"
              alt="advantages image"
              className="w-full h-44 object-contain object-center mb-4"
            />
            <h3 className="font-bold text-xl mb-5">
              {t(
                "Comprehensive assessments to discover the kids’ talents and improve them"
              )}
            </h3>
            <p className="mb-4 leading-7 font-medium">
              {t(
                "Character building is defined as realizing the abilities and tendencies of each kid. So, we carry on a talent assessment process in order to be able to give a hand and direct... the kids to whatever fits their character. By doing that, we open up a great space for the kids in which they can grow themselves, and grow creative."
              )}
            </p>
            <a
              href="#"
              className="font-medium inline-block hover:underline text-primary"
            >
              {t("Read More")}
            </a>
          </div>
          {/* end col  */}
          {/* start col  */}

          <div className="border border-gray-300  rounded-md p-4 text-center hover:shadow-xl">
            <img
              src="/images/adva-2.svg"
              alt="advantages image"
              className="w-full h-44 object-contain object-center mb-4"
            />
            <h3 className="font-bold text-xl mb-5">
              {t("Raising Integrated Solution for Kids, Parents and Teachers")}
            </h3>
            <p className="mb-4 leading-7 font-medium">{t("ADV_2")}</p>
            <a
              href="#"
              className="font-medium inline-block hover:underline text-primary"
            >
              {t("Read More")}
            </a>
          </div>
          {/* end col  */}
          {/* start col  */}
          <div className="border border-gray-300 rounded-md p-4 text-center md:col-span-full lg:col-auto hover:shadow-xl">
            <img
              src="/images/adva-3.svg"
              alt="advantages image"
              className="w-full h-44 object-contain object-center mb-4"
            />
            <h3 className="font-bold text-xl mb-5">
              {t(
                "Creative Education Methodologies Usine Different Methods In Teaching"
              )}
            </h3>
            <p className="mb-4 leading-7 font-medium">
              {t(
                "such as simulating, effective communication and experiments helping kids to be creative as well as becoming adults can decide their own career paths that make the world a better place."
              )}
            </p>
            <a
              href="#"
              className="font-medium inline-block hover:underline text-primary"
            >
              {t("Read More")}
            </a>
          </div>
          {/* end col  */}
        </div>
      </div>
    </section>
  );
};

export default AdvSection;
