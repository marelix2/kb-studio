import { Button, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

type Props = {
  open: boolean;
  onClose: () => void;
};

export const PDFDialog = ({ onClose, open }: Props) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  console.log(numPages);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Dialog
      onClose={(e: React.SyntheticEvent, reason) => {
        e.stopPropagation();
        if (reason === "backdropClick") {
          onClose();
        }
      }}
      open={open}
      PaperProps={{
        sx: { maxWidth: 1440 },
      }}
    >
      <DialogContent>
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document> */}
      </DialogContent>
    </Dialog>
  );
};

const DialogContent = styled(Box)(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.grey[700],
  color: palette.text.secondary,
  display: "flex",
  maxWidth: 1440,
  minWidth: 400,
  width: "fit-content",

  padding: spacing(2),
  height: "auto",
  flex: 1,
}));

const Column = styled(Box)(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.grey[700],
  color: palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  maxWidth: 800,
  minWidth: 400,
  width: "fit-content",
  alignItems: "center",
  padding: spacing(2),
  height: "auto",
  flex: 1,
  gap: spacing(2),
}));

const ContentColumn = styled(Box)(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.grey[700],
  color: palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 800,
  minWidth: 400,
  width: "fit-content",
  padding: spacing(2),
  height: "auto",
  flex: 1,
  gap: spacing(2),
}));

const ButtonsGroup = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: spacing(1),
  gap: spacing(1),
}));
