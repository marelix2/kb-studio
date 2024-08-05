import React from "react";
import { Box, styled, Typography } from "@mui/material";

export const BundleBottomFooter = () => {
  return (
    <>
      <BundleFooterWrapper>
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: 700, mb: 4 }}
        >
          CO ZYSKASZ WYBIERAJĄC TEN PAKIET?
        </Typography>
        <Typography variant="body2">
          Profesjonalnie wykonaną dokumentację techniczną wraz z wizualizacjami
          oraz zestawienie materiałów umożliwiające zakup produktów
        </Typography>
      </BundleFooterWrapper>
      <BottomWrapper>
        <BottomText variant="body1" color="proimary">
          *możliwość indywidualnej wyceny za projekt lub mieszania pakietów.
          Jeżeli nie jesteś pewna/ny, który pakiet jest dla Ciebie, skontaktuj
          się ze mną, a wycenię projekt indywidualnie
        </BottomText>
      </BottomWrapper>
    </>
  );
};

const BundleFooterWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  width: "100%",
  maxHeight: 200,
  paddingTop: spacing(2),
  paddingBottom: spacing(2),
  position: "relative",
  display: "flex",
  flexDirection: "column",
  borderTopColor: palette.primary.dark,
  borderTopWidth: 1,
  borderTopStyle: "solid",
}));

const BottomWrapper = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: 90,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
}));

const BottomText = styled(Typography)(({ theme: {} }) => ({
  cursor: "default",
}));
