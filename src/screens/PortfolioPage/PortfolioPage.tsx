import React from "react";
import { Box, styled } from "@mui/material";

import { PortfolioHeader } from "./PortfolioHeader";
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
      <InnerWrapper>
        <BundlesWrapper>
          <PortfolioHeader title="GALERIA" />
          {projects.map((project) => (
            <ProjectSection
              {...project}
              key={project.id}
              isFirst={project.id === 1}
            />
          ))}
        </BundlesWrapper>
      </InnerWrapper>
    </MainContainer>
  );
};

const projects = [
  {
    id: 1,
    clientName: "Marzena",
    description: `"W krótkim czasie otrzymałam profesjonalnie przygotowane schematy i projekt niełatwego wnętrza, po drodze wiele super propozycji i porad na jego aranżację. Do tego świetny kontakt. Polecam gorąco!"`,
    photos1: [project_1_1, project_1_2, project_1_3],
  },

  {
    id: 2,
    clientName: "Aleksandra",
    description: `"Bardzo szybki i łatwy kontakt, przemiła obsługa i realizacja. Pani Karolina umiejętnie doradza w wielu aspektach na każdym etapie swojej pracy i solidnie podchodzi do danego zadania. Projekty są dopieszczone od początku do końca. Ogromnym atutem jest również możliwość dokonywania poprawek w trakcie realizacji projektu."`,
    photos1: [project_3_1, project_3_2, project_3_3],
  },
  {
    id: 3,
    clientName: "Mirosław",
    description: `"Profesjonalizm, dokładność, szybki kontakt i realizacja, możliwość dokonywania korekt w projekcie szybko i solidnie. Polecam."`,
    photos1: [
      project_2_1,
      project_2_2,
      project_2_3,
      project_2_4,
      project_2_5,
      project_2_6,
    ],
  },
];

const BundlesWrapper = styled(Box)(({ theme: { palette } }) => ({
  flex: 1,
  height: "100%",
  backgroundColor: palette.common.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
