import { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";

import { scrollToElement } from "@/utils";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

type DrawerItemProps = {
  item: {
    label: string;
  };
  onItemPress: () => void;
};

export const MenuDrawer = ({ open, onClose }: DrawerProps) => {
  const menuItems = [
    {
      id: "#hero",
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
    <Menu open={open}>
      <MenuBody>
        <MenuItems>
          {menuItems.map((item) => (
            <MenuDrawerItem
              key={item.label}
              item={item}
              onItemPress={() => {
                scrollToElement({ id: item.id });
                onClose();
              }}
            />
          ))}
          <Divider />
        </MenuItems>
      </MenuBody>
    </Menu>
  );
};

const Menu = ({ open, children }: PropsWithChildren<{ open: boolean }>) => (
  <Box
    sx={({}) => ({
      display: "auto",
      position: "fixed",
      transition: "all .5s ease-in-out",
      backgroundColor: `#333333CC`,
      width: "100vw",
      visibility: open ? "unset" : "hidden",
      opacity: open ? 1 : 0,
      left: 4,
      top: 71,
      height: open ? "100vh" : 0,
    })}
  >
    {children}
  </Box>
);

const Divider = () => (
  <Box
    sx={({ palette }) => ({
      display: "flex",
      width: "152px",
      borderWidth: "1px",
      borderColor: palette?.secondary.main,
      borderStyle: "solid",
    })}
  />
);

const MenuBody = ({ children }: PropsWithChildren) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100% - 54px",
      width: "inherit",
      pt: "100px",
    }}
  >
    {children}
  </Box>
);

const MenuItems = ({ children }: PropsWithChildren) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "inherit",
      gap: "44px",
    }}
  >
    {children}
  </Box>
);

const MenuDrawerItem = ({ item, onItemPress }: DrawerItemProps) => (
  <>
    <Box
      sx={{
        display: "flex",
      }}
      onClick={onItemPress}
    >
      <Box sx={{ flex: [0, 6] }} />
      <Box
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography
          variant="button"
          sx={({ palette }) => ({
            textTransform: "uppercase",
            color: palette.text.secondary,
          })}
        >
          {item.label}
        </Typography>
      </Box>
    </Box>
  </>
);
