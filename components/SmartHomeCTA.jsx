"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  PhoneCall,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function JeevoHealthCTA() {
  return (
    <section
      className="
      relative overflow-hidden
      py-28 px-6
      bg-gradient-to-br
      from-[#0F766E]
      via-[#115e59]
      to-[#134e4a]
      text-white
    "
    >
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-7"
        >

          {/* BADGE */}
          <span
            className="
            inline-flex items-center gap-2
            bg-white/10
            border border-white/10
            text-orange-300
            px-5 py-2
            rounded-full
            text-sm font-semibold
            backdrop-blur-xl
          "
          >
            🏥 FREE HEALTHCARE CONSULTATION
          </span>

          {/* HEADING */}
          <h2
            className="
            text-4xl md:text-5xl
            font-bold
            leading-tight
          "
          >
            Ready to Start Your
            <br />
            Treatment Journey?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/80 max-w-lg leading-relaxed">
            Connect with experienced doctors, compare top hospitals,
            and receive complete surgical support — from consultation
            to post-treatment recovery.
          </p>

          {/* TRUST POINTS */}
          <div className="space-y-4 pt-2">

            <div className="flex items-center gap-3">
              <ShieldCheck
                className="text-[#22C55E]"
                size={22}
              />
              <span className="text-white/90">
                Verified Doctors & Hospitals
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck
                className="text-[#22C55E]"
                size={22}
              />
              <span className="text-white/90">
                Insurance & EMI Assistance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck
                className="text-[#22C55E]"
                size={22}
              />
              <span className="text-white/90">
                Dedicated End-to-End Care Support
              </span>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">

            {/* PRIMARY BUTTON */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                inline-flex items-center gap-2
                px-7 py-4
                bg-white
                text-[#0F766E]
                rounded-2xl
                font-semibold
                shadow-2xl
                hover:bg-gray-100
                transition
              "
              >
                <PhoneCall size={20} />
                Book Free Consultation
              </motion.button>
            </Link>

            {/* WHATSAPP */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/919999999999?text=Hi, I want consultation for treatment"
              target="_blank"
              className="
              inline-flex items-center gap-2
              px-7 py-4
              bg-[#22C55E]
              hover:bg-[#16a34a]
              rounded-2xl
              font-semibold
              shadow-2xl
              transition
            "
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          relative
          w-full
          rounded-[32px]
          overflow-hidden
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        "
        >
          <Image
            src="/happypatient.jpg"
            alt="Jeevo Health"
            width={700}
            height={520}
            className="object-cover w-full h-full"
          />

          {/* FLOATING CARD */}
          <div
            className="
            absolute
            bottom-6
            left-6
            right-6
            bg-white/95
            backdrop-blur-xl
            rounded-2xl
            p-5
            shadow-xl
          "
          >
            <div className="flex items-center justify-between">

              <div>
                <h4 className="text-[#0F172A] font-bold text-lg">
                  1000+ Happy Patients
                </h4>

                <p className="text-gray-500 text-sm mt-1">
                  Trusted healthcare support across multiple specialties
                </p>
              </div>

              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-[#0F766E]/10
                flex items-center justify-center
              "
              >
                <ShieldCheck
                  className="text-[#0F766E]"
                  size={28}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
