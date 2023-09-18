import "./stylesheets/index.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import Work from "./components/Work/Work"
import Resume from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import routes from "./utils/routes";

function App () {
    return (
      <Router>
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
      </Router>
    )

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
      </div>
    );
  }
}

export default App;
