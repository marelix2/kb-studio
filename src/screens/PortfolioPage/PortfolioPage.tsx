import React from "react";
import { Box, styled, Typography } from "@mui/material";

import { ProjectSection } from "./ProjectSection";

import {
  project_1_1,
  project_1_2,
  project_1_3,
  project_2_1,
  project_2_2,
  project_2_3,
  project_2_4,
  project_2_5,
  project_2_6,
  project_3_1,
  project_3_2,
  project_3_3,
} from "@/assets";

export const PortfolioPage = () => {
  return (
    <MainContainer id="portfolio">
      <BundlesWrapper>
        <HeaderWrapper>
          <Placeholder />
          <ProjectsTitleWrapper>
            <ProjectsTitle variant="h1">Projekty</ProjectsTitle>
          </ProjectsTitleWrapper>
        </HeaderWrapper>
        {projects.map((project) => (
          <ProjectSection {...project} key={project.id} />
        ))}
      </BundlesWrapper>
      <TitleWrapper>
        <Title variant="h1">PORTFOLIO</Title>
      </TitleWrapper>
    </MainContainer>
  );
};

const projects = [
  {
    id: 1,
    clientName: "Mirosław",
    description:
      "Profesjonalizm, dokładność, szybki kontakt i realizacja, możliwość dokonywania korekt w projekcie szybko i solidnie. Polecam.",
    photos: [project_1_1, project_1_2, project_1_3],
  },
  {
    id: 2,
    clientName: "Aleksandra",
    description:
      "Bardzo szybki i łatwy kontakt, przemiła obsługa i realizacja. Pani Karolina umiejętnie doradza w wielu aspektach na każdym etapie swojej pracy i solidnie podchodzi do danego zadania. Projekty są dopieszczone od początku do końca. Ogromnym atutem jest również możliwość dokonywania poprawek w trakcie realizacji projektu.",
    photos: [
      project_2_1,
      project_2_2,
      project_2_3,
      project_2_4,
      project_2_5,
      project_2_6,
    ],
  },
  {
    id: 3,
    clientName: "Marzena",
    description:
      "W krótkim czasie otrzymałam profesjonalnie przygotowane schematy i projekt niełatwego wnętrza, po drodze wiele super propozycji i porad na jego aranżację. Do tego świetny kontakt. Polecam gorąco!",
    photos: [project_3_1, project_3_2, project_3_3],
    isLastOne: true,
  },
];

const MainContainer = styled(Box)(({ theme: {} }) => ({
  maxWidth: "100%",
  minHeight: "100vh",
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
  minHeight: "100vh",
  backgroundColor: palette.primary.main,
  display: "flex",
  alignItems: "center",
}));

const BundlesWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  height: "100%",
  backgroundColor: palette.common.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const HeaderWrapper = styled(Box)(({ theme: {} }) => ({
  width: "100%",
  height: 200,
  display: "flex",
}));

const Placeholder = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.light.main,
}));

const ProjectsTitleWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  backgroundColor: palette.light.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ProjectsTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));
