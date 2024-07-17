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
import { MobileHeader } from "./MobileHeader";

import { logoWhite } from "@/assets";

type MenuButtonProps = {
  selected: boolean;
};

const MenuButton = styled(Button)<MenuButtonProps>(
  ({ theme: { spacing, palette }, selected }) => ({
    marginRight: spacing(9),
    textTransform: "uppercase",
    background: "transparent",
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
    <HeaderContainer menuOpen={menuOpen}>
      <InnerContainer>
        {!md && (
          <>
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
                variant="h2"
                sx={({ breakpoints }) => ({
                  textTransform: "uppercase",
                  cursor: "default",
                  [breakpoints.down(1600)]: {
                    fontSize: "35px",
                    lineHeight: "40px",
                  },
                })}
              >
                Projektowanie wnętrz
              </Typography>
            </WebContainer>
            <Box
              sx={({}) => ({
                backgroundColor: `#f9f8f6C6`,
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
          </>
        )}
        {md && <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      </InnerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = ({
  children,
  menuOpen,
}: PropsWithChildren<{ menuOpen: boolean }>) => (
  <Box
    sx={({ breakpoints, palette }) => ({
      [breakpoints.down("lg")]: {
        height: 100,
      },
      [breakpoints.down("md")]: {
        height: 61,
      },
      position: menuOpen ? "fixed" : "relative",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: palette.primary.dark,
      height: 120,
      zIndex: 3,
    })}
  >
    {children}
  </Box>
);

const InnerContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={({ breakpoints }) => ({
      width: "100%",
      height: 120,
      [breakpoints.down("md")]: {
        height: 61,
      },
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
    sx={({ palette }) => ({
      flex: 1,
      display: "flex",
      backgroundColor: palette.primary.main,
      height: 120,
      alignItems: "center",
      justifyContent: "space-around",
    })}
  >
    {children}
  </Box>
);
