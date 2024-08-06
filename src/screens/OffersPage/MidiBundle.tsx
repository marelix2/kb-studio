import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";

import { BundleBottomFooter } from "./BundleBottomFooter";
import { PDFDialog } from "./PDFDialog";
import { TextBulletPoints } from "./TextBulletPoints";
import { TextRow } from "./TextRow";

import { PageHeader } from "@/components";

export const MidiBundle = () => {
  const [open, setOpen] = useState(false);
  const [isBathroom, setIsBathroom] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainContainer id="midi-bundle">
        <InnerWrapper>
          <BundlesWrapper>
            <PageHeader title={"midi"} />
            <ContentWrapper>
              <TextWrapper>
                <TextRow
                  counter={"01"}
                  text={"DLA KOGO JEST TEN PAKIET?"}
                  description={`Pakiet przeznaczony jest dla osób, które potrzebują jedynie projektu łazienki lub kuchni`}
                />
                <TextBulletPoints
                  counter={"02"}
                  text={"CO ZAWIERAJĄ PAKIETY?"}
                  bulletPoints={[
                    `rzuty funkcjonalne`,
                    `widoki ścian`,
                    `rysunki dla stolarza`,
                    `zestawienie materiałów [dokładna lista zakupów wszystkich elementów wraz z kosztorysem]`,
                    `wizualizacje`,
                  ]}
                />
              </TextWrapper>
              <SecondRow>
                <UIButton
                  onClick={() => {
                    handleClickOpen();
                    setIsBathroom(false);
                  }}
                >
                  PROJEKT KUCHNI
                </UIButton>
                <UIButton
                  onClick={() => {
                    handleClickOpen();
                    setIsBathroom(true);
                  }}
                >
                  PROJEKT ŁAZIENKI
                </UIButton>
              </SecondRow>
            </ContentWrapper>
            <BundleBottomFooter />
          </BundlesWrapper>
        </InnerWrapper>
      </MainContainer>
      <PDFDialog onClose={handleClose} open={open} isBathroom={isBathroom} />
    </>
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

const TextWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flex: 1,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingBottom: spacing(4),
  paddingLeft: spacing(4),
  gap: spacing(4),
}));

const ContentWrapper = styled(Box)(({ theme: { spacing } }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  paddingBottom: spacing(4),
  paddingLeft: spacing(4),
  gap: spacing(4),
}));

const SecondRow = styled(Box)(({ theme: { spacing, palette } }) => ({
  flex: 1,
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

const UIButton = styled(Button)(({ theme: { spacing, palette } }) => ({
  textTransform: "uppercase",
  borderWidth: 1,
  borderColor: palette.primary.dark,
  fontSize: "20px",
  borderStyle: "solid",
  padding: spacing(2),
  minWidth: 240,
  borderRadius: 0,
}));
