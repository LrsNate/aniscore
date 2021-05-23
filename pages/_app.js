import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import { appWithTranslation } from "next-i18next";
import { pdfjs } from "react-pdf";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const theme = createMuiTheme({});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-NSXSSPS",
    });
    console.log("Initialised tag manager");
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default appWithTranslation(MyApp);
