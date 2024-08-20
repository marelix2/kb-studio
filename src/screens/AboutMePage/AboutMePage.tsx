import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { aboutMe1 } from "@/assets";
import { PageHeader } from "@/components";

export const AboutMePage = () => {
  return (
    <MainContainer id="about-me">
      <PageHeader title={"O MINE"} />
      <InnerWrapper>
        <ImageWrapper>
          <ImageContainer />
          <NameAndTitle variant="body2" sx={{}}>
            mgr inż. arch. Karolina Plech
          </NameAndTitle>
        </ImageWrapper>
        <LeftContainer>
          <Box>
            <TextSectionTitle variant="h2">Kim jestem?</TextSectionTitle>
            <TextSectionDescription variant="body1">
              Architektką, która swoją pasję do wnętrz połączyła z pracą
            </TextSectionDescription>
          </Box>
          <Box>
            <TextSectionTitle variant="h2">Czym się zajmuję?</TextSectionTitle>
            <TextSectionDescription variant="body1">
              Głównie zajmuję się projektowaniem wnętrz prywatnych,
              inwestycyjnych. Do każdego projektu podchodzę indywidualnie.
              Najważniejsze dla mnie to poznanie Ciebie i Twoich potrzeb.
              Efektem tego jest unikatowy projekt wnętrza
            </TextSectionDescription>
          </Box>
          <Box>
            <TextSectionTitle variant="h2">co oferuję?</TextSectionTitle>
            <TextSectionDescription variant="body1">
              Projekty, które są zróżnicowane pod kątem zakresu
            </TextSectionDescription>
          </Box>
        </LeftContainer>
      </InnerWrapper>
    </MainContainer>
  );
};

const LeftContainer = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  width: "100%",
  height: "720px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  flex: 7,
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
  paddingLeft: spacing(8),
  gap: spacing(4),
  [breakpoints.down("md")]: {
    paddingTop: spacing(1),
    gap: spacing(2),
  },
}));

const ImageWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  flex: 3,
  position: "relative",
  [breakpoints.down("md")]: {
    alignItems: "flex-start",
    marginRight: "20px",
    justifyContent: "flex-start",
  },
}));

const ImageContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${aboutMe1})`,
  backgroundSize: "cover",
  backgroundPosition: "50% center",
  [breakpoints.down("md")]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 250,
    height: 320,
  },
}));

const MainContainer = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  maxWidth: "100%",
  minHeight: 900,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: spacing(4),
  paddingBottom: spacing(12),
  [breakpoints.down("md")]: {
    paddingBottom: spacing(6),
  },
}));

const InnerWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  maxWidth: "1920px",
  height: "720px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: spacing(4),
  [breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: spacing(1),
  },
}));

const TextSectionTitle = styled(Typography)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
    color: palette.primary.main,
    marginBottom: spacing(4),
    cursor: "default",
    textTransform: "uppercase",
    [breakpoints.down("md")]: {
      marginBottom: spacing(1),
    },
  })
);

const TextSectionDescription = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.primary,
  cursor: "default",
}));

const NameAndTitle = styled(Typography)(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.primary.main,
    transform: "rotate(-90deg)",
    width: 400,
    position: "absolute",
    bottom: "29%",
    left: "63%",
    [breakpoints.down(1441)]: {
      bottom: "27%",
      left: "57%",
    },
    [breakpoints.down("md")]: {
      bottom: "60%",
      left: "14%",
    },
  })
);
