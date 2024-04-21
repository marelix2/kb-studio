import React from "react";
// eslint-disable-next-line no-restricted-imports
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const createTypography = (
  fontFamily?: React.CSSProperties["fontFamily"]
): TypographyOptions => ({
  fontFamily,
  h1: {
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "41.4px",
  },
  h2: {
    fontWeight: 400,
    fontSize: "26px",
    lineHeight: "29.9px",
  },
  h3: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "18.4px",
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "16.1px",
  },

  body1: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "16.1px",
  },
  button: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "20.7px",
    fontStyle: "normal",
  },
});
