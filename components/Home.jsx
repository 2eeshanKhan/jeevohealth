import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServicesSection";
import WhoWeAre from "@/components/WhoWeAre";
import ProductSection from "@/components/ProductSection";
import SmartHomeCTA from "@/components/SmartHomeCTA";
import OurValueSection from "@/components/OurValueSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import  WhyChooseUs from "@/components/WhyChooseUs";
import ClientReviews from "@/components/ClientReviews";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* <Navbar /> */}
      <Hero />
      <ServiceSection />
      <WhoWeAre />
      <ProductSection />
      <SmartHomeCTA />
      <OurValueSection />
     
      <WhyChooseUs />
      <Faq />
      <Blog />
     <ClientReviews />
     {/* <Footer /> */}
    </div>
  );
}


