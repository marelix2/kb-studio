import { createTheme } from "@mui/material";

import { createTypography } from "./typography";
declare module "@mui/material/styles" {
  interface Palette {
    light: Palette["primary"];
  }

  interface PaletteOptions {
    light: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
      light: "#E1DAD1",
    },
    light: {
      main: "#f9f8f6",
    },
    secondary: {
      main: "#333333",
    },
    text: {
      primary: "#333333",
      secondary: "#ffffff",
    },
  },
  typography: createTypography("Arial"),
});
