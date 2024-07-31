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

const Row = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: spacing(4),
}));

const CounterText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.secondary,
}));

const Text = styled(Typography)(({ theme: {} }) => ({
  flex: 1,
}));
const Description = styled(Typography)(({ theme: {} }) => ({
  flex: 1,
}));
