import ScrollTop from "components/ScrollTop";
import { useTranslation } from "next-i18next";
import { ReactNode } from "react";
import Head from "next/head";
import NavigationBar from "./NavigationBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const title = props.title ?? t("appName");

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavigationBar title={title} />
      <div className={classes.pageContent}>{props.children}</div>
      <ScrollTop />
    </>
  );
}
