"use client";
import React from "react";
import { testimonialsData } from "@/data/SectionContent";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) =>
      i <= rating ? (
        <FaStar key={i} className="text-yellow-400 w-5 h-5" />
      ) : (
        <FaRegStar key={i} className="text-gray-300 w-5 h-5" />
      )
    )}
  </div>
);

const TestimonialsSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    className="bg-white py-16 px-4 sm:px-6 lg:px-8 my-5 overflow-hidden"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
      Student Testimonials
    </h2>
    <div className="max-w-7xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialsData.map((t) => (
          <SwiperSlide key={t.name} className="flex">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col h-auto"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-100"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.date}</div>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-gray-700 text-md mt-3">{t.text}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination mt-8 flex justify-center" />
    </div>
  </motion.section>
);

export default TestimonialsSection;
