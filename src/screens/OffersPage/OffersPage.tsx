import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Bundle } from "./Bundle";
import { MaxiBundle } from "./MaxiBundle";
import { MidiBundle } from "./MidiBundle";
import { MiniBundle } from "./MiniBundle";

import { PageHeader } from "@/components";
import { useBreakpoints } from "@/utils";

export const OffersPage = () => {
  const { isMobile } = useBreakpoints();

  return (
    <>
      <MainContainer id="offer">
        <InnerWrapper>
          <BundlesWrapper>
            <PageHeader title={"Pakiety"} />
            <OffersWrapper isMobile={isMobile}>
              {offers.map((offer) => (
                <Bundle {...offer} key={offer.id} />
              ))}
            </OffersWrapper>
            <BottomWrapper>
              <BottomText variant="body1">
                *możliwość indywidualnej wyceny za projekt lub mieszania
                pakietów. Jeżeli nie jesteś pewna/ny, który pakiet jest dla
                Ciebie, skontaktuj się ze mną, a wycenię projekt indywidualnie
              </BottomText>
            </BottomWrapper>
          </BundlesWrapper>
        </InnerWrapper>
      </MainContainer>
      <MiniBundle />
      <MidiBundle />
      <MaxiBundle />
    </>
  );
};

const offers = [
  {
    title: "MINI",
    bulletPoints: [
      { title: `wycena za ilość wizualizacji`, cost: "400 zł/ujęcie" },
    ],
    arrowType: "medium",
    id: "#mini-bundle",
  },
  {
    title: "MIDI",
    bulletPoints: [
      { title: `Projekt kuchni`, cost: "2000 zł" },
      { title: `Projekt łazienki`, cost: "2200 zł" },
    ],
    arrowType: "small",
    id: "#midi-bundle",
  },
  {
    title: "MAXI",
    bulletPoints: [
      {
        title: `wycena za metr kwadratowy`,
        cost: "180 - 200 zł/m2",
      },
    ],
    arrowType: "medium",
    id: "#maxi-bundle",
  },
];

const BundlesWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const OffersWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile: boolean }>(({ theme: { spacing }, isMobile }) => ({
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: isMobile ? "center" : "unset",
  justifyContent: "space-evenly",
  gap: spacing(2),
  paddingTop: spacing(2),
}));

const BottomWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  width: "100%",
  height: 90,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [breakpoints.down("md")]: {
    height: 150,
  },
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
