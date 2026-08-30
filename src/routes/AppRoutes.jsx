// ============================================================
// IMPORT REACT ROUTER
// ============================================================

// Routes = Contains all website routes
// Route  = Defines one individual page/URL

import { Routes, Route } from "react-router-dom";


// ============================================================
// IMPORT PAGES
// ============================================================

// Main home page
import Home from "../pages/Home";

// Home Automation detail page
import HomeAutomation from "../pages/services/HomeAutomation";


// ============================================================
// APP ROUTES COMPONENT
// ============================================================

// This component manages the different pages
// of the Arhat website.

function AppRoutes() {

  return (

    <Routes>


      {/* ==================================================
          HOME PAGE
      ================================================== */}

      {/* 
        URL:
        http://localhost:5173/

        When the visitor opens the main website,
        the Home component will be displayed.
      */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* ==================================================
          HOME AUTOMATION PAGE
      ================================================== */}

      {/* 
        URL:
        http://localhost:5173/services/home-automation

        This URL displays the Home Automation page.
      */}

      <Route
        path="/services/home-automation"
        element={<HomeAutomation />}
      />


    </Routes>

  );
}


// ============================================================
// EXPORT COMPONENT
// ============================================================

export default AppRoutes;