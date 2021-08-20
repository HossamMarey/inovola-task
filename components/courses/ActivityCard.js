import React, { useState } from "react";
import Link from "next/link";

const ActivityCard = ({ activity, ix }) => {
  return (
    <div className="rounded-md shadow-xl   relative bg-white p-3">
      <img
        src={`https://unsplash.it/500?random=${ix}`}
        alt="course title"
        className="w-full h-44 lg:h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="font-bold mb-2 pb-2 border-b border-gray-200">
          {activity.title}
        </h3>
        <p className="leading-6 mb-2 text-xs text-gray-light">
          {activity.time}
        </p>
        <p className="leading-6 mb-2">{activity.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-main-dark text-lg font-bold">
              {activity.price.discount}
            </span>
            <i className="line-through ms-2"> {activity.price.main} </i>
          </div>
          <Link href="/">
            <a
              className="uppercase py-3 px-5 rounded-md hover:shadow-lg btn--gradient text-white
            hover:text-white text-xs"
            >
              Participation
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
