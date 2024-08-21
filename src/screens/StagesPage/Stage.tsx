import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { dotPrimary } from "@/assets";

type Props = {
  title: string;
  bulletPoints: Array<string>;
};

export const Stage = ({ title, bulletPoints }: Props) => {
  return (
    <StageWrapper>
      <StageWrapper>
        <TitleWrapper>
          <Title variant="h4">{title}</Title>
        </TitleWrapper>
      </StageWrapper>
      <BulletPointsWrapper>
        {bulletPoints.map((bulletPoint) => (
          <BulletPointText variant="body2" component="li" key={bulletPoint}>
            {bulletPoint}
          </BulletPointText>
        ))}
      </BulletPointsWrapper>
    </StageWrapper>
  );
};

const StageWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  flex: 1,
  width: 420,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [breakpoints.down("md")]: {
    maxWidth: 320,
    width: "100%",
  },
}));

const TitleWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  width: 420,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [breakpoints.down("md")]: {
    maxWidth: 320,
    width: "100%",
  },
}));

const Title = styled(Typography)(({ theme: { palette, spacing } }) => ({
  color: palette.text.primary,
  cursor: "default",
  textTransform: "capitalize",
  paddingBottom: spacing(4),
  paddingTop: spacing(4),
  fontWeight: 700,
}));

const BulletPointsWrapper = styled(Box)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
    paddingTop: spacing(4),
    width: "100%",
    height: `calc(400px - ${spacing(4)})`,
    backgroundColor: palette.common.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: spacing(2),
    [breakpoints.down("md")]: {
      height: "auto",
    },
  })
);

const BulletPointText = styled(Typography)(({ theme: { palette } }) => ({
  cursor: "default",
  listStyleType: "circle",
  color: palette.text.primary,
  listStyleImage: `url(${dotPrimary})`,
})) as typeof Typography;
