import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { TextRow } from "./TextRow";

import { PageHeader } from "@/components";
import { useBreakpoints } from "@/utils";

export const RenovationPlanPage = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) return null;

  return (
    <MainContainer>
      <PageHeader title={"Planujesz remont, ale..."} />
      <InnerWrapper>
        <Container>
          <TextRow
            counter={"01"}
            text={"Nie wiesz, jak zaplanować pomieszczenia?"}
          />
          <TextRow
            counter={"02"}
            text={
              "Nie wiesz, czy meble od stolarza, czy może jednak gotowe, a wybór płytek, podłóg, farb i innych materiałów przerasta Cię?"
            }
          />
          <TextRow
            counter={"03"}
            text={"Nie wiesz, czy przerabiać jakieś instalacje?"}
          />
        </Container>
        <Border />
        <Container>
          <Typography variant="h2" color="primary" sx={{ mt: 4 }}>
            Jakie korzyści płyną ze współpracy ze mną?
          </Typography>
          <Typography component="li">
            Redukcja ryzyka podejmowania nieprzemyślanych decyzji np.
            nieodpowiedni rozkład funkcjonalny lub błędnie rozmieszone punkty
            instalacji elektrycznej itp.
          </Typography>
          <Typography component="li">
            Dokładne zapoznanie się z Twoimi potrzebami na bazie formularzy
            online
          </Typography>
          <Typography component="li">
            Zyskasz świadomość o ergonomii w projektowaniu wnętrz oraz wiedzę
            techniczną i materiałową
          </Typography>
          <Typography component="li">
            Tworzenie projektu według danego budżetu oraz współpraca w luźnej
            atmosferze
          </Typography>
        </Container>
      </InnerWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",
  minHeight: 900,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: spacing(4),
  backgroundColor: palette.primary.light,
}));

const InnerWrapper = styled(Box)(({ theme: { spacing } }) => ({
  maxWidth: "1920px",
  height: "720px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: spacing(4),
}));

const Container = styled(Box)(({ theme: { spacing } }) => ({
  width: "100%",
  height: "720px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  flex: 1,
  padding: spacing(8),
  gap: spacing(4),
}));

const Border = styled(Box)(({ theme: {} }) => ({
  height: "100%",
  width: 0,
  borderWidth: 1,
  borderStyle: "solid",
}));