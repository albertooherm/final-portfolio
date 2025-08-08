import ClientOnly from "@/components/layout/ClientOnly";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientOnly>
        <Navigation />
        <Hero />
        <Projects />
        <Footer />
      </ClientOnly>
    </main>
  );
}
