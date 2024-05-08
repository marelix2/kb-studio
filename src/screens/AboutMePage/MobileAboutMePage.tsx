import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { aboutMe2 } from "@/assets";

export const MobileLandingPage = () => {
  return (
    <MainContainer id="about-me">
      <InnerWrapper>
        <ImageContainer />
        <TextContent>
          <Box>
            <TextSectionTitle variant="h2">Kim jestem?</TextSectionTitle>
            <TextSectionDescription variant="body1">
              Nazywam się Karolina Plech i jestem z wykształcenia architektem
            </TextSectionDescription>
          </Box>
          <Box>
            <TextSectionTitle variant="h2">Czym się zajmuję?</TextSectionTitle>
            <TextSectionDescription variant="body1">
              Głównie zajmuję się projektowaniem wnętrz prywatnych
            </TextSectionDescription>
          </Box>
          <Box>
            <TextSectionTitle variant="h2">co oferuję?</TextSectionTitle>
            <TextSectionDescription variant="body1">
              Oferuję projekty wnętrz z zakresem dopasowanym do potrzeb
            </TextSectionDescription>
          </Box>
        </TextContent>
        <TitleWrapper>
          <Title variant="h1">O MNIE</Title>
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

const ImageContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  flex: 1,
  backgroundImage: `url(${aboutMe2})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 85%",
  minHeight: "300px",
  height: "100%",
  [breakpoints.up(700)]: {
    minHeight: "450px",
  },
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
  backgroundColor: palette.light.main,
  marginRight: spacing(2),
}));

const TextSectionTitle = styled(Typography)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.primary.main,
    marginBottom: spacing(2),
    cursor: "default",
    textTransform: "uppercase",
  })
);

const TextSectionDescription = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.primary,
  cursor: "default",
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
  top: 200,
  left: 15,
  width: 200,

  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  color: palette.text.secondary,
  cursor: "default",
}));
