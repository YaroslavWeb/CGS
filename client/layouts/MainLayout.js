import Head from "next/head";
import React from "react";

export default function MainLayout({ seoTitle, children }) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
      </Head>
      <main>{children}</main>
    </>
  );
}
