"use client";
import BtnFilled from "@/components/ui/BtnFilled";
import { motion } from "framer-motion";
import React from "react";

const CallToActionSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    className="bg-[#edf5ff] py-20 px-4 mt-12"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Ready to Take the Next Step?
      </h2>
      <p className="text-gray-700 mb-8 text-base sm:text-lg">
        Join EduLanka today and unlock your full potential.
      </p>
      <BtnFilled href={"/classes"} content={"Enroll Now"} />
    </div>
  </motion.section>
);

export default CallToActionSection;
