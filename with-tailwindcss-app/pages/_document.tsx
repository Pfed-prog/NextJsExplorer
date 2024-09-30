import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="ahrefs-site-verification"
            content="0b854a10ab949834888dd13297f5c602a02ab526ee2f999f985e4b128740dd26"
          />
          <link rel="icon" href="/search.svg" />
        </Head>
        <body className="bg-sky-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
