import React, { Fragment, useState, useEffect } from "react";

import { useRouter } from "next/router";
import jscookie from "js-cookie";

import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const LangBtn = (props) => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    router.locale ? router.locale : "en"
  );

  useEffect(() => {
    if (router.locale) {
      setSelected(router.locale);
    }
  }, []);

  const changeLang = (lang) => {
    if (lang != router.locale) {
      jscookie.set("NEXT_LOCALE", lang);
      router.push(router.asPath, router.asPath, { locale: lang });
    }
  };
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full font-medium   border border-gray-main rounded shadow-sm px-3   py-2 text-left   focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm flex items-center cursor-pointer">
              {selected == "en" ? "English" : "العربية"}

              <FaChevronDown size={12} className="ms-3" />
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ">
                <Listbox.Option
                  className={`px-3 py-2 text-center hover:bg-gray-main-light font-medium ${
                    router.locale === "en"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  value="en"
                  disabled={router.locale === "en"}
                >
                  {({ selected, active }) => (
                    <>
                      <div
                        className="flex items-center  "
                        onClick={() => changeLang("en")}
                      >
                        <span
                          className={
                            (selected ? "font-semibold" : "font-normal",
                            "ml-3 block ")
                          }
                        >
                          English
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>

                <Listbox.Option
                  className={`px-3 py-2 text-center hover:bg-gray-main-light font-medium ${
                    router.locale === "ar"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  value="ar"
                  onClick={() => changeLang("ar")}
                  disabled={router.locale === "ar"}
                >
                  {({ selected, active }) => (
                    <>
                      <div
                        className="flex items-center"
                        onClick={() => changeLang("ar")}
                      >
                        <span
                          className={
                            (selected ? "font-semibold" : "font-normal",
                            "ml-3 block ")
                          }
                        >
                          العربية
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default LangBtn;
