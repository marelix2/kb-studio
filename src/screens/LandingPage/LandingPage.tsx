import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { MobileLandingPage } from "./MobileLandingPage";

import { facebookIcon, instagramIcon, Landing1 } from "@/assets";
import { openInNewTab, useBreakpoints } from "@/utils";

const FB_LINK = `https://www.facebook.com/profile.php?id=100089271181224`;
const INSTAGRAM_LINK = `https://www.instagram.com/studioprojektowe_kb`;

export const LandingPage = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) return <MobileLandingPage />;

  return (
    <MainContainer id="hero">
      <BottomContainer>
        <Typography
          variant="h1"
          color="primary"
          sx={{
            fontSize: 64,
            letterSpacing: 10,
            mt: "-10px",
            cursor: "default",
          }}
        >
          K&B STUDIO
        </Typography>
        <SocialButton
          src={instagramIcon}
          onClick={() => openInNewTab({ url: INSTAGRAM_LINK })}
        />
        <SocialButton
          src={facebookIcon}
          onClick={() => openInNewTab({ url: FB_LINK })}
        />
      </BottomContainer>
    </MainContainer>
  );
};

const SocialButton = styled("img")(({ theme: {} }) => ({
  width: 64,
  height: 64,
  cursor: "pointer",
}));

const BottomContainer = styled(Box)(({ theme: { spacing } }) => ({
  backgroundColor: `#f9f8f6c4`,
  width: "100%",
  height: 250,
  display: "flex",
  justifyContent: "flex-end",
  padding: spacing(4),
  gap: spacing(4),
}));

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "100vh",
  minHeight: "900px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundImage: `url(${Landing1})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
}));
