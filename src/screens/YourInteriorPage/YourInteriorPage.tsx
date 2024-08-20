import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { yourInterior1, yourInterior2 } from "@/assets";

export const YourInteriorPage = () => {
  return (
    <MainContainer>
      <InnerWrapper>
        <RightContainer>
          <TopBox>
            <MainText variant="h1" color="primary">
              Twoje wnętrze ma znaczenie
            </MainText>
          </TopBox>
          <BottomBox>
            <Typography color="primary" variant="body2">
              Projekt wnętrza to dokładne zapoznanie się z Twoimi potrzebami,
              aby tworzona przestrzeń była odzwierciedleniem Ciebie
            </Typography>
          </BottomBox>
        </RightContainer>
        <ImageContainer>
          <TopImage />
          <BottomImage />
        </ImageContainer>
      </InnerWrapper>
    </MainContainer>
  );
};

const RightContainer = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  height: "720px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: spacing(4),
  padding: spacing(2),
  flex: 6,
}));

const TopBox = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: "200px",
  gap: spacing(4),
}));
const MainText = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: 96,
  letterSpacing: 12,
  cursor: "default",
  lineHeight: 1.4,
  [breakpoints.down("md")]: {
    letterSpacing: 8,
  },
}));

const BottomBox = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: spacing(2),
  maxWidth: 700,
}));

const ImageContainer = styled(Box)(({ theme: {} }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100%",
  height: "100%",
  flex: 4,
}));

const TopImage = styled(Box)(({ theme: { breakpoints } }) => ({
  width: "100%",
  height: 300,
  backgroundImage: `url(${yourInterior1})`,
  backgroundSize: "cover",
  backgroundPosition: "50% center",
  [breakpoints.down("md")]: {
    height: 150,
  },
}));

const BottomImage = styled(Box)(({ theme: { breakpoints } }) => ({
  width: "100%",
  height: 420,
  backgroundImage: `url(${yourInterior2})`,
  backgroundSize: "cover",
  backgroundPosition: "50% center",
  [breakpoints.down("md")]: {
    height: 180,
  },
}));

const MainContainer = styled(Box)(
  ({ theme: { spacing, palette, breakpoints } }) => ({
    maxWidth: "100%",
    height: "900px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: spacing(4),
    paddingTop: spacing(12),
    backgroundColor: palette.primary.light,
    [breakpoints.down("md")]: {
      height: "fit-content",
      paddingTop: spacing(8),
    },
  })
);

const InnerWrapper = styled(Box)(
  ({ theme: { spacing, palette, breakpoints } }) => ({
    maxWidth: "1920px",
    height: "900px",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing(4),
    borderTopColor: palette.primary.dark,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    [breakpoints.down("md")]: {
      flexDirection: "column",
      height: "fit-content",
      gap: spacing(2),
    },
  })
);
