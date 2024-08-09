import React, { Fragment } from "react";
import { Box, styled, Typography } from "@mui/material";

import { arrowSmall } from "@/assets";
import { scrollToElement, useBreakpoints } from "@/utils";

type Props = {
  title: string;
  bulletPoints: Array<BulletPoint>;
  arrowType: string;
  id: string;
};

type BulletPoint = {
  title: string;
  cost: string;
};

export const Bundle = ({ title, bulletPoints, arrowType, id }: Props) => {
  const { isMobile } = useBreakpoints();

  return (
    <BundleWrapper
      onClick={() => {
        scrollToElement({ id, block: "start" });
      }}
    >
      <Title variant="h2">{title}</Title>
      <BulletPointsWrapper isMobile={isMobile}>
        <BulletPointsWrapper2>
          {bulletPoints.map(({ title, cost }, index) => (
            <Fragment key={index}>
              <BulletPointTitle variant="h3">{title}</BulletPointTitle>
              <BulletPointText variant="h3">{cost}</BulletPointText>
            </Fragment>
          ))}
        </BulletPointsWrapper2>
        {!isMobile && (
          <img
            src={arrowSmall}
            alt="arrow down"
            height={arrowType === "small" ? 150 : 240}
          />
        )}
      </BulletPointsWrapper>
    </BundleWrapper>
  );
};

const BundleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 360,
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

const BulletPointTitle = styled(Typography)(({ theme: {} }) => ({
  cursor: "default",
  textAlign: "center",
}));

const BulletPointsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile: boolean }>(({ theme: {}, isMobile }) => ({
  width: 360,
  minHeight: isMobile ? 320 : 450,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: isMobile ? "center" : "unset",
}));
const BulletPointsWrapper2 = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: spacing(4),
  paddingBottom: spacing(4),
}));

const BulletPointText = styled(Typography)(({ theme: {} }) => ({
  cursor: "default",
  fontWeight: "700",
})) as typeof Typography;
