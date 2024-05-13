import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { logoWhite } from "@/assets";

export const Footer = () => {
  return (
    <Box
      sx={({ palette, spacing, breakpoints }) => ({
        [breakpoints.down("md")]: {
          mx: 0,
          mb: 0,
        },
        mx: spacing(1),
        my: spacing(1),
        background: palette.background.default,
      })}
    >
      <Box
        sx={({ palette, breakpoints }) => ({
          [breakpoints.down("md")]: {
            mx: 0,
            mb: 0,
          },
          [breakpoints.down("lg")]: {
            minHeight: "179px",
          },
          [breakpoints.down("sm")]: {
            minHeight: "340px",
            flexDirection: "column",
          },
          minHeight: "184px",
          background: palette.primary.main,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        })}
      >
        <LogoWrapper>
          <img src={logoWhite} alt="logo" width="120" height="120" />
        </LogoWrapper>
        <CopyrightWrapper>
          <Copyright variant="body1" color="white">
            ©2024 K&B STUDIO
          </Copyright>
        </CopyrightWrapper>
      </Box>
    </Box>
  );
};

const Copyright = styled(Typography)(({ theme: { breakpoints } }) => ({
  [breakpoints.down("md")]: {
    alignSelf: "flex-end",
  },
}));

const CopyrightWrapper = styled("div")(
  ({ theme: { spacing, breakpoints } }) => ({
    [breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
      gap: "16px",
    },
    [breakpoints.down("sm")]: {
      width: "244px",
      display: "flex",
      border: "none",
      marginRight: 0,
      paddingLeft: 0,
      paddingBottom: "24px",
      gap: "24px",
      flexDirection: "row",
      justifyContent: "center",
    },
    minHeight: "96px",
    marginRight: spacing(5.5),
    paddingLeft: "30px",
    borderLeftColor: "white",
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    display: "flex",
    alignItems: "center",
  })
);

const LogoWrapper = styled("div")(({ theme: { spacing, breakpoints } }) => ({
  [breakpoints.down("lg")]: {
    flexDirection: "row",
    gap: "16px",
  },
  [breakpoints.down("sm")]: {
    justifyContent: "center",
    marginLeft: 0,
    marginTop: spacing(3),
  },
  marginLeft: spacing(5.5),
  display: "flex",
  alignItems: "center",
  gap: "44px",
}));
