"use client";
import BtnOutline from "@/components/ui/BtnOutline";
import { teachersData } from "@/data/SectionContent";
import { motion } from "framer-motion";

const TeachersSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 my-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-15">
          Our Top Teachers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-3 gap-8">
          {teachersData.map((teacher) => (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
              key={teacher.name}
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full shadow-lg bg-gray-100">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {teacher.name}
              </h3>
              <p className="text-xs text-gray-600">{teacher.title}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <BtnOutline href={"/teachers"} content={"View all Teachers"} />
        </div>
      </div>
    </motion.section>
  );
};

export default TeachersSection;
