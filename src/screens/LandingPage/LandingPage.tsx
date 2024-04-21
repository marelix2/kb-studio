import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Landing1 } from "@/assets";

export const Title = styled(Typography)(({ theme: { spacing, palette } }) => ({
  marginLeft: spacing(2),
  marginBottom: spacing(2),
  color: palette.primary.main,
}));

export const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "100vh",
  minHeight: "900px",
  position: "relative",
  top: -120,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Landing1})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
}));

export const LandingPage = () => {
  return <MainContainer></MainContainer>;
};
