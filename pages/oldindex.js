import Head from "next/head";

import Layouts from "@/layouts/index";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/sections/oldhome/HeroSection";
import AboutSection from "@/sections/oldhome/AboutSection";
import AdvSection from "@/sections/oldhome/AdvSection";
import CtaSection from "@/sections/oldhome/CtaSection";
import ShareSection from "@/sections/oldhome/ShareSection";

export default function Home(props) {
  const { t } = useTranslation();
  return (
    <Layouts title={t("Home")}>
      <Hero />
      <AboutSection />
      <AdvSection />
      <CtaSection />
      <ShareSection />
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
