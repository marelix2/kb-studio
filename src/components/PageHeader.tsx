import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = { title: string };
export const PageHeader = ({ title }: Props) => {
  return (
    <HeaderWrapper>
      <TitleText variant="h1" color="primary">
        {title}
      </TitleText>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled(Box)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
    maxWidth: "1920px",
    width: "100%",
    maxHeight: 200,
    marginBottom: spacing(4),
    position: "relative",
    display: "flex",
    borderBottomColor: palette.primary.dark,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    [breakpoints.down(1024)]: {
      Height: 200,
    },
  })
);

const TitleText = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: 96,
  letterSpacing: 12,
  cursor: "default",
  lineHeight: 1.4,
  fontFamily: `"Montserrat", sans-serif`,
  textTransform: "uppercase",
  [breakpoints.down(1441)]: {
    fontSize: 72,
    lineHeight: 1.2,
  },
  [breakpoints.down("sm")]: {
    fontSize: 40,
    lineHeight: 1.2,
  },
}));
