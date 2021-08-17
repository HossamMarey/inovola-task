import "tailwindcss/tailwind.css";

import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default appWithTranslation(MyApp);
