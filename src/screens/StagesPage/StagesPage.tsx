import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { MobileStagesPage } from "./MobileStagesPage";
import { Stage } from "./Stage";

import { useBreakpoints } from "@/utils";

export const StagesPage = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) return <MobileStagesPage stages={stages} />;

  return (
    <MainContainer id="stages">
      <Box sx={{ flex: 1 }}>
        <HeaderWrapper>
          <Placeholder />
          <StagesTitleWrapper>
            <StagesTitle variant="h1">ETAPY</StagesTitle>
          </StagesTitleWrapper>
        </HeaderWrapper>
        <StagesWrapper>
          {stages.map((stage) => (
            <Stage {...stage} />
          ))}
        </StagesWrapper>
      </Box>
      <Box sx={{ width: 160 }}></Box>
      <TitleWrapper>
        <Title variant="h1">WSPÓŁPRACA</Title>
      </TitleWrapper>
    </MainContainer>
  );
};

const stages = [
  {
    title: "etap I",
    bulletPoints: [
      `Inwentaryzacja`,
      `Ustalenie układu funkcjonalnego`,
      `Wstępna bryła 3D [biała bryła]`,
    ],
  },
  {
    title: "etap II",
    bulletPoints: [
      `Dokładne modelowanie bryły  3D`,
      `Dobranie wstępnych materiałów [zestawienie materiałów]`,
      `Wstępne wyceny`,
      `Omawianie instalacji`,
    ],
  },
  {
    title: "etap III",
    bulletPoints: [
      `Dokumentacja techniczna`,
      `Finalne wizualizacje 3D`,
      `Całkowite zestawienie materiałów`,
    ],
  },
];

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "800px",
  minHeight: "430px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
}));

const Title = styled(Typography)(({ theme: { palette } }) => ({
  position: "absolute",
  top: 500,
  left: 15,
  width: 300,
  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  fontFamily: `"Montserrat", sans-serif`,
  fontWeight: 400,
  color: palette.text.primary,
  cursor: "default",
}));

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 160,
  height: "100%",
  position: "absolute",
  right: 0,
  backgroundColor: palette.primary.light,
  display: "flex",
  alignItems: "center",
}));

const StagesWrapper = styled(Box)(({ theme: {} }) => ({
  display: "flex",
  alignItems: "center",
}));

const Placeholder = styled(Box)(({ theme: {} }) => ({
  flex: 1,
}));

const StagesTitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.primary.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StagesTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));

const HeaderWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: "100%",
  height: 200,
  display: "flex",
  backgroundColor: palette.primary.main,
}));
