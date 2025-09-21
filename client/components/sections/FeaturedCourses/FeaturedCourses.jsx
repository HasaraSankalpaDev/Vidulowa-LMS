"use client";
import React from "react";
import BtnOutline from "@/components/ui/BtnOutline";
import { featuredCourses } from "@/data/SectionContent";
import { motion } from "framer-motion";

const FeaturedCourses = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 my-5"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-15">
        Featured Classes
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredCourses.map((course) => (
          <motion.div
            key={course.title}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white cursor-pointer rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{course.desc}</p>
              <a
                href={course.link}
                className="text-blue-800 font-semibold text-sm hover:underline mt-auto"
              >
                View Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <BtnOutline href={"/classes"} content={"View all Classes"} />
      </div>
    </motion.section>
  );
};

export default FeaturedCourses;
