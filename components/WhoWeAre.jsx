"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  PhoneCall,
} from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-full flex"
        >
          <div className="relative w-full min-h-[760px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/jeevobanner1.png"
              alt="Jeevo Health"
              width={760}
              height={880}
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* BADGE */}
          <span className="text-xs font-semibold bg-[#0F766E]/10 text-[#0F766E] px-4 py-2 rounded-full">
            ABOUT JEEVO HEALTH
          </span>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-5 leading-snug"
          >
            Compassionate Healthcare <br />
            With Trusted Experts.
          </motion.h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 max-w-lg leading-relaxed">
            Jeevo Health connects patients with experienced doctors,
            advanced hospitals, and complete surgical care support —
            ensuring a smooth and stress-free healthcare experience.
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-6 px-6 py-3 rounded-full
              text-white font-semibold shadow-lg
              transition hover:opacity-90
              bg-[#0F766E] hover:bg-[#0c615a]
            "
          >
            Book Free Consultation →
          </button>

          {/* --- ROW --- */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">

            {/* IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/support.webp"
                  alt="Healthcare Support"
                  width={340}
                  height={220}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </motion.div>

            {/* FEATURE BOX */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: false }}
              className="col-span-1 sm:col-span-2"
            >
              <div
                className="
                rounded-2xl
                bg-gradient-to-r
                from-[#0F766E]
                via-[#115e59]
                to-[#134e4a]
                text-white
                p-6
                flex items-center gap-6
                shadow-lg
              "
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold">
                    Advanced Surgical Care
                  </h3>

                  <p className="text-sm opacity-90 mt-2">
                    Modern treatments with expert specialists and
                    personalized patient assistance.
                  </p>
                </div>

                {/* ICON */}
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <HeartPulse size={28} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* SUPPORT BOX */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.16,
            }}
            viewport={{ once: false }}
            className="mt-6"
          >
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 flex items-center justify-center">
                  <ShieldCheck
                    className="text-[#0F766E]"
                    size={28}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Complete End-to-End Care
                  </h4>

                  <p className="text-sm text-gray-600 mt-2">
                    From consultation to recovery, our dedicated care team
                    supports patients throughout their treatment journey.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-gray-500 italic max-w-xl">
              Trusted by thousands of patients for advanced treatments,
              expert doctors, and compassionate healthcare support.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}