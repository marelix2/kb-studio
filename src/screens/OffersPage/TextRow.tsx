import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  counter: string;
  text: string;
  description: string;
};

export const TextRow = ({ counter, text, description }: Props) => {
  return (
    <Row>
      <CounterText variant="h1">{counter}</CounterText>
      <Box sx={{ flex: 1 }}>
        <Text variant="body2">{text}</Text>
        <Description variant="body1">{description}</Description>
      </Box>
    </Row>
  );
};

const Row = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: spacing(4),
  [breakpoints.down("md")]: {
    gap: spacing(3),
    alignItems: "flex-start",
  },
}));

const CounterText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.secondary,
}));

const Text = styled(Typography)(({ theme: { breakpoints, spacing } }) => ({
  flex: 1,
  [breakpoints.down("md")]: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: spacing(2),
    flex: 3,
  },
}));

const Description = styled(Typography)(({ theme: {} }) => ({
  flex: 1,
}));
