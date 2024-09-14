"use client";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-8">Bienvenue sur Simplo-Cine</h1>
        <p className="mt-4">
          Découvrez les derniers films et les séances disponibles.
        </p>
      </div>
      <Footer />
    </div>
  );
}