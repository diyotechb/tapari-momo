import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import FrozenMomo from "@/components/FrozenMomo";
import CateringSection from "@/components/CateringSection";
import CateringForm from "@/components/CateringForm";
import OrderOnline from "@/components/OrderOnline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <FrozenMomo />
      <CateringSection />
      <CateringForm />
      <OrderOnline />
      <Footer />
    </div>
  );
};

export default Index;
