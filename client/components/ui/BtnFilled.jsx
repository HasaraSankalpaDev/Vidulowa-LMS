"use client";
import { motion } from "framer-motion";
import React from "react";

const BtnFilled = ({ href, content }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-lg cursor-pointer bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {content}
    </motion.a>
  );
};

export default BtnFilled;
