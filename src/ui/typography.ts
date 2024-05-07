import React from "react";
import { createTheme } from "@mui/material";
// eslint-disable-next-line no-restricted-imports
import { TypographyOptions } from "@mui/material/styles/createTypography";

const theme = createTheme();

export const createTypography = (
  fontFamily?: React.CSSProperties["fontFamily"]
): TypographyOptions => ({
  fontFamily,
  h1: {
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "41.4px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      lineHeight: "36px",
    },
  },
  h2: {
    fontWeight: 400,
    fontSize: "26px",
    lineHeight: "29.9px",
  },
  h3: {
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "26.4px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "20.4px",
    },
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
