import { Box } from "@mui/material";

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
        <Box
          sx={({ breakpoints }) => ({
            [breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <OffersPage />
          <StagesPage />
          <PortfolioPage />
        </Box>
        <ContactPage />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
