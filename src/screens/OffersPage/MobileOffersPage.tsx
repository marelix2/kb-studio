import React from "react";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  offers: {
    title: string;
    subtitle: string;
    bulletPoints: string[];
  }[];
};

export const MobileOffersPage = ({ offers }: Props) => {
  return (
    <MainContainer id="offer">
      <InnerWrapper>
        {offers.map(({ title, subtitle, bulletPoints }) => (
          <>
            <TitleContainer>
              <OfferTitle variant="h2">{title}</OfferTitle>
              <Subtitle variant="h3">{subtitle}</Subtitle>
              <Disclaimer variant="body2">
                *możliwość indywidualnej wyceny za projekt lub mieszania
                pakietów. Jeżeli nie jesteś pewna/ny, który pakiet jest dla
                Ciebie, skontaktuj się ze mną, a wycenię projekt indywidualnie
              </Disclaimer>
            </TitleContainer>
            <TextContent>
              <BulletPointsWrapper>
                <BulletPointsWrapper2>
                  {bulletPoints.map((bulletPoint) => (
                    <BulletPointText variant="body1" component="li">
                      {bulletPoint}
                    </BulletPointText>
                  ))}
                </BulletPointsWrapper2>
              </BulletPointsWrapper>
            </TextContent>
          </>
        ))}
        <TitleWrapper>
          <Title variant="h1">OFERTA</Title>
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

const InnerWrapper = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 8,
  maxWidth: "100%",
  minHeight: "430px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundSize: "contains",
  marginTop: "8px",
  paddingBottom: spacing(2),
  backgroundColor: palette.primary.light,
}));

const TitleContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 1,
  minHeight: "300px",
  height: "100%",
  padding: spacing(2),
  marginRight: 60,
  backgroundColor: palette.primary.light,
}));

const TextContent = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 1,
  display: "flex",
  zIndex: 2,
  flexDirection: "column",
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
  paddingLeft: spacing(2),
  paddingRight: spacing(2),
  gap: spacing(4),
  backgroundColor: palette.light.main,
  marginRight: spacing(2),
}));

const TitleWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  width: 60,
  height: "100%",
  position: "absolute",
  right: 0,
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
  paddingBottom: spacing(2),
}));

const Title = styled(Typography)(({ theme: { palette } }) => ({
  position: "absolute",
  top: 200,
  left: 15,
  width: 200,

  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  color: palette.text.secondary,
  cursor: "default",
}));

const OfferTitle = styled(Typography)(({ theme: { palette, spacing } }) => ({
  color: palette.primary.main,
  cursor: "default",
  paddingBottom: spacing(2),
  paddingTop: spacing(4),
  textAlign: "center",
}));

const Subtitle = styled(Typography)(({ theme: { spacing } }) => ({
  cursor: "default",
  paddingBottom: spacing(4),
  textAlign: "center",
}));
const Disclaimer = styled(Typography)(({ theme: { spacing } }) => ({
  cursor: "default",
  paddingBottom: spacing(4),
  textAlign: "center",
}));

const BulletPointsWrapper = styled(Box)(({ theme: { palette } }) => ({
  backgroundColor: palette.light.main,
  flex: 1,
}));
const BulletPointsWrapper2 = styled(Box)(({ theme: { spacing } }) => ({
  padding: spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: spacing(2),
}));

const BulletPointText = styled(Typography)(({ theme: { palette } }) => ({
  cursor: "default",
  listStyleType: "circle",
  color: palette.text.primary,
})) as typeof Typography;
