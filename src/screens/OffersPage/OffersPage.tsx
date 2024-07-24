import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Bundle } from "./Bundle";

import { useBreakpoints } from "@/utils";

export const OffersPage = () => {
  const { isMobile } = useBreakpoints();

  return (
    <MainContainer id="offer">
      <InnerWrapper>
        <BundlesWrapper>
          <HeaderWrapper>
            <BundlesTitleWrapper>
              <BundlesTitle variant="h1">Pakiety</BundlesTitle>
            </BundlesTitleWrapper>
          </HeaderWrapper>
          <OffersWrapper isMobile={isMobile}>
            {offers.map((offer) => (
              <Bundle {...offer} />
            ))}
          </OffersWrapper>
          <BottomWrapper>
            <BottomText variant="body1">
              *możliwość indywidualnej wyceny za projekt lub mieszania pakietów.
              Jeżeli nie jesteś pewna/ny, który pakiet jest dla Ciebie,
              skontaktuj się ze mną, a wycenię projekt indywidualnie
            </BottomText>
          </BottomWrapper>
        </BundlesWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const offers = [
  {
    title: "MINI",
    bulletPoints: [
      { title: `wycena za ilość wizualizacji`, cost: "400 zł/ujęcie" },
    ],
    arrowType: "medium",
  },
  {
    title: "MIDI",
    bulletPoints: [
      { title: `Projekt kuchni`, cost: "2000 zł" },
      { title: `Projekt łazienki`, cost: "2200 zł" },
    ],
    arrowType: "small",
  },
  {
    title: "MAXI",
    bulletPoints: [
      {
        title: `wycena za metr kwadratowy`,
        cost: "200 zł/m2",
      },
    ],
    arrowType: "medium",
  },
];

const BundlesWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const HeaderWrapper = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: 120,
  display: "flex",
}));

const BundlesTitleWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: spacing(2),
  borderBottomWidth: 1,
  borderBottomColor: palette.primary.main,
  borderBottomStyle: "solid",
}));

const BundlesTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
  fontFamily: `"Montserrat", sans-serif`,
  textAlign: "start",
}));

const OffersWrapper = styled(Box)<{ isMobile: boolean }>(
  ({ theme: { spacing }, isMobile }) => ({
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "unset",
    justifyContent: "space-evenly",
    gap: spacing(2),
    paddingTop: spacing(2),
  })
);

const BottomWrapper = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const BottomText = styled(Typography)(({ theme: {} }) => ({
  cursor: "default",
}));

const MainContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: spacing(4),
  backgroundColor: palette.primary.light,
}));

const InnerWrapper = styled(Box)(({ theme: { spacing } }) => ({
  maxWidth: "1920px",

  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: spacing(4),
}));
