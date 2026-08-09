import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import HomeAutomation from "../pages/services/HomeAutomation";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/services/home-automation"
        element={<HomeAutomation />}
      />
    </Routes>
  );
}

export default AppRoutes;