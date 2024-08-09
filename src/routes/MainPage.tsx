import React from "react";

import { Footer, Header } from "@/components";
import {
  AboutMePage,
  ContactPage,
  LandingPage,
  OffersPage,
  PortfolioPage,
  RenovationPlanPage,
  StagesPage,
  YourInteriorPage,
} from "@/screens";

export const MainPage = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <YourInteriorPage />
      <AboutMePage />
      <RenovationPlanPage />
      <OffersPage />
      <StagesPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </>
  );
};
