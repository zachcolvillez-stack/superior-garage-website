import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <About />
        <BookingForm />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
