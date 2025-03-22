import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WorkProcess from "../components/WorkProcess";
import ContactUs from "../components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WorkProcess />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
