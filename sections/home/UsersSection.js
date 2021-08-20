import React from "react";

const UsersSection = () => {
  return (
    <section className=" py-24">
      <div className="container grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
        <div className="userstypes--card border border-gray-100 shadow-sm hover:shadow-lg rounded-md pt-6 pb-4 px-4 text-center flex flex-col items-center">
          <img
            src="https://image.flaticon.com/icons/png/512/1048/1048945.png"
            alt="icon"
            className="h-14 mb-6 object-contain"
          />
          <h3 className="font-bold text-lg mb-4">Kids</h3>
          <p className="text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>

        <div className="userstypes--card border border-gray-100 shadow-sm hover:shadow-lg rounded-md pt-6 pb-4 px-4 text-center flex flex-col items-center">
          <img
            src="https://image.flaticon.com/icons/png/512/201/201818.png"
            alt="icon"
            className="h-14 mb-6 object-contain"
          />
          <h3 className="font-bold text-lg mb-4"> Teen </h3>
          <p className="text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>

        <div className="userstypes--card border border-gray-100 shadow-sm hover:shadow-lg rounded-md pt-6 pb-4 px-4 text-center flex flex-col items-center">
          <img
            src="https://image.flaticon.com/icons/png/512/780/780270.png"
            alt="icon"
            className="h-14 mb-6 object-contain"
          />
          <h3 className="font-bold text-lg mb-4">Parents</h3>
          <p className="text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>

        <div className="userstypes--card border border-gray-100 shadow-sm hover:shadow-lg rounded-md pt-6 pb-4 px-4 text-center flex flex-col items-center">
          <img
            src="https://image.flaticon.com/icons/png/512/1089/1089082.png"
            alt="icon"
            className="h-14 mb-6 object-contain"
          />
          <h3 className="font-bold text-lg mb-4">Lecturer</h3>
          <p className="text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
