import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-20">
        <Hero />
        <Features />
      </div>
      <Footer />
    </div>
  );
}
