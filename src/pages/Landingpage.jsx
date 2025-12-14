
import Navbar from "../components/Navbar";
import Hero from "../components/Hero.jsx";
import FloatingCards from "../components/FloatingCards";

export default function LandingPage() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <FloatingCards />
    </div>
  );
}