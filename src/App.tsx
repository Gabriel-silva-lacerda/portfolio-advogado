import { Footer } from "./pages/footer/Index";
import { Header } from "./pages/header/Index";
import { ActingSection } from "./pages/home/actingSection/Index";
import { ContactSection } from "./pages/home/contactSection/Index";
import { Home } from "./pages/home/initialSection/Index";
import { OccupancyAreaSection } from "./pages/home/occupancyAreaSection/Index";
import { GlobalStyle } from "./styles/Styles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <ActingSection />
      <OccupancyAreaSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
