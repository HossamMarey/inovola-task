import { Button, Input } from "antd";
import React from "react";

const EmailSection = () => {
  return (
    <section>
      <div className="container bg-gray-main-light rounded-md  p-6 lg:p-8 ">
        <div className="flex flex-wrap px-4 md:px-0">
          <div className="w-full md:w-1/2 flex items-center">
            <h2 className="font-bold text-xl lg:text-2xl leading-10  pe-0 md:pe-6 lg:pe-10 text-center md:text-start">
              Let Us Inform You About Everything Important Directly.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex items-center ps-0 md:ps-4 lg:ps-8 mt-4 md:mt-0">
            <div className="flex w-full">
              <Input
                type="email"
                placeholder="Subscribe Now"
                className="flex-1 rounded-s-md border-white  "
                size="large"
              />
              <Button type="primary" size="large" className="rounded-md">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
