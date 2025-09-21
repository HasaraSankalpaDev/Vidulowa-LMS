"use client";
import React from "react";
import { classesData } from "@/data/SectionContent";
import { motion } from "framer-motion";

const Classes = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-6 lg:px-8 mt-8"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-15">
        Classes Categories
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {classesData.map((cls) => (
          <motion.div
            key={cls.name}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white cursor-pointer rounded-lg shadow-md flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="h-40 w-full overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={cls.img}
                alt={cls.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <div className="font-bold text-gray-900 text-lg mb-1">
                {cls.name}
              </div>
              <div className="text-gray-500 text-sm">{cls.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Classes;
