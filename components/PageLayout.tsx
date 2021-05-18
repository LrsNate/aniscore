import { ReactNode } from "react";
import Head from "next/head";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>Aniscore</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      {props.children}
    </>
  );
}
