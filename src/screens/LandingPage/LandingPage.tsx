import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { facebookIcon, instagramIcon, Landing1 } from "@/assets";
import { openInNewTab } from "@/utils";

const FB_LINK = `https://www.facebook.com/profile.php?id=100089271181224`;
const INSTAGRAM_LINK = `https://www.instagram.com/studioprojektowe_kb`;

export const LandingPage = () => {
  return (
    <MainContainer id="hero">
      <BottomContainer>
        <Typography variant="h1" color="white" sx={{ fontSize: 64 }}>
          K&B STUDIO
        </Typography>
        <SocialButton
          src={facebookIcon}
          onClick={() => openInNewTab({ url: FB_LINK })}
        />
        <SocialButton
          src={instagramIcon}
          onClick={() => openInNewTab({ url: INSTAGRAM_LINK })}
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
  backgroundColor: `rgba(225, 218, 209, 0.8)`,
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
