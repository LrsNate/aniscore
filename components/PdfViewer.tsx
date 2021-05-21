import { Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import { SizeMe } from "react-sizeme";
import { pdfjs, Document as PdfDocument, Page } from "react-pdf";

interface PdfViewerProps {
  url: string;
}
export default function PdfViewer(props: PdfViewerProps) {
  const [numPages, setNumPages] = useState(null);
  return (
    <SizeMe>
      {({ size }) => (
        <PdfDocument
          file={props.url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        >
          <Grid container spacing={1}>
            {Array.from(new Array(numPages), (el, index) => (
              <Grid item>
                <Paper>
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={size.width ? size.width : 1}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </PdfDocument>
      )}
    </SizeMe>
  );
}
