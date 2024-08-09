import { Box, styled, Typography } from "@mui/material";

import { MobileStagesPage } from "./MobileStagesPage";
import { Stage } from "./Stage";
import { StageHeader } from "./StageHeader";

import { useBreakpoints } from "@/utils";

export const StagesPage = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) return <MobileStagesPage stages={stages} />;

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
              <Typography variant="h4">JAK PRACUJĘ?</Typography>
              <Divider />
              <Typography variant="h4">HYBRYDOWO</Typography>
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
const BottomTitleWrapper = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  maxWidth: 1600,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  paddingBottom: spacing(4),
}));

const BottomWrapper = styled(Box)(({ theme: { breakpoints, spacing } }) => ({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing(2),
  justifyContent: "center",
  [breakpoints.down("md")]: {
    height: 150,
  },
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

const Divider = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  maxWidth: 500,
  display: "flex",
  flexDirection: "column",
  borderTopColor: palette.primary.dark,
  borderTopWidth: 1,
  borderTopStyle: "solid",
}));

const StagesWrapper = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: spacing(6),
}));
