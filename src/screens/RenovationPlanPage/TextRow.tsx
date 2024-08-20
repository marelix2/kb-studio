import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  counter: string;
  text: string;
};

export const TextRow = ({ counter, text }: Props) => {
  return (
    <Row>
      <CounterText variant="h1">{counter}</CounterText>
      <Text variant="body2">{text}</Text>
    </Row>
  );
};

const Row = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [breakpoints.down("md")]: {
    gap: spacing(1),
  },
}));

const CounterText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.secondary,
}));

const Text = styled(Typography)(({ theme: {} }) => ({
  maxWidth: 350,
  flex: 1,
}));
