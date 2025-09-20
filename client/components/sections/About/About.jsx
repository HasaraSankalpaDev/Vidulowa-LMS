"use client";
import { aboutContent } from "@/data/SectionContent";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }} // animate only once
    transition={{ duration: 0.8 }}
    className="bg-white py-16 px-4 sm:px-6 lg:px-8 my-5"
  >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
      <div className="flex-1 mt-5 lg:text-start md:text-start text-center">
        <h4 className="text-blue-600 font-semibold uppercase mb-2 tracking-wide text-sm">
          {aboutContent.subtitle}
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {aboutContent.title}
        </h2>
        <p className="text-gray-700 mb-4">{aboutContent.desc1}</p>
        <p className="text-gray-700">{aboutContent.desc2}</p>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {aboutContent.features.map((f) => (
          <motion.div
            key={f.title}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="rounded-lg bg-white p-6 flex flex-col shadow-md border border-blue-50"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 mb-4">
              {f.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default About;
