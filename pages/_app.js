import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import { appWithTranslation } from "next-i18next";
import { pdfjs } from "react-pdf";
import ReactGA from "react-ga";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const theme = createMuiTheme({});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("UA-197723824-1");
    console.log("Initialised tag manager");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default appWithTranslation(MyApp);
