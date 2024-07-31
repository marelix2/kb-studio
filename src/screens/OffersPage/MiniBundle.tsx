import React from "react";
import { Box, styled } from "@mui/material";

import { BundleBottomFooter } from "./BundleBottomFooter";
import { TextBulletPoints } from "./TextBulletPoints";
import { TextRow } from "./TextRow";

import { PageHeader } from "@/components";

export const MiniBundle = () => {
  return (
    <MainContainer id="mini-bundle">
      <InnerWrapper>
        <BundlesWrapper>
          <PageHeader title={"mini"} />
          <TextWrapper>
            <TextRow
              counter={"01"}
              text={"DLA KOGO JEST TEN PAKIET?"}
              description={`Pakiet przeznaczony jest dla osób, które nie potrzebują projektu całego wnętrza, a jedynie wybranych pomieszczeń`}
            />
            <TextBulletPoints
              counter={"02"}
              text={"CO ZAWIERA PAKIET?"}
              bulletPoints={[
                `rzuty funkcjonalne`,
                `widoki ścian`,
                `rysunki dla stolarza`,
                `zestawienie materiałów [dokładna lista zakupów wszystkich elementów wraz z kosztorysem]`,
                `wizualizacje`,
              ]}
            />
          </TextWrapper>
          <BundleBottomFooter />
        </BundlesWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const BundlesWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const MainContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: spacing(2),
  backgroundColor: palette.primary.light,
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

const TextWrapper = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingBottom: spacing(4),
  paddingLeft: spacing(4),
  gap: spacing(4),
  backgroundColor: palette.primary.light,
}));
