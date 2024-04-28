import React from "react";
import { Box, styled, Typography } from "@mui/material";

export const StagesPage = () => {
  return (
    <MainContainer id="stages">
      <Box sx={{ flex: 1 }} />
      <TitleWrapper>
        <Title variant="h1">WSPÓŁPRACA</Title>
      </TitleWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "1080px",
  minHeight: "430px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
}));

const Title = styled(Typography)(({ theme: { palette } }) => ({
  paddingTop: 20,
  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  color: palette.text.secondary,
  cursor: "default",
}));

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 160,
  height: "100%",
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
}));
