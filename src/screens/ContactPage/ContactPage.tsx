import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Form } from "./Form";
import { MobileContactPage } from "./MobileContactPage";

import { emailIcon, phoneIcon } from "@/assets";
import { PageHeader } from "@/components";
import { useBreakpoints } from "@/utils";

export const ContactPage = () => {
  const { isMobile } = useBreakpoints();

  if (isMobile) return <MobileContactPage />;

  return (
    <MainContainer>
      <PageHeader title={"MASZ PYTANIE?"} />
      <InnerWrapper>
        <Box flex={1}>
          <FirstSectionWrapper>
            <FirstSectionHeaderText variant="h3">
              Chcesz uzyskać wycenę projektu?
            </FirstSectionHeaderText>
            <FirstSectionHeaderText variant="h3">
              Nie wiesz, który pakiet jest dla Ciebie?
            </FirstSectionHeaderText>
            <Typography variant="body1" sx={{ pt: 6 }}>
              Napisz do mnie śmiało, a na wszystko Ci odpowiem.
            </Typography>
          </FirstSectionWrapper>
          <SecondSectionWrapper>
            <FirmName variant="body2">K& B STUDIO</FirmName>
            <FirmName variant="body2">Karolina Plech</FirmName>
          </SecondSectionWrapper>
          <SecondSectionWrapper>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SocialImg src={phoneIcon} />
              <ContactText variant="body2">+ 48 696 850 891</ContactText>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SocialImg src={emailIcon} />
              <ContactText variant="body2">
                studioprojektowe.kb@gmail.com
              </ContactText>
            </Box>
          </SecondSectionWrapper>
        </Box>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const FirstSectionWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flex: 1,
  maxHeight: "50%",
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  padding: spacing(4),
}));

const FirstSectionHeaderText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  cursor: "default",
}));

const SecondSectionWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flex: 1,
  maxHeight: "50%",
  display: "flex",
  flexDirection: "column",
  gap: spacing(2),
  textAlign: "start",
  padding: spacing(4),
}));

const SocialImg = styled("img")(({ theme: {} }) => ({
  width: 32,
  height: 32,
  cursor: "pointer",
}));

const MainContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",
  minHeight: 700,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: spacing(4),
  backgroundColor: palette.primary.light,
}));

const InnerWrapper = styled(Box)(({ theme: { spacing } }) => ({
  maxWidth: "1920px",
  height: "720px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  gap: spacing(4),
}));

const FormWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.primary.light,
  display: "flex",
}));

const FirmName = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  fontFamily: `"Libre Baskerville", serif`,
  fontWeight: 400,
  cursor: "default",
}));

const ContactText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  fontFamily: `"Libre Baskerville", serif`,
  fontWeight: 400,
  cursor: "default",
}));
