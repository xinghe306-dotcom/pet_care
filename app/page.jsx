import { BookingProvider } from "../components/BookingProvider";
import { PawSymbol, Hero, About, Process, Faq } from "../components/Content";
import Navigation from "../components/Navigation";
import ServiceMenu from "../components/ServiceMenu";
import InteriorCarousel from "../components/InteriorCarousel";
import Location from "../components/Location";
import Visit from "../components/Visit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <BookingProvider>
      <PawSymbol />
      <Navigation />
      <main>
        <Hero />
        <ServiceMenu />
        <About />
        <Process />
        <InteriorCarousel />
        <Faq />
        <Location />
        <Visit />
      </main>
      <Footer />
    </BookingProvider>
  );
}
