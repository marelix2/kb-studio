import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
  bulletPoints: Array<BulletPoint>;
};

type BulletPoint = string;

export const Bundle = ({ title, subtitle, bulletPoints }: Props) => {
  return (
    <BundleWrapper>
      <Title variant="h2">{title}</Title>
      <Subtitle variant="h3">{subtitle}</Subtitle>
      <BulletPointsWrapper>
        <BulletPointsWrapper2>
          {bulletPoints.map((bulletPoint) => (
            <BulletPointText variant="body1" component="li">
              {bulletPoint}
            </BulletPointText>
          ))}
        </BulletPointsWrapper2>
      </BulletPointsWrapper>
    </BundleWrapper>
  );
};

const BundleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 420,
  height: "100%",
  backgroundColor: palette.common.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme: { palette, spacing } }) => ({
  color: palette.primary.main,
  cursor: "default",
  paddingBottom: spacing(4),
  paddingTop: spacing(4),
}));

const Subtitle = styled(Typography)(({ theme: { spacing } }) => ({
  cursor: "default",
  paddingBottom: spacing(4),
  textAlign: "center",
}));

const BulletPointsWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 420,
  backgroundColor: palette.primary.main,
  flex: 1,
}));
const BulletPointsWrapper2 = styled(Box)(({ theme: { spacing } }) => ({
  padding: spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: spacing(4),
}));

const BulletPointText = styled(Typography)(({ theme: { palette } }) => ({
  cursor: "default",
  listStyleType: "circle",
  color: palette.common.white,
})) as typeof Typography;
