import { createTheme } from "@mui/material";

import { createTypography } from "./typography";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#A17D60",
      light: "#E1DAD1",
    },
    secondary: {
      main: "#333333",
    },
  },
  typography: createTypography("Arial"),
});
