"use client";
import React from "react";
import { heroContent } from "@/data/SectionContent";
import BtnFilled from "@/components/ui/BtnFilled";

const HeroSection = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/images/hero-bg.png"})`,
      }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
        {heroContent.title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-gray-200">
        {heroContent.subtitle}
      </p>
      <div className="mt-10 flex justify-center">
        <BtnFilled href={"/classes"} content={heroContent.buttonText} />
      </div>
    </div>
  </section>
);

export default HeroSection;
