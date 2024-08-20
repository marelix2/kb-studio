import React from "react";
import { Box, styled, Typography } from "@mui/material";

import {
  facebookIcon,
  facebookMobileIcon,
  instagramIcon,
  instagramMobileIcon,
  Landing1,
} from "@/assets";
import { openInNewTab, useBreakpoints } from "@/utils";

const FB_LINK = `https://www.facebook.com/profile.php?id=100089271181224`;
const INSTAGRAM_LINK = `https://www.instagram.com/studioprojektowe_kb`;

export const LandingPage = () => {
  const { isMobile } = useBreakpoints();

  // if (isMobile) return <MobileLandingPage />;

  return (
    <MainContainer id="hero">
      <InnerWrapper>
        <ImageContainer />
        <LeftContainer>
          <TopBox>
            <HeroText variant="h1" color="primary">
              “Wnętrze, które wyraża Ciebie”
            </HeroText>
          </TopBox>
          <BottomBox>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                letterSpacing: 10,
                cursor: "default",
                alignItems: "flex-end",
              }}
            >
              K&B STUDIO
            </Typography>
            <SocialsBox>
              <SocialButton
                src={isMobile ? facebookMobileIcon : facebookIcon}
                onClick={() => openInNewTab({ url: FB_LINK })}
              />
              <SocialButton
                src={isMobile ? instagramMobileIcon : instagramIcon}
                onClick={() => openInNewTab({ url: INSTAGRAM_LINK })}
              />
            </SocialsBox>
          </BottomBox>
        </LeftContainer>
      </InnerWrapper>
    </MainContainer>
  );
};

const SocialButton = styled("img")(({ theme: {} }) => ({
  width: 64,
  height: 64,
  cursor: "pointer",
}));

const LeftContainer = styled(Box)(
  ({ theme: { spacing, breakpoints, palette } }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: spacing(4),
    padding: spacing(2),
    [breakpoints.down("md")]: {
      borderTopWidth: 1,
      borderTopStyle: "solid",
      padding: 0,
      paddingTop: spacing(2),
      borderColor: palette.primary.main,
      paddingBottom: spacing(2),
    },
  })
);

const TopBox = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: "200px",
  gap: spacing(4),
}));
const HeroText = styled(Typography)(({ theme: {} }) => ({
  fontSize: 96,
  letterSpacing: 12,
  cursor: "default",
  lineHeight: 1.4,
}));

const BottomBox = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: spacing(2),
}));
const SocialsBox = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: spacing(4),
}));

const ImageContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Landing1})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
  [breakpoints.down("md")]: {
    height: 390,
  },
}));

const MainContainer = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  maxWidth: "100%",
  height: "720px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: spacing(4),
  [breakpoints.down("md")]: {
    height: "auto",
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
    flexDirection: "column",
    height: "fit-content",
    gap: spacing(2),
  },
}));
