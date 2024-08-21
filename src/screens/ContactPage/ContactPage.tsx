import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { Form } from "./Form";

import { emailIcon, phoneIcon } from "@/assets";
import { PageHeader } from "@/components";

export const ContactPage = () => {
  return (
    <MainContainer id="contact">
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
            <Typography
              variant="body1"
              sx={({ breakpoints }) => ({
                pt: 6,
                [breakpoints.down("md")]: { pt: 2 },
              })}
            >
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

const FirstSectionWrapper = styled(Box)(
  ({ theme: { spacing, breakpoints } }) => ({
    flex: 1,
    maxHeight: "50%",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    padding: spacing(4),
    [breakpoints.down("md")]: {
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
    },
  })
);

const FirstSectionHeaderText = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  cursor: "default",
}));

const SecondSectionWrapper = styled(Box)(
  ({ theme: { spacing, breakpoints } }) => ({
    flex: 1,
    maxHeight: "50%",
    display: "flex",
    flexDirection: "column",
    gap: spacing(2),
    textAlign: "start",
    padding: spacing(4),
    [breakpoints.down("md")]: {
      paddingLeft: spacing(4),
      paddingRight: spacing(4),
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
    },
  })
);

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

const InnerWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  maxWidth: "1920px",
  height: "720px",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  gap: spacing(4),
  [breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
    gap: spacing(2),
  },
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
