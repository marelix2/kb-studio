import React, { PropsWithChildren } from "react";
import { Box, styled, Typography } from "@mui/material";

import { MenuDrawer } from "./MenuDrawer";
import { MenuDrawerButton } from "./MenuDrawerButton";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
};

export const MobileHeader = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <WebContainer>
      <TextWrapper>
        <Typography color="secondary" variant="h1">
          K&B STUDIO
        </Typography>
        <Typography
          color="secondary"
          variant="h3"
          sx={{ textTransform: "uppercase", cursor: "default" }}
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
    sx={({}) => ({
      flex: 1,
      display: "flex",
      backgroundColor: `#f9f8f6CC`,
      height: 80,
      alignItems: "center",
      justifyContent: "space-around",
    })}
  >
    {children}
  </Box>
);

const DrawerWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
}));

const TextWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 7,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
