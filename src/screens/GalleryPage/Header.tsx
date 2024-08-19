import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { logoWhite } from "@/assets";
import { ROUTES } from "@/routes";

type Props = {
  menuItemSelected?: number;
};

export const Header = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <InnerContainer>
        <>
          <WebContainer>
            <Box
              sx={({ spacing }) => ({
                my: spacing(3),
                cursor: "pointer",
              })}
              onClick={() => {
                navigate(ROUTES.dashboard);
              }}
            >
              <img src={logoWhite} alt="logo" width={"120"} height={"120"} />
            </Box>
          </WebContainer>
        </>
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
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

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
      flex: 3,
      display: "flex",
      backgroundColor: palette.primary.main,
      height: 120,
      alignItems: "center",
      justifyContent: "flex-start",
    })}
  >
    {children}
  </Box>
);
