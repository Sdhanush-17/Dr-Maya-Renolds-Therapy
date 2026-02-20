import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-4">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Office />
      <FAQ />
      <Footer />
    </main>
  );
}