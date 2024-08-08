import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

import bathroom from "./bathroom.pdf";
import kitchen from "./kitchen.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

type Props = {
  open: boolean;
  onClose: () => void;
  isBathroom?: boolean;
};

export const PDFDialog = ({ onClose, open, isBathroom }: Props) => {
  const [numPages, setNumPages] = useState<number>();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <CustomDialog
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
        <Document
          file={isBathroom ? bathroom : kitchen}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </DialogContent>
    </CustomDialog>
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

const CustomDialog = styled(Dialog)(({ theme: {} }) => ({
  scrollbarWidth: "auto",
  scrollbarColor: "#272527 #363636",
  ["&*::-webkit-scrollbar"]: { width: 16 },
  [`&*::-webkit-scrollbar-track`]: {
    background: "#363636",
  },

  [`&::-webkit-scrollbar-thumb`]: {
    backgroundColor: `#272527`,
    borderRadius: `10px`,
    border: `3px solid #292929`,
  },
}));
