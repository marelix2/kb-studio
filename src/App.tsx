import { Footer, Header } from "./components";
import { ThemeProvider } from "./providers/ThemeProvider";
import {
  AboutMePage,
  ContactPage,
  LandingPage,
  OffersPage,
  PortfolioPage,
  StagesPage,
} from "./screens";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <LandingPage />
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
