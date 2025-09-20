"use client";
import { motion } from "framer-motion";
import React from "react";

const BtnOutline = ({ href, content }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-block cursor-pointer rounded-lg border border-gray-500 bg-white px-8 py-2 text-gray-500 font-semibold shadow hover:bg-blue-600 hover:text-white focus:outline-none hover:border-blue-600 transition-all duration-300"
    >
      {content}
    </motion.a>
  );
};

export default BtnOutline;
