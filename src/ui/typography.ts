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
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 700,
    fontStyle: "normal",

    fontSize: "60px",
    lineHeight: "90px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      lineHeight: "36px",
    },
  },
  h2: {
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "33px",
  },
  h3: {
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "20.4px",
    },
  },
  subtitle1: {
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "16.1px",
  },

  body1: {
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
  },
  body2: {
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "33px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  button: {
    fontFamily: `"Libre Baskerville", serif`,
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "18px",
  },
});
