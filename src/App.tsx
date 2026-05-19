import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Benefits } from "./components/sections/Benefits";
import { EnemAreas } from "./components/sections/EnemAreas";
import { Teachers } from "./components/sections/Teachers";
import { Journey } from "./components/sections/Journey";
import { Opportunities } from "./components/sections/Opportunities";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { FinalCta } from "./components/sections/FinalCta";
import { TeacherPage } from "./pages/TeacherPage";

// Página principal com todas as seções
const HomePage = () => (
  <div className="relative min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
    <Background />
    <Header />
    <main className="relative z-10 w-full flex flex-col items-center">
      <Hero />
      <About />
      <Benefits />
      <EnemAreas />
      <Teachers />
      <Journey />
      <Opportunities />
      <Gallery />
      <Testimonials />
      <FinalCta />
    </main>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/professor/:id" element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  );
}
