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

function App () {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSite = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 6000)
    };
    loadSite();
  }, []);
  
  if (isLoading) {
    return <SiteLoader />;
  } else {
    return (
      <Router>
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
      </Router>
    )
  }
  

  function Layout() {
    return (
        <div style={{
          width: "100vw",
          minHeight: "100vh",
          background: "#1E1E1E",
          boxShadow: "inset 0 0 300px 0px #230344", 
          display: "flex", 
          flexDirection: "column",
          overflow: "hidden"
        }}>
        <Nav />
        <Outlet />
        <Footer />
        <BGInitials />
      </div>
    );
  }
}

export default App;
