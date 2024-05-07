import React from "react";
import { Box, styled } from "@mui/material";

import { facebookIcon, instagramIcon, Landing1 } from "@/assets";
import { openInNewTab } from "@/utils";

const FB_LINK = `https://www.facebook.com/profile.php?id=100089271181224`;
const INSTAGRAM_LINK = `https://www.instagram.com/studioprojektowe_kb`;

export const MobileLandingPage = () => {
  return (
    <MainContainer id="hero">
      <BottomContainer>
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
  width: 48,
  height: 48,
  cursor: "pointer",
}));

const BottomContainer = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  height: 200,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: spacing(4),
  gap: spacing(4),
}));

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "100vh",
  minHeight: "812px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundImage: `url(${Landing1})`,
  backgroundSize: "cover",
  backgroundPosition: "36% 0",
}));
