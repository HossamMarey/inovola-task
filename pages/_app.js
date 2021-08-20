import "public/less/antd-custom.less";
import "tailwindcss/tailwind.css";
import "keen-slider/keen-slider.min.css";

import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// change lang for antd - default en
import { ConfigProvider } from "antd";
import arEG from "antd/lib/locale/ar_EG";
import enUS from "antd/lib/locale/en_US";

function MyApp({ Component, pageProps, router }) {
  return (
    <ConfigProvider
      locale={router.locale && router.locale === "ar" ? arEG : enUS}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default appWithTranslation(MyApp);
