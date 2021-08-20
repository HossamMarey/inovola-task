import React, { useState, useEffect } from "react";
import Link from "next/link";

import Layouts from "@/layouts/index";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Form,
  Input,
  Button,
  List,
  Alert,
  message,
  Select,
  DatePicker,
} from "antd";
const { Option } = Select;
import { FiLock, FiMail, FiUser } from "react-icons/fi";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const { t } = useTranslation();

  const [userType, setUserType] = useState("Student");

  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .trim()
      .required(t("Field is Required"))
      .min(3, "At least 3 characters"),
    last_name: Yup.string()
      .trim()
      .required(t("Field is Required"))
      .min(3, "At least 3 characters"),
    email: Yup.string()
      .trim()
      .required(t("Field is Required"))
      .email("Not a vaild email!"),
    phone_number: Yup.string()
      .required(t("Field is Required"))
      .min(6, t("At least 6 characters")),
    birth_date: Yup.date().required(t("Field is Required")),
    password: Yup.string("Not Valid")
      .trim()
      .required(t("Field is Required"))
      .min(6, "Password is too short - should be 8 chars minimum.'"),
  });
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      birth_date: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        ...values,
      };
      Object.entries(formData).forEach(([key, val]) => {
        if (typeof val === "string") {
          formData[key] = val.replace(/\s\s+/g, " ");
        }
      });
      // submit
      // console.log(formik);
      setIsLoading(true);
      // post data
      alert(JSON.stringify(formData));
      setIsLoading(false);
    },
  });

  const isInputError = (key) => {
    // formik.errors.email && formik.touched.email;
    if (formik.errors[key] && formik.touched[key]) {
      return true;
    }
    return false;
  };

  return (
    <Layouts title="Sign Up" header={false} footer={false}>
      <div className="w-full flex h-screen ">
        <div className="w-full hidden md:flex md:w-1/2 lg:w-3/5 xl:2/3  ">
          <img
            src="https://images.unsplash.com/photo-1618842220926-043f26a4e043?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
            alt="login"
            className="w-full h-screen object-cover "
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 xl:1/3 h-screen overflow-y-auto ">
          <div className="w-full bg-white py-10 md:py-10 px-4 sm:px-10 md:px-8 xl:px-10">
            <div className="w-full flex justify-center">
              <img
                src="/images/main-logo.svg"
                alt="Logo"
                className="h-10 object-contain "
              />
            </div>
            <h1 className="text-center text-2xl font-semibold mt-6  ">
              Sign Up
            </h1>
            {/* user type  */}
            <div className=" w-full flex   items-center justify-between   mt-6">
              <div
                className={`flex items-center px-3 py-2  me-2 rounded border text-xs cursor-pointer ${
                  userType == "Student"
                    ? "bg-primary text-white border-primary"
                    : "border-gray-200"
                }`}
                onClick={() => setUserType("Student")}
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/1048/1048945.png"
                  alt=""
                  className="h-5 me-2 object-contain"
                />
                <span>Student</span>
              </div>

              <div
                className={`flex items-center px-3 py-2  me-2 rounded border text-xs cursor-pointer ${
                  userType == "Parents"
                    ? "bg-primary text-white border-primary"
                    : "border-gray-200"
                }`}
                onClick={() => setUserType("Parents")}
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/1048/1048945.png"
                  alt=""
                  className="h-5 me-2 object-contain"
                />
                <span>Parents</span>
              </div>

              <div
                className={`flex items-center px-3 py-2  rounded border text-xs cursor-pointer ${
                  userType == "Lecturer"
                    ? "bg-primary text-white border-primary"
                    : "border-gray-200"
                }`}
                onClick={() => setUserType("Lecturer")}
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/1048/1048945.png"
                  alt=""
                  className="h-5 me-2 object-contain"
                />
                <span>Lecturer</span>
              </div>
            </div>
            {/* form  */}
            <div className="w-full mt-6">
              <Form
                layout="vertical"
                requiredMark={false}
                className="auth__form"
              >
                <div className="w-full grid gap-4  grid-cols-2">
                  <Form.Item
                    validateStatus={isInputError("first_name") && "error"}
                    help={
                      isInputError("first_name") && formik.errors.first_name
                    }
                    label="First Name*"
                    required
                    className="flex flex-col"
                  >
                    <Input
                      name="first_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </Form.Item>
                  <Form.Item
                    validateStatus={isInputError("last_name") && "error"}
                    help={isInputError("last_name") && formik.errors.last_name}
                    label="Last Name*"
                    required
                  >
                    <Input
                      name="last_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  validateStatus={isInputError("email") && "error"}
                  help={isInputError("email") && formik.errors.email}
                  label="Email Address*"
                  required
                >
                  <Input
                    placeholder={t("Email")}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </Form.Item>
                <Form.Item
                  validateStatus={isInputError("phone_number") && "error"}
                  help={
                    isInputError("phone_number") && formik.errors.phone_number
                  }
                  label="Mobile Number*"
                  required
                  className="auth-phone_number"
                >
                  <PhoneInput
                    className=" w-full"
                    name="phone_number"
                    onChange={(val) =>
                      formik.setFieldValue("phone_number", val)
                    }
                    onBlur={() => formik.setFieldTouched("phone_number", true)}
                    country="eg"
                  />
                </Form.Item>
                <Form.Item
                  prefix={<FiUser className="site-form-item-icon" />}
                  validateStatus={isInputError("birth_date") && "error"}
                  help={isInputError("birth_date") && formik.errors.birth_date}
                  label="Date of Birth*"
                  required
                >
                  <DatePicker
                    onChange={(val) => formik.setFieldValue("birth_date", val)}
                    onBlur={() => formik.setFieldTouched("birth_date", true)}
                    value={formik.values.birth_date}
                    name="birth_date"
                    className="w-full"
                  />
                </Form.Item>

                <Form.Item
                  prefix={<FiUser />}
                  validateStatus={isInputError("password") && "error"}
                  help={isInputError("password") && formik.errors.password}
                  label="Password*"
                  required
                >
                  <Input.Password
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </Form.Item>

                <Form.Item className="mb-4 mt-3">
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    className="block w-full  text-base rounded-sm shadow font-semibold hover:shadow-lg"
                    onClick={formik.handleSubmit}
                    loading={isLoading}
                    disabled={isLoading || !formik.isValid || !formik.dirty}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
              <p className="w-full text-center text-xs">
                Already have an account?{" "}
                <Link href="/">
                  <a className="text-secondary hover:underline hover:text-secondary-dark">
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export const getServerSideProps = async ({ req, locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      cookieBe: req.headers["accept-language"],
    },
  };
};

export default SignUp;
