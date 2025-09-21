"use client";
import React from "react";
import { aboutData } from "@/data/AboutData";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";

export default function page() {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen font-display text-slate-800 flex flex-col mb-8">
        <section className="flex-grow container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                {aboutData.heading.title}{" "}
                <span className="text-blue-600">
                  {aboutData.heading.highlight}
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                {aboutData.heading.description}
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Our Story */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {aboutData.story.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {aboutData.story.text}
                  </p>
                </div>
                <motion.div
                  className="grid grid-cols-2 grid-rows-2 gap-4"
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl col-span-2 row-span-2 min-h-[200px] md:min-h-[260px]"
                    style={{
                      backgroundImage: `url('${aboutData.story.image}')`,
                    }}
                  ></div>
                </motion.div>
              </motion.div>

              {/* Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="p-4 rounded-xl"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-5">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {aboutData.mission.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {aboutData.mission.text}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {aboutData.vision.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {aboutData.vision.text}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Approach & Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <motion.div
                  className="w-full h-64 md:h-full bg-center bg-no-repeat bg-cover rounded-xl"
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                  style={{
                    backgroundImage: `url('${aboutData.approach.image}')`,
                  }}
                ></motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {aboutData.approach.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {aboutData.approach.text}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {aboutData.achievements.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {aboutData.achievements.text}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
