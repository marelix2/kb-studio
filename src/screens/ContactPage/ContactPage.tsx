import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Form } from "./Form";

import { emailIcon, phoneIcon } from "@/assets";

export const ContactPage = () => {
  return (
    <MainContainer id="contact">
      <ContactWrapper>
        <ContactTitleWrapper>
          <ContactTitle variant="h1">Masz Pytania?</ContactTitle>
        </ContactTitleWrapper>
        <FirstSectionWrapper>
          <FirstSectionHeaderText variant="h2">
            Chcesz uzyskać wycenę projektu?
          </FirstSectionHeaderText>
          <FirstSectionHeaderText variant="h2">
            Nie wiesz, który pakiet jest dla Ciebie?
          </FirstSectionHeaderText>
          <Typography variant="body1" sx={{ pt: 6 }}>
            Napisz do mnie śmiało, a na wszystko Ci odpowiem.
          </Typography>
        </FirstSectionWrapper>
        <SecondSectionWrapper>
          <Typography variant="body1">K& B STUDIO</Typography>
          <Typography variant="body1">Karolina Plech</Typography>
        </SecondSectionWrapper>
        <SecondSectionWrapper>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SocialImg src={phoneIcon} />
            <Typography variant="body1">+ 48 696 850 891</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SocialImg src={emailIcon} />
            <Typography variant="body1">
              studioprojektowe.kb@gmail.com
            </Typography>
          </Box>
        </SecondSectionWrapper>
      </ContactWrapper>
      <FormWrapper>
        <Form />
      </FormWrapper>
      <TitleWrapper>
        <Title variant="h1">KONTAKT</Title>
      </TitleWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  height: "800px",
  minHeight: "430px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "50% 0",
}));

const Title = styled(Typography)(({ theme: { palette } }) => ({
  paddingTop: 20,
  transform: "rotate(-90deg)",
  transformOrigin: "left top",
  color: palette.text.secondary,
  cursor: "default",
}));

const TitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: 160,
  height: "100%",
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
}));

const FormWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.primary.light,
  display: "flex",
  alignItems: "center",
}));

const ContactWrapper = styled(Box)(({ theme: {} }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

const ContactTitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: "100%",
  height: 200,
  backgroundColor: palette.light.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ContactTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));

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
