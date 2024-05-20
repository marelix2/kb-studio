import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Stages = Array<{
  title: string;
  bulletPoints: Array<string>;
}>;

type Props = {
  stages: Stages;
};

export const MobileStagesPage = ({ stages }: Props) => {
  return (
    <MainContainer id="stages">
      <InnerWrapper>
        <TitleTextContent>
          <TitleTextWrapper>
            <TitleText variant="h1">WSPÓŁPRACA</TitleText>
          </TitleTextWrapper>
        </TitleTextContent>
        {stages.map(({ title, bulletPoints }) => (
          <>
            <StageWrapper>
              <StageTitleWrapper>
                <StageTitle variant="h2">{title}</StageTitle>
              </StageTitleWrapper>
              <BulletPointsWrapper>
                {bulletPoints.map((bulletPoint) => (
                  <BulletPointText variant="body1" component="li">
                    {bulletPoint}
                  </BulletPointText>
                ))}
              </BulletPointsWrapper>
            </StageWrapper>
          </>
        ))}
        <TitleWrapper>
          <div></div>
        </TitleWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  backgroundSize: "contains",
}));

const InnerWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 8,
  maxWidth: "100%",
  minHeight: "430px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundSize: "contains",
  marginTop: "8px",
}));

const TitleTextContent = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  display: "flex",
  zIndex: 2,
  flexDirection: "column",
  backgroundColor: palette.light.main,
}));

const TitleTextWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.primary.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: spacing(2),
  paddingBottom: spacing(2),
  paddingLeft: spacing(2),
  paddingRight: 0,
  marginRight: 60,
}));

const TitleText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));

const StageWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: spacing(2),
  zIndex: 3,
}));

const StageTitleWrapper = styled(Box)(({ theme: { spacing, palette } }) => ({
  width: `calc(100% - ${spacing(2)})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: palette.common.white,
  paddingRight: spacing(2),
}));

const StageTitle = styled(Typography)(({ theme: { palette, spacing } }) => ({
  color: palette.text.primary,
  cursor: "default",
  textAlign: "end",
  paddingBottom: spacing(2),
  paddingTop: spacing(2),
}));

const BulletPointsWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  paddingTop: spacing(2),
  width: `calc(100% - ${spacing(4)})`,
  height: `calc(250px - ${spacing(2)})`,
  backgroundColor: palette.common.white,
  display: "flex",
  paddingLeft: spacing(2),
  paddingRight: spacing(2),
  flexDirection: "column",
  alignItems: "flex-start",
  gap: spacing(4),
}));

const BulletPointText = styled(Typography)(({ theme: { palette } }) => ({
  cursor: "default",
  listStyleType: "circle",
  color: palette.text.primary,
})) as typeof Typography;

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 60,
  height: "100%",
  position: "absolute",
  zIndex: 2,
  right: 0,
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
}));
