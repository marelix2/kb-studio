import React, { PropsWithChildren, useState } from "react";
import { Box, Button, styled, useMediaQuery, useTheme } from "@mui/material";

import { MenuDrawer } from "./MenuDrawer";
import { MenuDrawerButton } from "./MenuDrawerButton";
import { scrollToElement } from "../utils";

const HeaderContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={({ palette, breakpoints }) => ({
      [breakpoints.down("lg")]: {
        height: 100,
      },
      [breakpoints.down("md")]: {
        height: 61,
      },
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: palette.background.default,
      height: 120,
      zIndex: 2,
      borderBottomColor: palette.primary.main,
      borderBottomWidth: 4,
      borderBottomStyle: "solid",
    })}
  >
    <Box
      sx={({ palette }) => ({
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      {children}
    </Box>
  </Box>
);

type MenuButtonProps = {
  selected: boolean;
};

const MenuButton = styled(Button)<MenuButtonProps>(
  ({ theme: { spacing, palette }, selected }) => ({
    marginRight: spacing(9),
    textTransform: "none",
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
      id: "#projects",
      label: "O mnie",
      href: "/projects",
      index: 2,
    },
    {
      id: "#offer",
      label: "Oferta",
      href: "/offer",
      index: 3,
    },
    {
      id: "#contact",
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
      <Box
        sx={({ spacing }) => ({
          mx: spacing(3),
          my: spacing(3),
          cursor: "pointer",
        })}
        onClick={() => {
          // if (router.pathname === "/") {
          //   scrollToElement({ id: "#hero", block: "start" });
          // } else {
          //   router.push("/");
          //   setSelected(1);
          // }
        }}
      >
        <img
          src="src/assets/logo_color.png"
          alt="logo"
          width={md ? "60" : "120"}
          height={md ? "60" : "120"}
        />
      </Box>
      {!md && (
        <Box>
          {items.map(({ id, label, index }) => (
            <MenuButton
              key={id}
              disableRipple
              selected={selected === index}
              onClick={() => {
                scrollToElement({ id, block: "start" });
                setSelected(index);
                // href && router.push(href);
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
    </HeaderContainer>
  );
};
