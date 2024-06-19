import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Bundle } from "./Bundle";
import { MobileOffersPage } from "./MobileOffersPage";

import { useBreakpoints } from "@/utils";

export const OffersPage = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) return <MobileOffersPage offers={offers} />;

  return (
    <MainContainer id="offer">
      <BundlesWrapper>
        <HeaderWrapper>
          <Placeholder />
          <BundlesTitleWrapper>
            <BundlesTitle variant="h1">Pakiety</BundlesTitle>
          </BundlesTitleWrapper>
        </HeaderWrapper>
        <OffersWrapper>
          {offers.map((offer) => (
            <Bundle {...offer} />
          ))}
        </OffersWrapper>
        <BottomWrapper>
          <BottomText variant="body1">
            *możliwość indywidualnej wyceny za projekt lub mieszania pakietów.
            Jeżeli nie jesteś pewna/ny, który pakiet jest dla Ciebie, skontaktuj
            się ze mną, a wycenię projekt indywidualnie
          </BottomText>
        </BottomWrapper>
      </BundlesWrapper>
      <Box sx={{ width: 160 }}></Box>
      <TitleWrapper>
        <Title variant="h1">OFERTA</Title>
      </TitleWrapper>
    </MainContainer>
  );
};

const offers = [
  {
    title: "Pakiet MINI",
    subtitle: `wycena za ilość wizualizacji [400 zł/ujęcie]`,
    bulletPoints: [
      `wizualizacje pomieszczeń [min. 3 na pomieszczenie] + pokazanie wnętrza szaf wykonywanych dla stolarza`,
      `zestawienie elementów`,
      `rzuty funkcjonalne`,
      `brak widoków ścian`,
    ],
  },
  {
    title: "Pakiet MIDI",
    subtitle: `wycena za metr kwadratowy [180 zł/m2]`,
    bulletPoints: [
      `wizualizacje 3D jednego pomieszczenia lub więcej`,
      `zestawienie elementów`,
      `dokumentacja techniczna [rzuty + widoki ścian]`,
      `rysunki techniczne dla stolarza`,
    ],
  },
  {
    title: "Pakiet MAXI",
    subtitle: `wycena za metr kwadratowy [200 zł/m2]`,
    bulletPoints: [
      `wizualizacje 3D wszystkich pomieszczeń mieszkania/domu`,
      `zestawienie elementów`,
      `dokumentacja techniczna  [rzuty + widoki ścian]`,
      `rysunki techniczne dla stolarza`,
    ],
  },
];

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
  position: "absolute",
  top: 500,
  left: 15,
  width: 300,
  transform: "rotate(-90deg)",
  fontFamily: `"Montserrat", sans-serif`,
  fontWeight: 400,
  transformOrigin: "left top",
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

const BundlesWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  height: "100%",
  backgroundColor: palette.common.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const HeaderWrapper = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: 200,
  display: "flex",
}));

const Placeholder = styled(Box)(({ theme: {} }) => ({
  flex: 1,
}));

const BundlesTitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.primary.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const BundlesTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));

const OffersWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  width: "100%",
  flex: 1,
  display: "flex",
  justifyContent: "center",

  [breakpoints.up(1441)]: {
    gap: spacing(4),
  },
}));

const BottomWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: "100%",
  height: 150,
  display: "flex",
  backgroundColor: palette.primary.main,
  alignItems: "center",
  justifyContent: "center",
}));

const BottomText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.common.white,
  cursor: "default",
}));
