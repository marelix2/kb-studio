import { Footer, Header } from "./components";
import { ThemeProvider } from "./providers/ThemeProvider";
import {
  AboutMePage,
  ContactPage,
  LandingPage,
  OffersPage,
  PortfolioPage,
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
