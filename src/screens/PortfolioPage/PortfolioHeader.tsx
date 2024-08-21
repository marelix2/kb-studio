import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";

import { ROUTES } from "@/routes";
import { useBreakpoints } from "@/utils";

type Props = { title: string };
export const PortfolioHeader = ({ title }: Props) => {
  const navigate = useNavigate();
  const { isMobile } = useBreakpoints();

  return (
    <HeaderWrapper>
      <TitleText variant="h1" color="primary">
        {title}
      </TitleText>
      <UIButton
        onClick={() => {
          navigate(ROUTES.gallery);
        }}
      >
        {isMobile ? "projekty" : "Zobacz pełną Galerie"}
      </UIButton>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  maxWidth: "1920px",
  width: "100%",
  maxHeight: 200,
  marginBottom: spacing(4),
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomColor: palette.primary.dark,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
}));

const TitleText = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: 96,
  letterSpacing: 12,
  wordSpacing: "1920px",
  cursor: "default",
  lineHeight: 1.4,
  fontFamily: `"Montserrat", sans-serif`,
  textTransform: "uppercase",
  [breakpoints.down(1441)]: {
    fontSize: 72,
    lineHeight: 1.2,
  },
  [breakpoints.down("md")]: {
    fontSize: 28,
    lineHeight: 1.2,
  },
}));

const UIButton = styled(Button)(
  ({ theme: { spacing, palette, breakpoints } }) => ({
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: palette.primary.dark,
    fontSize: "20px",
    borderStyle: "solid",
    padding: spacing(2),
    minWidth: 240,
    height: 80,
    borderRadius: 0,
    [breakpoints.down("md")]: {
      minWidth: 120,
      height: 44,
      marginBottom: spacing(1),
      padding: spacing(1),
    },
  })
);
