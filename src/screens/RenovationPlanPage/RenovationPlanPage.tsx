import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { TextRow } from "./TextRow";

import { dotLight } from "@/assets";
import { PageHeader } from "@/components";

export const RenovationPlanPage = () => {
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
          <Typography
            variant="h2"
            color="primary"
            sx={({ breakpoints }) => ({
              mt: 4,
              [breakpoints.down("md")]: {
                mt: 0,
                pt: 2,
                borderTopWidth: 1,
                borderTopStyle: "solid",
              },
            })}
          >
            Jakie korzyści płyną ze współpracy ze mną?
          </Typography>
          <BulletPoint component="li" variant="body2">
            Redukcja ryzyka podejmowania nieprzemyślanych decyzji np.
            nieodpowiedni rozkład funkcjonalny lub błędnie rozmieszone punkty
            instalacji elektrycznej itp.
          </BulletPoint>
          <BulletPoint component="li" variant="body2">
            Dokładne zapoznanie się z Twoimi potrzebami na bazie formularzy
            online
          </BulletPoint>
          <BulletPoint component="li" variant="body2">
            Zyskasz świadomość o ergonomii w projektowaniu wnętrz oraz wiedzę
            techniczną i materiałową
          </BulletPoint>
          <BulletPoint component="li" variant="body2">
            Tworzenie projektu według danego budżetu oraz współpraca w luźnej
            atmosferze
          </BulletPoint>
        </Container>
      </InnerWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(
  ({ theme: { spacing, palette, breakpoints } }) => ({
    maxWidth: "100%",
    minHeight: 900,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(4),
    backgroundColor: palette.primary.light,
    [breakpoints.down("md")]: {
      padding: spacing(2),
    },
  })
);

const InnerWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  maxWidth: "1920px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: spacing(4),
  [breakpoints.down("md")]: {
    flexDirection: "column",
    height: "fit-content",
    gap: spacing(1),
  },
}));

const Container = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  width: "100%",
  height: "720px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  flex: 1,
  padding: spacing(8),
  gap: spacing(4),
  [breakpoints.down("md")]: {
    padding: spacing(2),
    maxWidth: 320,
  },
}));

const Border = styled(Box)(({ theme: {} }) => ({
  height: "100%",
  width: 0,
  borderWidth: 1,
  borderStyle: "solid",
}));

const BulletPoint = styled(Typography)(({ theme: {} }) => ({
  listStyleImage: `url(${dotLight})`,
})) as typeof Typography;
