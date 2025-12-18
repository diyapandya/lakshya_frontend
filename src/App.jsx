import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
}
