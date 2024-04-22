import React, { PropsWithChildren, useState } from "react";
import {
  Box,
  Button,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { scrollToElement } from "../utils";
import { MenuDrawer } from "./MenuDrawer";
import { MenuDrawerButton } from "./MenuDrawerButton";

import { logoWhite } from "@/assets";

type MenuButtonProps = {
  selected: boolean;
};

const MenuButton = styled(Button)<MenuButtonProps>(
  ({ theme: { spacing, palette }, selected }) => ({
    marginRight: spacing(9),
    textTransform: "uppercase",
    background: palette.background.default,
    color: selected ? palette.secondary.main : "black",
    "&:hover": {
      color: palette.primary.main,
      background: "transparent",
    },
  })
);

type Props = {
  menuItemSelected?: number;
};

export const Header = ({ menuItemSelected }: Props) => {
  const [selected, setSelected] = useState<number | null>(
    menuItemSelected ?? null
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down("md"));

  const items = [
    {
      id: "#home",
      label: "Home",
      href: "/",
      index: 1,
    },
    {
      id: "#about-me",
      label: "O mnie",
      href: "/about-me",
      index: 2,
    },
    {
      id: "#offer",
      label: "Oferta",
      href: "/offer",
      index: 3,
    },
    {
      id: "#portfolio",
      label: "portfolio",
      href: "/contact",
      index: 5,
    },
    {
      id: "#contact",
      label: "Kontakt",
      href: "/contact",
      index: 5,
    },
  ];

  return (
    <HeaderContainer>
      <InnerContainer>
        <WebContainer>
          <Box
            sx={({ spacing }) => ({
              my: spacing(3),
              cursor: "pointer",
            })}
            onClick={() => {
              scrollToElement({ id: "#hero", block: "start" });
            }}
          >
            <img
              src={logoWhite}
              alt="logo"
              width={md ? "60" : "120"}
              height={md ? "60" : "120"}
            />
          </Box>
          <Typography
            color="white"
            variant="h1"
            sx={{ textTransform: "uppercase", cursor: "default" }}
          >
            Projektowanie wnętrz
          </Typography>
        </WebContainer>
        {!md && (
          <Box
            sx={({}) => ({
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flex: 1,
            })}
          >
            {items.map(({ id, label, index }) => (
              <MenuButton
                key={id}
                disableRipple
                selected={selected === index}
                onClick={() => {
                  scrollToElement({ id, block: "start" });
                  setSelected(index);
                }}
              >
                {label}
              </MenuButton>
            ))}
          </Box>
        )}
        {md && (
          <Box>
            <MenuDrawerButton open={menuOpen} onClick={setMenuOpen} />
            <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
          </Box>
        )}
      </InnerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={({ breakpoints }) => ({
      [breakpoints.down("lg")]: {
        height: 100,
      },
      [breakpoints.down("md")]: {
        height: 61,
      },
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 120,
      zIndex: 2,
    })}
  >
    {children}
  </Box>
);

const InnerContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={({}) => ({
      width: "100%",
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    })}
  >
    {children}
  </Box>
);
const WebContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={({}) => ({
      flex: 1,
      display: "flex",
      backgroundColor: `#A17D60CC`,
      height: 120,
      alignItems: "center",
      justifyContent: "space-around",
    })}
  >
    {children}
  </Box>
);
