import React, { PropsWithChildren } from "react";
import { Box, styled, Typography } from "@mui/material";

import { MenuDrawer } from "./MenuDrawer";
import { MenuDrawerButton } from "./MenuDrawerButton";

import { logoWhite } from "@/assets";
import { scrollToElement } from "@/utils";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
};

export const MobileHeader = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <WebContainer>
      <TextWrapper>
        <Box
          sx={({}) => ({
            cursor: "pointer",
          })}
          onClick={() => {
            scrollToElement({ id: "#hero", block: "start" });
          }}
        >
          <img src={logoWhite} alt="logo" width={"60"} height={"60"} />
        </Box>
        <Typography
          sx={({ palette }) => ({
            textTransform: "uppercase",
            cursor: "default",
            color: palette.text.secondary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 200,
          })}
          variant="h3"
        >
          projektowanie wnętrz
        </Typography>
      </TextWrapper>
      <DrawerWrapper>
        <MenuDrawerButton open={menuOpen} onClick={setMenuOpen} />
      </DrawerWrapper>
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </WebContainer>
  );
};

const WebContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={({ palette }) => ({
      flex: 1,
      display: "flex",
      backgroundColor: palette.primary.main,
      height: 81,
      alignItems: "center",
      justifyContent: "center",
    })}
  >
    {children}
  </Box>
);

const DrawerWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
}));

const TextWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 6,
  display: "flex",

  alignItems: "center",
}));
