import { Footer, Header } from "./components";
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
      <Header />
      <LandingPage />
      <AboutMePage />
      <OffersPage />
      <StagesPage />
      <PortfolioPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
