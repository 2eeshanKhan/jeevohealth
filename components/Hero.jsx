"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Hero() {
  return (
   <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-white via-[#f7fbfa] to-[#eef9f7] flex items-center">

      {/* BACKGROUND SHAPES */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#22C55E]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-2 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#0F766E]/10 text-[#0F766E] border border-[#0F766E]/20 rounded-full px-5 py-2 text-sm font-medium">
              🏥 Trusted Healthcare Partner
            </div>

            {/* HEADING */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mt-6">
              Get the Right Surgery,
              <br />
              <span className="text-[#0F766E]">
                Without Stress
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Consult experienced doctors, compare top hospitals,
              and get complete support — from consultation to recovery.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-10">
              <div>
                <h2 className="text-3xl font-bold text-[#0F766E]">
                  1000+
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Patients Assisted
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0F766E]">
                  50+
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Expert Doctors
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0F766E]">
                  25+
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Partner Hospitals
                </p>
              </div>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-8 space-y-4">
              {[
                "Verified Surgeons & Specialists",
                "Insurance & EMI Support",
                "Complete End-to-End Care",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle
                    className="text-[#22C55E]"
                    size={22}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* PRIMARY CTA */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919987537993?text=Hi, I want consultation for treatment"
                target="_blank"
                className="bg-[#0F766E] hover:bg-[#0b5f58] transition text-white px-8 py-4 rounded-2xl font-semibold shadow-xl"
              >
                Book Free Consultation
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919987537993?text=Hi, I want consultation for treatment"
                target="_blank"
                className="bg-[#22C55E] hover:bg-[#16a34a] transition text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-xl"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </motion.a>
            </div>

            {/* URGENCY / ACCENT */}
            <div className="mt-8 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-5 py-3 rounded-xl text-sm font-medium">
              🔥 Free Consultation Available Today
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* FORM CARD */}
            <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.08)] p-8 lg:p-10 max-w-md mx-auto">

              {/* TITLE */}
              <h3 className="text-3xl font-bold text-center text-gray-900">
                Get Free Consultation
              </h3>

              <p className="text-center text-gray-500 mt-2 mb-8">
                Our care team will contact you within 10 minutes
              </p>

              {/* INPUTS */}
              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Patient Name"
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#0F766E]"
                />

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#0F766E]"
                />

                <select className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#0F766E]">
                  <option>Select City</option>
                  <option>Delhi</option>
                  <option>Noida</option>
                  <option>Gurgaon</option>
                </select>

                <select className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-[#0F766E]">
                  <option>Select Treatment</option>
                  <option>LASIK</option>
                  <option>Kidney Stone</option>
                  <option>Bariatric</option>
                </select>
              </div>

              {/* CTA BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-[#0F766E] hover:bg-[#0b5f58] transition text-white py-4 rounded-2xl font-semibold shadow-lg"
              >
                Get Free Consultation
              </motion.button>

              {/* SUPPORT */}
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                <Phone size={16} />
                <span>Need urgent help? Call: +91 9987537993</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}