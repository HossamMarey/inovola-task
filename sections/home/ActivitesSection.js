import ActivityCard from "@/components/courses/ActivityCard";
import { Button } from "antd";
import React from "react";

const activities = [
  {
    title: "Activity Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    time: "Nov Sun 2021 @12:00 PM-07:00 PM",
    price: {
      discount: "$20.00",
      main: "$30.00",
    },
  },
  {
    title: "Activity Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    time: "Nov Sun 2021 @12:00 PM-07:00 PM",
    price: {
      discount: "$15.00",
      main: "$25.00",
    },
  },
  {
    title: "Activity Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    time: "Nov Sun 2021 @12:00 PM-07:00 PM",
    price: {
      discount: "$16.00",
      main: "$35.00",
    },
  },
];
const ActivitesSection = () => {
  return (
    <section
      className="flex bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1550305080-4e029753abcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')",
      }}
    >
      <div className="py-14 bg-gray-900 bg-opacity-60 w-full">
        <div className="container ">
          <div className="w-full md:w-2/3 lg:w-1/2  ">
            <h2 className=" text-2xl  font-bold text-white">
              Featured Activities
            </h2>
            <p className="leading-6 mb-8 mt-3 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
          </div>
          <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, i) => (
              <ActivityCard activity={activity} key={i} ix={i} />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Button
              type="primary"
              size="large"
              className="border-2 rounded hover:shadow-lg  font-semibold text-sm"
            >
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitesSection;
