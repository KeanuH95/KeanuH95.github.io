import "./stylesheets/index.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import Work from "./components/Work/Work"
import Resume from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import BGInitials from "./components/BGInitials/BGInitials";
import SiteLoader from "./components/SiteLoader/SiteLoader"
import routes from "./utils/routes";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import styled, { ThemeProvider } from "styled-components";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App () {
  const [isLoading, setIsLoading] = useState(true);
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const purpleTheme = {
    background: "#460673",
    shadow: "#1E1E1E"
  }

  const blackTheme = {
    background: "#1E1E1E",
    shadow: "#460673"
  }
  
  const BGTheme = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${(props) => props.theme.background};
    box-shadow: inset 0px 0px 200px 10px ${(props) => props.theme.shadow}; 
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  useEffect(() => {
    const loadSite = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 6000)
    };
    loadSite();
  }, []);
  
  if (isLoading) {
    
    return <ThemeProvider theme={isBlackTheme ? blackTheme : purpleTheme}><SiteLoader /></ThemeProvider>;
  } else {
    return (
      <Router>
        <HelmetProvider>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={routes.WORK_ROUTE} element={<Work />} />
                <Route path={routes.SKILLS_ROUTE} element={<Skills />} />
                <Route path={routes.EXPERIENCE_ROUTE} element={<Resume />} />
                <Route path={routes.CONTACT_ROUTE} element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </HelmetProvider>
      </Router>
    )
  }

  function Layout() {
    return (
      <ThemeProvider theme={isBlackTheme ? blackTheme : purpleTheme}>
        <BGTheme>
          <Nav />
          <Outlet />
          <Footer />
          <BGInitials />
          <ThemeToggle isBlackTheme={isBlackTheme} setIsBlackTheme={setIsBlackTheme} />
        </BGTheme>
      </ThemeProvider>
    );
  }
}

export default App;
