import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage/HomePage";
import { ApplicationSubmittedPage } from "./screens/ApplicationSubmittedPage/ApplicationSubmittedPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/application-submitted" element={<ApplicationSubmittedPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
