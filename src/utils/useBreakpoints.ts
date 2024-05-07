import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoints = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));

  return { isMobile };
};
