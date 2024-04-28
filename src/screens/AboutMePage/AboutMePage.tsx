import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { aboutMe1 } from "@/assets";

export const AboutMePage = () => {
  return (
    <MainContainer id="about-me">
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
    </MainContainer>
  );
};

const ImageContainer = styled(Box)(({ theme: {} }) => ({
  flex: 5,
  backgroundImage: `url(${aboutMe1})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
  height: "100%",
}));

const TextContent = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 5,
  display: "flex",
  flexDirection: "column",
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
  paddingLeft: spacing(8),
  gap: spacing(4),
  backgroundColor: palette.primary.light,
}));

const TextSectionTitle = styled(Typography)(
  ({ theme: { palette, spacing } }) => ({
    color: palette.primary.main,
    marginBottom: spacing(4),
    cursor: "default",
    textTransform: "uppercase",
  })
);

const TextSectionDescription = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.primary,
  cursor: "default",
}));

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 160,
  height: "100%",
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme: { palette } }) => ({
  paddingTop: 20,
  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  color: palette.text.secondary,
  cursor: "default",
}));

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
