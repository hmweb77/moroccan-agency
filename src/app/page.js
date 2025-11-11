import AboutCTA from "@/components/CTA";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Navbar from "@/components/Navbar";
import QuoteSimulator from "@/components/Quote";
import WhyChooseUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QuoteSimulator />
      <WhyChooseUs />
      <HowWeWork />
      <Expertise />
      <AboutCTA />
      <Footer />
    </>
  );
}