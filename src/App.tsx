import "./stylesheets/index.scss";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./redux/store"; // Adjust the path to your store file
import { getSiteLanguages, getLatestSiteUpdate } from "./redux/slices/siteInfoSlice";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Work } from "./components/Work/Work";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { NotFound } from "./components/NotFound/NotFound";
import { BGInitials } from "./components/BGInitials/BGInitials";
import { SiteLoader } from "./components/SiteLoader/SiteLoader";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import { Experience } from "./components/Experience/Experience";
import routes from "./utils/routes";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { chakraTheme } from "./chakraTheme";
import { noPersistColorModeManager } from "./colorMode";

function App () {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadSite = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000)
    };
    loadSite();
    dispatch(getSiteLanguages());
    dispatch(getLatestSiteUpdate());
  }, [dispatch]);

  // INVARIANT: ChakraProvider MUST stay above the isLoading branch so color-mode
  // state (BR-11 toggle) survives the SiteLoader -> Router swap. Do not move it
  // inside a branch.
  return (
    <ChakraProvider theme={chakraTheme} colorModeManager={noPersistColorModeManager}>
      {isLoading ? (
        <SiteLoader />
      ) : (
        <Router>
          <HelmetProvider>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path={routes.WORK_ROUTE} element={<Work />} />
                  <Route path={routes.SKILLS_ROUTE} element={<Skills />} />
                  <Route path={routes.EXPERIENCE_ROUTE} element={<Experience />} />
                  <Route path={routes.CONTACT_ROUTE} element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </AnimatePresence>
          </HelmetProvider>
        </Router>
      )}
    </ChakraProvider>
  );
}

// Full-viewport themed background (was the styled-components BGTheme). Uses the
// bg-main/shadow-main semantic tokens so it swaps with Chakra color mode.
function Layout() {
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      bg="bg-main"
      boxShadow="inset 0px 0px 200px 10px var(--chakra-colors-shadow-main)"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <Nav />
      <Outlet />
      <Footer />
      <BGInitials />
      <ThemeToggle />
    </Box>
  );
}

export default App;
