import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { MobileProjectSection } from "./MobileProjectSection";

export const MobilePortfolioPage = ({ projects }) => {
  return (
    <MainContainer id="contact">
      <InnerWrapper>
        <TextContent>
          <ContactTitleWrapper>
            <ContactTitle variant="h1">PROJEKTY</ContactTitle>
          </ContactTitleWrapper>
        </TextContent>
        <SecondSectionWrapper>
          {projects.map((project) => (
            <MobileProjectSection {...project} key={project.id} />
          ))}
        </SecondSectionWrapper>
        <TitleWrapper>
          <Title variant="h1">PORTFOLIO</Title>
        </TitleWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  backgroundSize: "contains",
}));

const InnerWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 8,
  maxWidth: "100%",
  minHeight: "430px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundSize: "contains",
  marginTop: "8px",
}));

const ContactTitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: "100%",
  backgroundColor: palette.primary.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
}));

const ContactTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));

const TextContent = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 1,
  display: "flex",
  zIndex: 2,
  flexDirection: "column",
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
  paddingLeft: spacing(2),
  paddingRight: spacing(2),
  gap: spacing(4),
  backgroundColor: palette.primary.light,
  marginRight: 60,
}));

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 60,
  height: "100%",
  position: "absolute",
  right: 0,
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme: { palette } }) => ({
  position: "absolute",
  top: 300,
  left: 15,
  width: 200,
  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  color: palette.text.secondary,
  cursor: "default",
}));

const SecondSectionWrapper = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: spacing(2),
  marginRight: 60,
  textAlign: "start",
}));
