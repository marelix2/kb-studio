import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  counter: string;
  text: string;
  bulletPoints: string[];
};

export const TextBulletPoints = ({ counter, text, bulletPoints }: Props) => {
  return (
    <Row>
      <CounterText variant="h1">{counter}</CounterText>
      <Box sx={{ flex: 1 }}>
        <Text variant="body2">{text}</Text>
        {bulletPoints.map((point) => (
          <Typography variant="body1" component="li" key={point}>
            {point}
          </Typography>
        ))}
      </Box>
    </Row>
  );
};

const Row = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
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
