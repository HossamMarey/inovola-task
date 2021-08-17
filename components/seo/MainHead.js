import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";

const mainHead = ({ title, description, keywords, icon }) => {
  const { t } = useTranslation("common");

  return (
    <Head>
      <title>
        {title ? title + " | " : ""} {t("Builderz")}
      </title>
      <meta
        name="description"
        content={description ? description : "default description"}
      />
      <meta
        name="keywords"
        content={keywords ? keywords : "default keywords"}
      />

      <link rel="icon" href={icon ? icon : "/images/faviconWhite.png"} />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default mainHead;
