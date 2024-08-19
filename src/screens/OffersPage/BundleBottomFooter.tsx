import React from "react";
import { Box, styled, Typography } from "@mui/material";

export const BundleBottomFooter = () => {
  return (
    <>
      <BundleFooterWrapper>
        <Title variant="h4" color="primary" sx={{}}>
          CO ZYSKASZ WYBIERAJĄC TEN PAKIET?
        </Title>
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

const Title = styled(Typography)(({ theme: { breakpoints, spacing } }) => ({
  fontWeight: 700,
  marginBottom: spacing(4),
  [breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const BundleFooterWrapper = styled(Box)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
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
    [breakpoints.down("md")]: {
      maxHeight: 350,
    },
  })
);

const BottomWrapper = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: 90,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
}));

const BottomText = styled(Typography)(
  ({ theme: { breakpoints, palette } }) => ({
    color: palette.text.primary,
    cursor: "default",
    [breakpoints.down("md")]: {
      fontWeight: 700,
      fontSize: "12px",
    },
  })
);
