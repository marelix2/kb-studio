import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  title: string;
  bulletPoints: Array<string>;
};

export const Stage = ({ title, bulletPoints }: Props) => {
  return (
    <StageWrapper>
      <StageWrapper>
        <TitleWrapper>
          <Title variant="h2">{title}</Title>
        </TitleWrapper>
      </StageWrapper>
      <BulletPointsWrapper>
        {bulletPoints.map((bulletPoint) => (
          <BulletPointText variant="body1" component="li">
            {bulletPoint}
          </BulletPointText>
        ))}
      </BulletPointsWrapper>
    </StageWrapper>
  );
};

const StageWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.primary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 420,
  backgroundColor: palette.primary.main,
  height: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Title = styled(Typography)(({ theme: { palette, spacing } }) => ({
  color: palette.common.white,
  cursor: "default",
  paddingBottom: spacing(4),
  paddingTop: spacing(4),
}));

const BulletPointsWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  paddingTop: spacing(4),
  width: "100%",
  height: `calc(400px - ${spacing(4)})`,
  backgroundColor: palette.common.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing(4),
}));

const BulletPointText = styled(Typography)(({ theme: { palette } }) => ({
  width: 420,
  cursor: "default",
  listStyleType: "circle",
  color: palette.text.primary,
})) as typeof Typography;
