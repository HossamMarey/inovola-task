import React, { useEffect } from "react";
import { useRouter } from "next/router";
import jscookie from "js-cookie";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHead from "@/components/seo/MainHead";

const Layouts = (props) => {
  const { header, footer } = props;
  const router = useRouter();
  useEffect(() => {
    // lang and dir
    let lang = jscookie.get("NEXT_LOCALE");
    if (lang && lang !== router.locale) {
      router.replace(router.asPath, router.asPath, { locale: lang });
    }
  }, []);

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <>
      <MainHead {...props} />
      {header !== false && <Header {...props} />}

      <main>{props.children}</main>
      {footer !== false && <Footer {...props} />}
    </>
  );
};

export default Layouts;
