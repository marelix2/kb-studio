import { Box, styled, Typography } from "@mui/material";

import { Stage } from "./Stage";
import { StageHeader } from "./StageHeader";

import { arrowSmall } from "@/assets";
import { useBreakpoints } from "@/utils";

export const StagesPage = () => {
  const { isMobile } = useBreakpoints();

  return (
    <MainContainer id="stages">
      <InnerWrapper>
        <BundlesWrapper>
          <StageHeader title="ETAPY WSPÓŁPRACY" />
          <StagesWrapper>
            {stages.map((stage) => (
              <Stage {...stage} key={stage.title} />
            ))}
          </StagesWrapper>
          <BottomWrapper>
            <BottomTitleWrapper>
              <BottomTextHeader variant="h4">JAK PRACUJĘ?</BottomTextHeader>
              <Divider />
              {isMobile && (
                <img src={arrowSmall} alt="arrow down" height={150} />
              )}
              <BottomTextHeader variant="h4">HYBRYDOWO</BottomTextHeader>
            </BottomTitleWrapper>
            <BottomText variant="body2">
              Oznacza to, że część rzeczy [np. inwentaryzacje, spotkania
              materiałowe, omawianie funkcji, instalacji itp.] wykonuję
              stacjonarnie, a pozostałe mailowo lub podczas spotkań online.
            </BottomText>
          </BottomWrapper>
        </BundlesWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const stages = [
  {
    title: "ETAP 1",
    bulletPoints: [
      `Inwentaryzacja`,
      `Ustalenie układu funkcjonalnego`,
      `Wstępna bryła 3D [biała bryła]`,
    ],
  },
  {
    title: "ETAP 2",
    bulletPoints: [
      `Dokładne modelowanie bryły  3D`,
      `Dobranie wstępnych materiałów [zestawienie materiałów]`,
      `Wstępne wyceny`,
      `Omawianie instalacji`,
    ],
  },
  {
    title: "ETAP 3",
    bulletPoints: [
      `Dokumentacja techniczna`,
      `Finalne wizualizacje 3D`,
      `Całkowite zestawienie materiałów`,
    ],
  },
];

const BundlesWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const BottomTitleWrapper = styled(Box)(
  ({ theme: { spacing, breakpoints } }) => ({
    width: "100%",
    maxWidth: 1600,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: spacing(4),
    [breakpoints.down("md")]: {
      flexDirection: "column",
      gap: spacing(2),
    },
  })
);

const BottomWrapper = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing(2),
  justifyContent: "center",
}));

const BottomText = styled(Typography)(({ theme: { spacing } }) => ({
  cursor: "default",
  maxWidth: 1600,
  textAlign: "center",
  paddingBottom: spacing(4),
}));

const MainContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: spacing(4),
  backgroundColor: palette.background.paper,
}));

const InnerWrapper = styled(Box)(({ theme: { spacing } }) => ({
  maxWidth: "1920px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: spacing(4),
}));

const Divider = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  flex: 1,
  maxWidth: 500,
  display: "flex",
  flexDirection: "column",
  borderTopColor: palette.primary.dark,
  borderTopWidth: 1,
  borderTopStyle: "solid",
  [breakpoints.down("md")]: {
    display: "none",
  },
}));

const StagesWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: spacing(6),
  [breakpoints.down("md")]: {
    flexDirection: "column",
    paddingBottom: 100,
  },
}));

const BottomTextHeader = styled(Typography)(({ theme: {} }) => ({
  fontFamily: `"Montserrat", sans-serif`,
  textTransform: "uppercase",
}));
