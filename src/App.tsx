import { ThemeProvider } from "./providers/ThemeProvider";
import { AppRoutes } from "./routes/AppRouter";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
