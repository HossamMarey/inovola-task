import Document, { Html, Head, Main, NextScript } from "next/document";
import jscookie from "js-cookie";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, locale: ctx.locale };
  }

  lang = jscookie.get("NEXT_LOCALE");
  render() {
    return (
      <Html
        lang={this.props.locale == "ar" ? "ar" : "en"}
        dir={this.props.locale == "ar" ? "rtl" : "ltr"}
      >
        <Head />
        <body className="text-gray-main font-Poppins font-medium selection:bg-primary selection:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
