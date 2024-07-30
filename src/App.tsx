import { Footer, Header } from "./components";
import { ThemeProvider } from "./providers/ThemeProvider";
import {
  AboutMePage,
  ContactPage,
  LandingPage,
  OffersPage,
  PortfolioPage,
  RenovationPlanPage,
  StagesPage,
  YourInteriorPage,
} from "./screens";

function App() {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
}

export default App;
