import Head from "next/head";

import Layouts from "@/layouts/index";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroSection from "@/sections/home/HeroSection";
import UsersSection from "@/sections/home/UsersSection";
import CategoriesSection from "@/sections/home/CategoriesSection";
import AboutSection from "@/sections/home/AboutSection";
import CoursesSection from "@/sections/home/CoursesSection";
import ActivitesSection from "@/sections/home/ActivitesSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import BlogSection from "@/sections/home/BlogSection";
import EmailSection from "@/sections/home/EmailSection";

export default function Home(props) {
  const { t } = useTranslation();
  return (
    <Layouts title={t("Home")}>
      <HeroSection />
      <UsersSection />
      <CategoriesSection />
      <AboutSection />
      <CoursesSection title="Popular Courses" />
      <ActivitesSection />
      <CoursesSection title="Latest courses" />
      <TestimonialsSection />
      <BlogSection />
      <EmailSection />
    </Layouts>
  );
}

export const getServerSideProps = async (ctx) => {
  const { req, locale } = ctx;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      cookieBe: req.headers["accept-language"],
    },
  };
};
