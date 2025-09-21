"use client";
import React from "react";
import { contactInfo } from "@/data/ContactData";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import Form from "@/components/ui/Form";
import { contactSchema } from "@/schemas/contactSchema";
import { motion } from "framer-motion"; // <-- Import Framer Motion

export default function page() {
  const fields = [
    { name: "username", label: "Your Name", placeholder: "Enter Your Name" },
    {
      name: "email",
      label: "Your Email Address",
      type: "email",
      placeholder: "Enter  Email Address",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Enter Subject",
    },
    {
      name: "message",
      label: "Your Message",
      type: "textarea",
      rows: "4",
      placeholder: "Enter Your Message",
    },
  ];

  const handleContactSubmit = (data) => {
    console.log("Register Data:", data);
    alert("Success");
  };

  const iconMapper = {
    phone: AiOutlinePhone,
    mail: AiOutlineMail,
    location: AiOutlineEnvironment,
    schedule: AiOutlineClockCircle,
  };

  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      <NavBar />
      <motion.div
        className="min-h-screen flex flex-col text-gray-800"
        initial="hidden"
        animate="visible"
        variants={fadeInUp} // Apply the one-time animation
      >
        <main className="flex-grow py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">Get in Touch</h1>
              <p className="text-gray-600">
                We'd love to hear from you. Whether you have a question about
                our courses, need assistance, or just want to say hello, we're
                here to help.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = iconMapper[item.icon];
                  return (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-500">
                        <Icon size={24} />
                      </div>
                      <div className="">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="mt-1 block text-blue-500 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white px-8 pt-8 pb-8 rounded-xl shadow-lg">
              <Form
                fields={fields}
                buttonText="Send Message"
                onSubmit={handleContactSubmit}
                validationSchema={contactSchema}
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-25 text-center">
            <h2 className="text-3xl font-bold mb-8">Find Us on the Map</h2>
            <div className="max-w-7xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58578651817!2d79.78913222883344!3d6.921922576974271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1709903960762!5m2!1sen!2slk"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </main>
      </motion.div>
      <Footer />
    </div>
  );
}
