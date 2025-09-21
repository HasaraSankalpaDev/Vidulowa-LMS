"use client";
import React from "react";
import BtnClassBlue from "@/components/ui/BtnClassBlue";
import BtnClassLight from "@/components/ui/BtnClassLight";
import { motion } from "framer-motion";

const ClassCard = ({ index, title, desc, status, statusColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      key={index}
      className="bg-white rounded-xl shadow flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-4 border border-gray-100"
    >
      <div className="flex-1 min-w-0">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${statusColor}`}
        >
          {status}
        </span>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-auto md:items-end">
        <BtnClassBlue content={"Enroll Now"} disabled={false} href={"/"} />
        <BtnClassLight href={"/"} content={"View Details"} />
      </div>
    </motion.div>
  );
};

export default ClassCard;
