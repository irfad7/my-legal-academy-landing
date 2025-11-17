import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MyLegalAcademyPage } from "./screens/MyLegalAcademyPage/MyLegalAcademyPage";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./screens/TermsAndConditionsPage/TermsAndConditionsPage";
import { TCPAPolicyPage } from "./screens/TCPAPolicyPage/TCPAPolicyPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MyLegalAcademyPage />} />
        <Route path="/my-legal-academy" element={<Navigate to="/" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/tcpa-policy" element={<TCPAPolicyPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
