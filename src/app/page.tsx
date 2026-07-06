import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Layanan } from "@/components/Layanan";
import { Gallery } from "@/components/Gallery";
import { Testimoni } from "@/components/Testimoni";
import { Lokasi } from "@/components/Lokasi";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Layanan />
      <Gallery />
      <Testimoni />
      <Lokasi />
      <CTA />
      <Footer />
    </>
  );
}
