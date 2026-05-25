"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FiShield,
  FiUsers,
} from "react-icons/fi";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f7fbfa] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/whychoose.jpeg"
            alt="Jeevo Health"
            width={600}
            height={600}
            className="rounded-3xl w-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Small Badge */}
          <span className="text-sm font-medium bg-[#0F766E]/10 text-[#0F766E] px-5 py-2 rounded-full">
            WHY CHOOSE JEEVO HEALTH
          </span>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
            className="
            text-4xl font-bold
            text-[#0A0A0A]
            mt-5
            leading-snug
          "
          >
            Discover The Benefits Of
            <br />
            Choosing Jeevo Health.
          </motion.h2>

          {/* Short Description */}
          <p className="text-gray-600 mt-5 max-w-xl leading-relaxed">
            At Jeevo Health, we simplify the healthcare journey
            by connecting patients with experienced doctors,
            advanced hospitals, and complete treatment support —
            ensuring safe, stress-free, and reliable care.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                viewport={{ once: false }}
                className="
                bg-[#0F766E]/10
                p-3
                rounded-xl
                w-fit
              "
              >
                <FiShield className="text-[#0F766E] text-2xl" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="font-semibold mt-3"
              >
                Verified Specialists
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="text-gray-500 text-sm max-w-[220px]"
              >
                Experienced doctors and trusted hospitals
                for safe and advanced treatments.
              </motion.p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: false }}
            >
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                viewport={{ once: false }}
                className="
                bg-[#0F766E]/10
                p-3
                rounded-xl
                w-fit
              "
              >
                <FiUsers className="text-[#0F766E] text-2xl" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="font-semibold mt-3"
              >
                Dedicated Patient Support
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="text-gray-500 text-sm max-w-[220px]"
              >
                Personalized support from consultation
                to surgery and post-treatment recovery.
              </motion.p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-200 my-8"></div>

          {/* Progress Bars */}
          <div className="flex flex-col gap-6">

            {/* Bar 1 */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                <span>Patient Satisfaction</span>
                <span>98%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1 }}
                  className="bg-[#0F766E] h-2 rounded-full"
                  viewport={{ once: true }}
                />
              </div>
            </div>

            {/* Bar 2 */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                <span>Treatment Success Rate</span>
                <span>99%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "99%" }}
                  transition={{ duration: 1 }}
                  className="bg-[#22C55E] h-2 rounded-full"
                  viewport={{ once: true }}
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}