import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "@/ui";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
