import Footer from "@/components/layout/Footer/Footer";
import NavBar from "@/components/layout/NavBar/NavBar";
import About from "@/components/sections/About/About";
import CallToActionSection from "@/components/sections/CallToActionSection/CallToActionSection";
import Classes from "@/components/sections/Classes/Classes";
import FeaturedCourses from "@/components/sections/FeaturedCourses/FeaturedCourses";
import HeroSection from "@/components/sections/Hero/Hero";
import TeachersSection from "@/components/sections/TeachersSection/TeachersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection/TestimonialsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Classes />
      <FeaturedCourses />
      <TeachersSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default page;
